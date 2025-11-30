"use client";

import { Globe } from "lucide-react";
import { useLocale } from "next-intl";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";

const locales = [
  { code: "en", label: "English" },
  { code: "zh-TW", label: "繁體中文" },
] as const;

const LocaleSwitcher = () => {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleSelect = (locale: string) => {
    router.replace(pathname, { locale });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="link cursor-pointer rounded-full p-2">
          <Globe size={24} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {locales.map(l => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => handleSelect(l.code)}
            className={
              l.code === currentLocale
                ? "bg-accent font-medium"
                : "cursor-pointer"
            }
          >
            {l.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocaleSwitcher;
