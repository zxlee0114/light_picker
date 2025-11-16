export const ROUTES = {
  HOME: "/",
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
