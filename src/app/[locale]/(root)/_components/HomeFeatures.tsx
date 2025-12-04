import { useLocale } from "next-intl";

import ArtDirectedImage from "@/components/ArtDirectedImage";
import { WHY_US_REASONS } from "@/constants/data";
import { cn } from "@/lib/utils";

type Locale = keyof typeof WHY_US_REASONS;

const HomeFeatures = () => {
  const locale = useLocale() as Locale;
  return (
    <section className="bg-gray-0 sm:py-30 py-15 grid gap-20">
      {WHY_US_REASONS[locale].map((item, index) => {
        const { id, title, description, images } = item;

        return (
          <div
            key={id}
            className="grid grid-cols-2 odd:[grid-template-areas:'f-text_f-image'] even:[grid-template-areas:'f-image_f-text'] items-center gap-30"
          >
            {/* img section */}
            <div className="[grid-area:f-image]">
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
            <div
              className={cn(
                "[grid-area:f-text] justify-self-end",
                "w-[min(588px,100%)] px-4", // (Wrapper width - gap) / 2 => (1296 - 120) / 2 = 588
                index % 2 !== 0 && "justify-self-start flex-end",
              )}
            >
              <div className="max-w-[401px] flex flex-col gap-4">
                <h3 className="h3-bold">{title}</h3>
                <p className="h5-regular">{description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default HomeFeatures;
