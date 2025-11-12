import { useLocale } from "next-intl";

import { FOOTER_NAVIGATION } from "@/constants/navigation";
import { Link } from "@/i18n/navigation";

type Locale = keyof typeof FOOTER_NAVIGATION;

const FooterNavigation = () => {
  const locale = useLocale() as Locale;
  const sections = FOOTER_NAVIGATION[locale];
  return (
    <>
      {sections.map(section => (
        <div key={section.title} className="w-[196px]">
          <h4 className="text-l-bold mb-2 py-1 px-2 text-gray-500">
            {section.title}
          </h4>
          <ul className="flex flex-col gap-2">
            {section.items.map(item => (
              <li key={item.destination}>
                <Link href={item.link} className="text-m-bold link link-medium">
                  {item.destination}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterNavigation;
