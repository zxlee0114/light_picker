import { ROUTES } from "./routes";

const { FAQ, CONTACT, PRODUCTS, SELL, ACCOUNT, ORDERS } = ROUTES;

type FooterLinkItem = {
  destination: string;
  link: string;
};

type FooterSection = {
  title: string;
  items: readonly FooterLinkItem[];
};

type FooterNavigation = Record<string, readonly FooterSection[]>;

export const FOOTER_NAVIGATION = {
  "zh-TW": [
    {
      title: "關於「拾光堂」",
      items: [
        { destination: "常見問題", link: FAQ },
        { destination: "聯絡資訊", link: CONTACT },
      ],
    },
    {
      title: "我想找相機",
      items: [
        {
          destination: "精選商品",
          link: `${PRODUCTS.CATALOGUE}?query=featured`,
        },
        {
          destination: "最新商品",
          link: `${PRODUCTS.CATALOGUE}?query=latest`,
        },
        {
          destination: "商品列表",
          link: PRODUCTS.CATALOGUE,
        },
      ],
    },
    {
      title: "收購流程",
      items: [{ destination: "賣家須知", link: SELL }],
    },
    {
      title: "用戶服務",
      items: [
        { destination: "會員中心", link: ACCOUNT },
        { destination: "訂單查詢", link: ORDERS },
      ],
    },
  ],
  en: [
    {
      title: 'About "Light Picker"',
      items: [
        { destination: "FAQ", link: FAQ },
        { destination: "Contact", link: CONTACT },
      ],
    },
    {
      title: "Find a Camera",
      items: [
        {
          destination: "Featured Products",
          link: `${PRODUCTS.CATALOGUE}?query=featured`,
        },
        {
          destination: "New Arrivals",
          link: `${PRODUCTS.CATALOGUE}?query=latest`,
        },
        {
          destination: "All Products",
          link: PRODUCTS.CATALOGUE,
        },
      ],
    },
    {
      title: "Selling Guide",
      items: [{ destination: "Seller Information", link: SELL }],
    },
    {
      title: "User Services",
      items: [
        { destination: "Account Center", link: ACCOUNT },
        { destination: "Order Tracking", link: ORDERS },
      ],
    },
  ],
} as const satisfies FooterNavigation;
