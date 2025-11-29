import type { SVGProps } from "react";

import type { SvgIconId } from "@/components/Icon";
import Icon from "@/components/Icon";
import { cn } from "@/lib/utils";

type Props = {
  name: "favorite" | "cart";
  className?: string;
} & SVGProps<SVGSVGElement>;

const CollectionIcon = ({ name, className, ...props }: Props) => {
  return (
    <>
      <div className="relative">
        <Icon
          name={name as SvgIconId}
          {...props}
          className={cn("size-6 link", className)}
        />
        <span className="flex-center absolute -top-0.5 -end-1 z-10 size-2.5 rounded-full bg-danger" />
      </div>
    </>
  );
};

export default CollectionIcon;
