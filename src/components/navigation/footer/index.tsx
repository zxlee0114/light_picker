import { useLocale } from "next-intl";

import { FOOTER_NAVIGATION } from "@/constants/navigation";
import { Link } from "@/i18n/navigation";

type Locale = keyof typeof FOOTER_NAVIGATION;

const Footer = () => {
  const locale = useLocale() as Locale;
  const sections = FOOTER_NAVIGATION[locale];

  return (
    <footer className="@container">
      <div className="flex flex-col gap-5 max-w-7xl mx-auto pt-[60px] pb-20">
        <nav className="flex-between">
          <section>
            <h1>拾光堂</h1>
            <p>社群連結</p>
          </section>
          <section className="flex gap-6">
            {sections.map(section => (
              <div key={section.title} className="w-[196px]">
                <h4 className="text-l-bold mb-2">{section.title}</h4>
                <ul className="flex flex-col gap-2">
                  {section.items.map(item => (
                    <li key={item.destination}>
                      <Link href={item.link} className="text-m-bold">
                        {item.destination}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </nav>
        <p>© Copyright 2025 拾光堂</p>
      </div>
    </footer>
  );
};

export default Footer;
