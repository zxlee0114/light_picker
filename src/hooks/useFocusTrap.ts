import { type RefObject, useEffect } from "react";

const useFocusTrap = (
  ref: RefObject<HTMLElement | null>,
  isActive: boolean,
) => {
  useEffect(() => {
    if (!isActive || ref === null) return;

    const container = ref.current;
    if (!container) return;

    const focusableSelectors =
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';

    const focusableElements = Array.from(
      container.querySelectorAll<HTMLElement>(focusableSelectors),
    ).filter(el => !el.hasAttribute("disabled"));

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    // 初次開啟時把焦點放在第一個元素
    first?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || focusableElements.length === 0) return;

      if (e.shiftKey) {
        // Shift + Tab（往回）
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        // Tab（往前）
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isActive, ref]);
};

export default useFocusTrap;
