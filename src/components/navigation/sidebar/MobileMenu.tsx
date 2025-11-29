import { useEffect, type FC, type ReactNode } from "react";

import Icon from "@/components/Icon";
import useScrollLock from "@/hooks/useScrollLock";
import { cn } from "@/lib/utils";

import Logo from "../Logo";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const MobileMenu: FC<Props> = props => {
  const { isOpen, onClose } = props;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useScrollLock(isOpen);

  return (
    <>
      <SidebarOverlay {...props} />
      <SidebarWrapper {...props} />
    </>
  );
};

const SidebarWrapper: FC<Props> = ({ isOpen, onClose, children }) => (
  <aside
    className={cn(
      "fixed inset-y-0 end-0 z-50 w-[min(375px,100%)] bg-white transition",
      isOpen ? "translate-x-0" : "translate-x-full",
    )}
  >
    <header className="flex-between gap-5 py-5 px-2">
      <Logo />
      <Icon name="close" onClick={onClose} className="size-12 link" />
    </header>
    <nav className="py-2 px-3">{children}</nav>
  </aside>
);

const SidebarOverlay: FC<Omit<Props, "children">> = ({ isOpen, onClose }) => (
  <div
    onClick={onClose}
    className={cn(
      "fixed inset-0 z-40 bg-black/40 transition-opacity",
      isOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none",
    )}
  />
);
export default MobileMenu;
