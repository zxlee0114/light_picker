import type { SvgIconId } from "@/components/Icon";

const LINK_PLACEHOLDER = "https://github.com/zxlee0114/light_picker" as const;

export type SocialIcons = Extract<SvgIconId, "facebook" | "instagram" | "line">;
export type SocialNetworks = Capitalize<SocialIcons>;
export type SocialLinks = {
  title: SocialNetworks;
  link: typeof LINK_PLACEHOLDER;
  icon: SocialIcons;
}[];

export const SOCIAL_LINKS = [
  {
    title: "Facebook",
    link: LINK_PLACEHOLDER,
    icon: "facebook",
  },
  {
    title: "Instagram",
    link: LINK_PLACEHOLDER,
    icon: "instagram",
  },
  {
    title: "Line",
    link: LINK_PLACEHOLDER,
    icon: "line",
  },
] satisfies SocialLinks;
