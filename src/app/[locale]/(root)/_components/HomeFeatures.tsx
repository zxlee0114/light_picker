import { useLocale, useTranslations } from "next-intl";

import ArtDirectedImage from "@/components/ArtDirectedImage";
import { Wrapper } from "@/components/Wrapper";
import { WHY_US_REASONS } from "@/constants/data";
import { cn } from "@/lib/utils";

type Locale = keyof typeof WHY_US_REASONS;

const HomeFeatures = () => {
  const locale = useLocale() as Locale;
  const t = useTranslations("home");

  return (
    <section className="@container/home-features bg-gray-0 sm:py-30 py-15 grid sm:gap-20 gap-5">
      <Wrapper className="2xl:px-0 sm:px-6 px-3">
        <h2 className="h2-bold-fluid heading-deco-dash">{t("whyUs")}</h2>
      </Wrapper>
      <Wrapper className="2xl:w-full flex flex-col gap-10 2xl:px-0 sm:px-6 px-3">
        {WHY_US_REASONS[locale].map((item, index) => {
          const { id, title, description, images } = item;
          const even = (index + 1) % 2 === 0;

          return (
            <div
              key={id}
              className={cn(
                "flex sm:items-center items-start max-2xl:justify-between sm:gap-[clamp(3.75rem,9.25cqi,7.5rem)] gap-3",
                "sm:flex-row-reverse",
                even && "sm:flex-row",
                "flex-col",
              )}
            >
              {/* img section */}
              <div
                className={cn(
                  "2xl:w-[56.614583%] max-2xl:grow max-sm:w-full overflow-hidden seafoam-overlay rounded-md shadow-xl",
                  even ? "2xl:rounded-s-none" : "2xl:rounded-e-none",
                )}
              >
                <ArtDirectedImage
                  alt={title}
                  defaultImg={{ src: images.sm, width: 480, height: 800 }}
                  sources={[
                    {
                      breakpoint: "sm",
                      src: images.lg,
                      width: 1087,
                      height: 512,
                    },
                  ]}
                />
              </div>

              <div className="lg:basis-[401px] sm:basis-1/3 flex flex-col sm:gap-4 gap-2">
                <h3 className="h3-bold-fluid">{title}</h3>
                <p className="@4xl/home-features:h5-regular h6-regular">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </Wrapper>
    </section>
  );
};

export default HomeFeatures;
