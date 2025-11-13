import { useTranslations } from "next-intl";

import Logo from "@/components/navigation/Logo";
import { Wrapper } from "@/components/Wrapper";

import FooterNavigation from "./FooterNavigation";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const t = useTranslations("metadata");
  const logo = t("title");
  return (
    <footer>
      <Wrapper className="flex flex-col gap-10 pt-15 pb-20">
        <nav className="min-[70rem]:flex-between min-[70rem]:flex-row min-[70rem]:items-start flex-center flex-col gap-8">
          <section className="flex flex-col gap-8">
            <Logo />
            <SocialLinks />
          </section>
          <section className="grid min-[54.75rem]:grid-cols-[repeat(4,12.25rem)] grid-cols-2 gap-6 max-sm:gap-y-7 min-[70rem]:text-start text-center">
            <FooterNavigation />
          </section>
        </nav>
        <p className="text-s-bold text-gray-400 min-[70rem]:text-start text-center">
          {`Copyright © 2025 ${logo}`}
        </p>
      </Wrapper>
    </footer>
  );
};

export default Footer;
