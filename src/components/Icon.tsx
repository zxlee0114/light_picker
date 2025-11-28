import { type FC, type SVGProps } from "react";

export type SvgIconId =
  | "arrow-down"
  | "chevron-left"
  | "chevron-right"
  | "heading-arrow"
  | "search"
  | "menu"
  | "warning"
  | "close"
  | "cart"
  | "filter"
  | "favorite"
  | "favorite_filled"
  | "filter"
  | "instagram"
  | "facebook"
  | "line"
  | "facebook-oauth"
  | "google-oauth";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: SvgIconId; // The ID of the symbol in the sprite
}

const Icon: FC<IconProps> = ({ name, className, ...props }) => {
  return (
    <svg className={className} {...props}>
      <use href={`/icons/sprites.svg#${name}`} />
    </svg>
  );
};

export default Icon;
