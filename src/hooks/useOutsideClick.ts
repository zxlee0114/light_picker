import { useEffect, type RefObject } from "react";

const useOutsideClick = (
  ref: RefObject<HTMLElement | null>,
  callback: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // When ref exists and is not the node clicked, trigger callback
      if (ref === null) return;
      if (!ref.current || ref.current.contains(e.target as Node)) return;

      callback();
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [callback, ref]);
};

export default useOutsideClick;
