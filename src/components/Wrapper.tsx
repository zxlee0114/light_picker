import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type WrapperProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const Wrapper = <T extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: WrapperProps<T>) => {
  const Component = as ?? "div";
  return (
    <Component
      className={cn(
        "w-[min(1296px,100%)] mx-auto px-[clamp(1rem,4vw,2rem)]",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
