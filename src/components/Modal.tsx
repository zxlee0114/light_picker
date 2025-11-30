"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  skipAnimation?: boolean;
  children: ReactNode;
  className?: string;
};

/**
 * 自訂 Modal 元件，支援跳過開啟動畫
 * 用於在快速重新掛載時避免重複動畫
 */
const Modal = ({
  isOpen,
  onClose,
  skipAnimation = false,
  children,
  className,
}: ModalProps) => {
  const [mounted, setMounted] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [internalIsOpen, setInternalIsOpen] = useState(isOpen);
  const skipAnimationRef = useRef(skipAnimation);

  // 初始化
  useEffect(() => {
    setMounted(true);
  }, []);

  // 直接從 localStorage 讀取 skipAnimation 狀態，不依賴 prop
  useEffect(() => {
    if (!mounted || !isOpen) return;

    if (typeof window === "undefined") {
      setShouldAnimate(!skipAnimation);
      return;
    }

    try {
      const skipFromStorage =
        localStorage.getItem("test-preference-skip-animation") === "true";
      skipAnimationRef.current = skipFromStorage || skipAnimation;
      setShouldAnimate(!skipAnimationRef.current);
    } catch {
      setShouldAnimate(!skipAnimation);
    }
  }, [mounted, isOpen, skipAnimation]);

  // 當 isOpen 改變時更新內部狀態
  useEffect(() => {
    setInternalIsOpen(isOpen);
  }, [isOpen]);

  if (!mounted || !internalIsOpen) {
    return null;
  }

  const backdropClass = cn(
    "fixed inset-0 z-50 bg-black/80 transition-opacity duration-200",
    shouldAnimate ? "animate-in fade-in-0" : "opacity-100",
  );

  const contentClass = cn(
    "fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg bg-background border shadow-lg p-6",
    shouldAnimate
      ? "animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%] duration-200"
      : "opacity-100 scale-100",
    className,
  );

  const handleBackdropClick = (e: React.MouseEvent) => {
    // 只在點擊背景時關閉
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={backdropClass}
        onClick={handleBackdropClick}
        role="presentation"
        aria-hidden="true"
      />

      {/* Content */}
      <div className={contentClass}>{children}</div>
    </>
  );
};

export default Modal;
