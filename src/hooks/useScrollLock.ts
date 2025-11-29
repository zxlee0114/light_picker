import { useEffect, useRef } from "react";

/**
 * @param locked - 判斷是否鎖住 body 滾動
 * @description 鎖定 body scroll，並在解除後還原滾動位置
 */

const useScrollLock = (locked: boolean) => {
  const scrollYRef = useRef(0);
  const viewportHeightRef = useRef(0);
  const scrollbarWidthRef = useRef(0);

  useEffect(() => {
    if (!locked) return;

    scrollYRef.current = window.scrollY;
    viewportHeightRef.current = window.innerHeight;

    // 計算 Y 軸寬度，並將值存入 ref
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    scrollbarWidthRef.current = scrollbarWidth;

    document.body.style.position = "fixed";
    document.body.style.insetBlockStart = `-${scrollYRef.current}px`;
    document.body.style.insetInline = "0";
    document.body.style.overflow = "hidden";
    document.body.style.inlineSize = "100%";

    // 在右側 padding 補上 Y 軸寬度，避免 Y 軸消失的晃動
    if (scrollbarWidth > 0) {
      document.body.style.paddingInlineEnd = `${scrollbarWidth}px`;
    }

    document.body.style.height = `${viewportHeightRef.current}px`;

    return () => {
      document.body.style.position = "";
      document.body.style.insetBlockStart = "";
      document.body.style.insetInline = "";
      document.body.style.overflow = "";
      document.body.style.inlineSize = "";
      document.body.style.paddingInlineEnd = "";

      window.scrollTo({ top: scrollYRef.current });
    };
  }, [locked]);
};

export default useScrollLock;
