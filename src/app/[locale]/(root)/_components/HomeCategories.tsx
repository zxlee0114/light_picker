import { useLocale } from "next-intl";

import { Wrapper } from "@/components/Wrapper";
import { PRODUCT_CATEGORIES } from "@/constants/data";

import CategoryCard from "./CategoryCard";

type Locale = keyof typeof PRODUCT_CATEGORIES;

const HomeCategories = () => {
  const locale = useLocale() as Locale;

  return (
    <section className="@container/home-categories grid sm:gap-10 gap-5 sm:py-30 py-15 bg-gray-100">
      <Wrapper>
        <h2 className="h2-bold-fluid heading-deco-dash">精選商品</h2>
      </Wrapper>
      <Wrapper className="grid lg:grid-cols-4 grid-cols-2 gap-[clamp(0.75rem,2cqi,1.5rem)]">
        {PRODUCT_CATEGORIES[locale].map(category => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </Wrapper>
    </section>
  );
};

export default HomeCategories;
