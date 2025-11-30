import { useLocale } from "next-intl";

import { HEADER_NAVIGATION } from "@/constants/navigation";
import { cn } from "@/lib/utils";

import SpreadingBottomLink from "../SpreadingBottomLink";

type Locale = keyof typeof HEADER_NAVIGATION;
type Props = {
  variant?: "mobile" | "desktop";
};

const HeaderMenu = ({ variant = "desktop" }: Props) => {
  const locale = useLocale() as Locale;
  const navList = HEADER_NAVIGATION[locale];
  return (
    <ul
      className={cn(
        "hidden md:inline-flex gap-5",
        variant === "mobile" && "flex flex-col",
      )}
    >
      {navList.map(item => (
        <li key={item.title} className="py-2 px-3">
          <SpreadingBottomLink href={item.link} linkClass="text-l-bold">
            {item.title}
          </SpreadingBottomLink>
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenu;
