import { useEffect, useRef } from "react";
import type { FC, ReactNode, Ref } from "react";

import Icon from "@/components/Icon";
import useFocusTrap from "@/hooks/useFocusTrap";
import useOutsideClick from "@/hooks/useOutsideClick";
import useScrollLock from "@/hooks/useScrollLock";
import { cn } from "@/lib/utils";

import Logo from "./navigation/Logo";

type DrawerPlacement = "left" | "right" | "top" | "bottom";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  placement?: DrawerPlacement;
};

const Drawer: FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  className,
  placement = "right",
}) => {
  const drawerRef = useRef<HTMLElement>(null);

  useScrollLock(isOpen);
  useOutsideClick(drawerRef, onClose);
  useFocusTrap(drawerRef, isOpen);

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

  return (
    <>
      <DrawerOverlay isOpen={isOpen} />
      <DrawerContent
        ref={drawerRef}
        isOpen={isOpen}
        className={className}
        placement={placement}
      >
        {children}
      </DrawerContent>
    </>
  );
};

const DrawerOverlay: FC<Pick<DrawerProps, "isOpen">> = ({ isOpen }) => (
  <div
    className={cn(
      "fixed inset-0 z-40 bg-black/40 transition-opacity",
      isOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none",
    )}
  />
);

type DrawerContentProps = Omit<DrawerProps, "onClose"> & {
  ref: Ref<HTMLElement>;
};

const placementStyles: Record<
  DrawerPlacement,
  { position: string; open: string; closed: string }
> = {
  right: {
    position: "fixed inset-y-0 end-0 w-[min(375px,100%)]",
    open: "translate-x-0",
    closed: "translate-x-full",
  },
  left: {
    position: "fixed inset-y-0 start-0 w-[min(375px,100%)]",
    open: "translate-x-0",
    closed: "-translate-x-full",
  },
  top: {
    position: "fixed inset-x-0 top-0 h-[min(300px,100%)]",
    open: "translate-y-0",
    closed: "-translate-y-full",
  },
  bottom: {
    position: "fixed inset-x-0 bottom-0 h-[min(300px,100%)]",
    open: "translate-y-0",
    closed: "translate-y-full",
  },
};

const DrawerContent: FC<DrawerContentProps> = ({
  ref,
  isOpen,
  children,
  className,
  placement,
}) => {
  const style = placementStyles[placement!];
  return (
    <aside
      ref={ref}
      inert={!isOpen}
      className={cn(
        style.position,
        "z-50 bg-white transition transform flex flex-col p-2",
        isOpen ? style.open : style.closed,
        className,
      )}
    >
      {children}
    </aside>
  );
};

type DrawerHeaderProps =
  | {
      replaceLogo: false;
      onClose: () => void;
      className?: string;
    }
  | {
      replaceLogo: true;
      titleChildren: ReactNode;
      onClose: () => void;
      className?: string;
    };

const DrawerHeader: FC<DrawerHeaderProps> = props => {
  return (
    <header className={cn("flex-between gap-5 py-5 px-2", props.className)}>
      {props.replaceLogo ? <>{props.titleChildren}</> : <Logo />}
      <Icon name="close" onClick={props.onClose} className="size-12 link" />
    </header>
  );
};

type FooterProps = {
  children: ReactNode;
  className?: string;
};

const DrawerFooter: FC<FooterProps> = ({ children, className }) => {
  return <footer className={cn("p-2 mt-auto", className)}>{children}</footer>;
};

export { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay };
