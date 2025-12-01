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

// HOME BANNER
export const BANNER_SEARCH_ELEMENT = {
  type: "search",
  content: {
    "zh-TW": {
      title: "探詢菲林",
      subtitle: "尋覓光影",
      text: "找尋商品…",
    },
    en: {
      title: "Explore Film",
      subtitle: "Discover Light and Shadow",
      text: "Search for products…",
    },
  },
} as const;

export const BANNER_BTN_ELEMENT = {
  type: "button",
  content: {
    "zh-TW": {
      title: "你的珍藏",
      subtitle: "能是別人的靈光",
      text: "瀏覽商品",
    },
    en: {
      title: "Your Collection",
      subtitle: "Someone's Inspiration",
      text: "Browse Products",
    },
  },
} as const;

export const HOME_BANNER_DATA = [
  {
    id: "bg-home-banner1",
    class: {
      lg: "sm:bg-home-banner1-lg",
      sm: "bg-home-banner1-sm",
    },
    element: BANNER_SEARCH_ELEMENT,
  },
  {
    id: "bg-home-banner2",
    class: {
      lg: "sm:bg-home-banner2-lg",
      sm: "bg-home-banner2-sm",
    },
    element: BANNER_BTN_ELEMENT,
  },
  {
    id: "bg-home-banner3",
    class: {
      lg: "sm:bg-home-banner3-lg",
      sm: "bg-home-banner3-sm",
    },
    element: BANNER_SEARCH_ELEMENT,
  },
  {
    id: "bg-home-banner4",
    class: {
      lg: "sm:bg-home-banner4-lg",
      sm: "bg-home-banner4-sm",
    },
    element: BANNER_BTN_ELEMENT,
  },
] as const;
