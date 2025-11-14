import { useTranslations } from "next-intl";

import { ROUTES } from "@/constants/routes";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  const t = useTranslations("metadata");

  return (
    <h1
      className={cn(
        "bg-logo-light dark:bg-logo-dark relative h-10 w-40 cursor-pointer overflow-hidden bg-contain bg-center bg-no-repeat indent-[101%] whitespace-nowrap",
        className,
      )}
    >
      <Link href={ROUTES.HOME} className="absolute inset-0">
        {t("title")}
      </Link>
    </h1>
  );
};

export default Logo;
