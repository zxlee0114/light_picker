import type { SvgIconId } from "@/components/Icon";

import { ROUTES } from "./routes";

const PIC_PATH_TO_HOME = "/images/home";
const FEATURE_PICS = `${PIC_PATH_TO_HOME}/feature`;
const CATEGORY_PICS = `${PIC_PATH_TO_HOME}/category`;
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
      text: "Search…",
    },
  },
} as const;

export const BANNER_BTN_ELEMENT = {
  type: "button",
  content: {
    "zh-TW": {
      title: "你的珍藏",
      subtitle: "別人的靈光",
      text: "瀏覽商品",
    },
    en: {
      title: "Your Collection",
      subtitle: "Someone's Inspiration",
      text: "Browse",
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

export const PRODUCT_CATEGORIES = {
  "zh-TW": [
    {
      title: "相機",
      image: `${CATEGORY_PICS}/category-1.png`,
      path: `${ROUTES.PRODUCTS.CATEGORY("camera")}`,
    },
    {
      title: "機身",
      image: `${CATEGORY_PICS}/category-2.png`,
      path: `${ROUTES.PRODUCTS.CATEGORY("camera-body")}`,
    },
    {
      title: "鏡頭",
      image: `${CATEGORY_PICS}/category-3.png`,
      path: `${ROUTES.PRODUCTS.CATEGORY("lens")}`,
    },
    {
      title: "配件",
      image: `${CATEGORY_PICS}/category-4.png`,
      path: `${ROUTES.PRODUCTS.CATEGORY("accessories")}`,
    },
  ],
  en: [
    {
      title: "Camera",
      image: `${CATEGORY_PICS}/category-1.png`,
      path: `${ROUTES.PRODUCTS.CATEGORY("camera")}`,
    },
    {
      title: "Camera Body",
      image: `${CATEGORY_PICS}/category-2.png`,
      path: `${ROUTES.PRODUCTS.CATEGORY("camera-body")}`,
    },
    {
      title: "Lens",
      image: `${CATEGORY_PICS}/category-3.png`,
      path: `${ROUTES.PRODUCTS.CATEGORY("lens")}`,
    },
    {
      title: "Accessories",
      image: `${CATEGORY_PICS}/category-4.png`,
      path: `${ROUTES.PRODUCTS.CATEGORY("accessories")}`,
    },
  ],
};

export const WHY_US_REASONS = {
  "zh-TW": [
    {
      id: "why_us_reason_01",
      title: "貨源可信，杜絕詐騙",
      description:
        "賣家申請審核通過後，拾光堂堅決親自收貨，杜絕一切詐騙可能性。",
      images: {
        lg: `${FEATURE_PICS}/feature-1-lg.png`,
        sm: `${FEATURE_PICS}/feature-1-sm.png`,
      },
    },
    {
      id: "why_us_reason_02",
      title: "機況透明，眼見為憑",
      description:
        "任何商品都會依新舊程度分類，您不只可以在頁面看見詳盡的機況描述，也歡迎親自到店查看。",
      images: {
        lg: `${FEATURE_PICS}/feature-2-lg.png`,
        sm: `${FEATURE_PICS}/feature-2-sm.png`,
      },
    },
    {
      id: "why_us_reason_03",
      title: "分期付款，減輕負擔",
      description:
        "凡下單 3,000 元以上，您便享有最高 6 個月的 0 利率分期，減輕您的買機負擔。",
      images: {
        lg: `${FEATURE_PICS}/feature-3-lg.png`,
        sm: `${FEATURE_PICS}/feature-3-sm.png`,
      },
    },
    {
      id: "why_us_reason_04",
      title: "半年保固，終生服務",
      description:
        "只要是從拾光堂下單的商品，無論新舊，都享有半年的保固期，有任何疑難雜症都歡迎聯絡我們詢問。",
      images: {
        lg: `${FEATURE_PICS}/feature-4-lg.png`,
        sm: `${FEATURE_PICS}/feature-4-sm.png`,
      },
    },
  ],
  en: [
    {
      id: "why_us_reason_01",
      title: "Trusted Sources, Fraud-Free",
      description:
        "Every seller must pass our review process, and all items are received directly by us to eliminate any possibility of fraud.",
      images: {
        lg: `${FEATURE_PICS}/feature-1-lg.png`,
        sm: `${FEATURE_PICS}/feature-1-sm.png`,
      },
    },
    {
      id: "why_us_reason_02",
      title: "Transparent Condition, What You See Is What You Get",
      description:
        "All products are categorized based on their condition. You can view detailed descriptions online, and you’re always welcome to visit our store for an in-person inspection.",
      images: {
        lg: `${FEATURE_PICS}/feature-2-lg.png`,
        sm: `${FEATURE_PICS}/feature-2-sm.png`,
      },
    },
    {
      id: "why_us_reason_03",
      title: "Installment Options to Ease Your Budget",
      description:
        "For any order over NT$3,000, you can enjoy up to 6 months of interest-free installments, making your purchase easier and stress-free.",
      images: {
        lg: `${FEATURE_PICS}/feature-3-lg.png`,
        sm: `${FEATURE_PICS}/feature-3-sm.png`,
      },
    },
    {
      id: "why_us_reason_04",
      title: "6-Month Warranty with Lifetime Support",
      description:
        "All items purchased from us—whether new or used—include a 6-month warranty. If you encounter any issues, feel free to reach out anytime.",
      images: {
        lg: `${FEATURE_PICS}/feature-4-lg.png`,
        sm: `${FEATURE_PICS}/feature-4-sm.png`,
      },
    },
  ],
} as const;
