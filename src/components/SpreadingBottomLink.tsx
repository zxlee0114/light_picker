import type { ComponentProps, ReactNode } from "react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  linkClass?: string;
  borderClass?: string;
} & ComponentProps<typeof Link>;

const SpreadingBottomLink = ({
  href,
  children,
  linkClass,
  borderClass,
  ...rest
}: Props) => {
  return (
    <Link
      href={href}
      className={cn("link relative group", linkClass)}
      {...rest}
    >
      {children}
      <span
        className={cn(
          "absolute -bottom-0.5 start-1/2 w-0 group-hover:w-1/2 group-hover:start-0 h-0.5 bg-warning transition-all",
          borderClass,
        )}
      />
      <span
        className={cn(
          "absolute -bottom-0.5 end-1/2 w-0 group-hover:w-1/2 group-hover:end-0 h-0.5 bg-warning transition-all",
          borderClass,
        )}
      />
    </Link>
  );
};

export default SpreadingBottomLink;
