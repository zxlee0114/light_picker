export const CATEGORIES = [
  "camera",
  "camera-body",
  "lens",
  "accessories",
] as const;

export type CATEGORY = (typeof CATEGORIES)[number];

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  PRODUCTS: {
    CATALOGUE: "/products",
    CATEGORY: (category: CATEGORY) => `/products/category/${category}`,
    DETAILS: (id: string) => `/products/${id}`,
  },
  ACCOUNT: "/account",
  ORDERS: "/account/orders",
  CONTACT: "/contact",
  FAQ: "/faq",
  SELL: "/sell",
} as const;
