import { ROUTES } from "@/constants/routes";
import { Link } from "@/i18n/navigation";

const Logo = () => {
  return (
    <h1 className="bg-logo-light dark:bg-logo-dark bg-no-repeat bg-contain bg-center w-40 h-[46px] indent-[101%] whitespace-nowrap overflow-hidden cursor-pointer relative">
      <Link href={ROUTES.HOME} className="absolute inset-0">
        拾光堂
      </Link>
    </h1>
  );
};

export default Logo;
