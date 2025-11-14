import { useLocale, useTranslations } from "next-intl";

import Icon from "@/components/Icon";
import { Wrapper } from "@/components/Wrapper";
import { HEADER_NAVIGATION } from "@/constants/navigation";
import { Link } from "@/i18n/navigation";

import { ThemeToggle } from "./ThemeToggle";
import Logo from "../Logo";
import LocaleSwitcher from "./LocaleSwitcher";

type Locale = keyof typeof HEADER_NAVIGATION;

const Navbar = () => {
  const locale = useLocale() as Locale;
  const navList = HEADER_NAVIGATION[locale];
  const t = useTranslations("auth");

  return (
    <header>
      <Wrapper className="flex-between gap-7 py-5">
        <section>
          <Logo className="w-35 h-10" />
        </section>
        <nav className="flex-1">
          <div className="flex-between">
            <ul className="flex gap-5">
              {navList.map(item => (
                <li key={item.title}>
                  <Link href={item.link} className="link text-l-bold py-2 px-3">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex-center gap-3">
              <div className="p-3">
                <Icon name="search" className="size-6 link" />
              </div>
              <div className="p-3">
                <Icon name="favorite" className="size-6 link" />
              </div>
              <div className="p-3">
                <Icon name="cart" className="size-6 link" />
              </div>
              <ThemeToggle />
              <LocaleSwitcher />
            </div>
          </div>
        </nav>
        <button className="btn btn-medium">{t("login")}</button>
      </Wrapper>
    </header>
  );
};

export default Navbar;
