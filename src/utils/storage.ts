function setItem(key: string, value: string) {
  localStorage.setItem(key, value);
}

function getItem(key: string) {
  let val: string | null = null;
  try {
    val = localStorage.getItem(key);
  } catch (error) {
    val = null;
    const storageError = error as Error;
    if (
      storageError.name === "SecurityError" ||
      storageError.name === "QuotaExceededError"
    ) {
      val = "";
    }
  }

  return val;
}

function removeItem(key: string) {
  localStorage.removeItem(key);
}

function clearStorage() {
  localStorage.clear();
}

export default {
  set: setItem,
  remove: removeItem,
  get: getItem,
  clear: clearStorage
};
