import React from "react";

interface DropdownContentProps {
  onClose: Function;
  children: React.ReactNode;
}

const DropdownContent: React.FC<DropdownContentProps> = ({
  onClose,
  children
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const escapeListener = React.useCallback((e: any) => {
    if (e.key === "Escape") {
      onClose();
    }
    // eslint-disable-next-line
  }, []);

  const clickListener = React.useCallback(
    (e: any) => {
      if (ref.current !== null) {
        if (!ref.current.contains(e.target)) {
          onClose();
        }
      }
    },
    // eslint-disable-next-line
    [ref.current]
  );

  React.useEffect(() => {
    document.addEventListener("click", clickListener);
    document.addEventListener("keyup", escapeListener);
    return () => {
      document.removeEventListener("click", clickListener);
      document.removeEventListener("keyup", escapeListener);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div className="mb-3" ref={ref}>
      {children}
    </div>
  );
};

export default DropdownContent;
