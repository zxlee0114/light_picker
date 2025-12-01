"use client";

import { useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Wrapper } from "@/components/Wrapper";
import {
  HOME_BANNER_DATA,
  type BANNER_BTN_ELEMENT,
  type BANNER_SEARCH_ELEMENT,
} from "@/constants/data";
import { ROUTES } from "@/constants/routes";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Locale =
  | keyof typeof BANNER_SEARCH_ELEMENT.content
  | keyof typeof BANNER_BTN_ELEMENT.content;

const HomeBanner = () => {
  const locale = useLocale() as Locale;
  return (
    <section className="bg-gray-0 pt-15 pb-25">
      <Swiper>
        {HOME_BANNER_DATA.map(banner => {
          const { id, class: bgImg, element } = banner;

          return (
            <SwiperSlide key={id}>
              <Wrapper
                className={cn(
                  "h-110 w-full py-22.5 px-20 rounded-sm banner-gradient bg-no-repeat bg-cover bg-center",
                  bgImg.sm,
                  bgImg.lg,
                )}
              >
                <div className="flex flex-col gap-15">
                  <h2
                    className={cn(
                      "flex flex-col gap-1 h1-bold text-white",
                      locale === "en" && "text-5xl",
                    )}
                  >
                    <span>{element.content[locale].title}</span>
                    <span>{element.content[locale].subtitle}</span>
                  </h2>
                  <div>
                    {element.type === "button" ? (
                      <Link
                        href={ROUTES.PRODUCTS.CATALOGUE}
                        className="btn btn-dark dark:btn-light btn-cta"
                      >
                        {element.content[locale].text}
                      </Link>
                    ) : (
                      // Searchbar
                      <>{element.content[locale].text}</>
                    )}
                  </div>
                </div>
              </Wrapper>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HomeBanner;
