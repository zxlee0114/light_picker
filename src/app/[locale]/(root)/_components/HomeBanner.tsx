"use client";

import { useLocale } from "next-intl";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Wrapper } from "@/components/Wrapper";
import {
  HOME_BANNER_DATA,
  type BANNER_BTN_ELEMENT,
  type BANNER_SEARCH_ELEMENT,
} from "@/constants/data";
import { ROUTES } from "@/constants/routes";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import BannerSearchBar from "./BannerSearchBar";

type Locale =
  | keyof typeof BANNER_SEARCH_ELEMENT.content
  | keyof typeof BANNER_BTN_ELEMENT.content;

const HomeBanner = () => {
  const locale = useLocale() as Locale;

  return (
    <section className="bg-gray-0 pt-15 pb-25">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        pagination={{
          el: "#Home_Banner_Carousel_Pagination",
          renderBullet: (_index, className) =>
            `<span class="${className}"></span>`,
          clickable: true,
        }}
      >
        {HOME_BANNER_DATA.map(banner => {
          const { id, class: backgroundImage, element } = banner;
          const { content, type } = element;
          const { title, subtitle, text } = content[locale];

          return (
            <SwiperSlide key={id}>
              <Wrapper
                className={cn(
                  "sm:h-110 h-56 w-full sm:py-22.5 py-10 sm:px-20 px-[57.5px] sm:rounded-sm banner-gradient bg-no-repeat bg-cover bg-center",
                  backgroundImage.sm,
                  backgroundImage.lg,
                )}
              >
                <div className="flex flex-col sm:items-start items-center sm:gap-10 gap-7">
                  <h2
                    className={cn(
                      "flex flex-col gap-1 text-white text-balance",
                      "sm:items-start items-center",
                      "sm:text-start text-center",
                      "sm:h1-bold h3-bold",
                      locale === "en" && "lg:text-5xl sm:text-3xl text-xl",
                    )}
                  >
                    <span className="inline-block">{title}</span>
                    <span className="inline-block">{subtitle}</span>
                  </h2>
                  <div className="flex sm:justify-start justify-center w-full">
                    {type === "button" ? (
                      <Link
                        role="button"
                        href={ROUTES.PRODUCTS.CATALOGUE}
                        className={cn(
                          "inline-block btn btn-dark dark:btn-light dark:text-gray-light-100 dark:border-gray-light-100 text-center",
                          "sm:btn-cta text-s-bold py-[9.5px] px-5 w-[min(260px,100%)]",
                        )}
                      >
                        {text}
                      </Link>
                    ) : (
                      // Search Bar
                      <BannerSearchBar placeholder={text} />
                    )}
                  </div>
                </div>
              </Wrapper>
            </SwiperSlide>
          );
        })}
        <div
          id="Home_Banner_Carousel_Pagination"
          className="flex-center gap-2 sm:mt-12 mt-6"
        />
      </Swiper>
    </section>
  );
};

export default HomeBanner;
