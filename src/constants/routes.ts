export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  PRODUCTS: {
    CATALOGUE: "/products",
    DETAILS: (id: string) => `/products/${id}`,
  },
  ACCOUNT: "/account",
  ORDERS: "/account/orders",
  CONTACT: "/contact",
  FAQ: "/faq",
  SELL: "/sell",
} as const;
