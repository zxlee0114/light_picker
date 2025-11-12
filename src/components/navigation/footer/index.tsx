import Logo from "@/components/navigation/Logo";
import { Wrapper } from "@/components/Wrapper";

import FooterNavigation from "./FooterNavigation";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="@container/footer">
      <Wrapper className="flex flex-col gap-10 pt-[60px] pb-20">
        <nav className="flex-between items-start flex-wrap">
          <section className="flex flex-col gap-8">
            <Logo />
            <SocialLinks />
          </section>
          <section className="flex gap-6">
            <FooterNavigation />
          </section>
        </nav>
        <p className="text-s-bold text-gray-400">© Copyright 2025 拾光堂</p>
      </Wrapper>
    </footer>
  );
};

export default Footer;
