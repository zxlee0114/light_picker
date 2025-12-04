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
      className={cn("max-w-[1296px] mx-auto px-4", className)}
      {...props}
    >
      {children}
    </Component>
  );
};
