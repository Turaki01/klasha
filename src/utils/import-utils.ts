import { lazy } from "react";

/**
 * lazyWithRetry:
 *
 * @CHECK: https://gist.github.com/raphael-leger/4d703dea6c845788ff9eb36142374bdb#file-lazywithretry-js
 *
 * @param componentImport
 * @returns
 */
export const lazyWithRetry = (
  componentImport: () => Promise<{ default: () => JSX.Element | null }>
) =>
  lazy<() => JSX.Element | null>(async () => {
    const pageHasAlreadyBeenForceRefreshed = JSON.parse(
      window.sessionStorage.getItem("page-has-been-force-refreshed") || "false"
    );

    try {
      const component = await componentImport();

      window.sessionStorage.setItem("page-has-been-force-refreshed", "false");

      return component;
    } catch (error) {
      if (!pageHasAlreadyBeenForceRefreshed) {
        /* @HINT: Assuming that the user is not on the latest version of the application. */
        /* @HINT: Let's refresh the page immediately. */
        window.sessionStorage.setItem("page-has-been-force-refreshed", "true");
        window.location.reload();
      } else {
        /* @HINT: If we get here, it means the page has already been reloaded */
        /* @HINT: Assuming that user is already using the latest version of the application. */
        /* @HINT: Let's let the application crash and raise the error. */
        throw error;
      }
      return { default: () => null };
    }
  });

/**
 * componentLoader:
 *
 * @CHECK: https://medium.com/@botfather/react-loading-chunk-failed-error-88d0bb75b406
 *
 * @param lazyComponent
 * @param attemptsLeft
 * @returns
 */
export function componentLoader<
  M extends { default: () => JSX.Element | null }
>(lazyComponent: () => Promise<M>, attemptsLeft = 3) {
  return new Promise<M>((resolve, reject) => {
    lazyComponent()
      .then(resolve)
      .catch((error) => {
        /* @HINT: let us retry after 1500 milliseconds */
        setTimeout(() => {
          if (attemptsLeft === 1) {
            reject(error);
            return;
          }
          componentLoader(lazyComponent, attemptsLeft - 1).then(
            resolve,
            reject
          );
        }, 1500);
      });
  });
}
