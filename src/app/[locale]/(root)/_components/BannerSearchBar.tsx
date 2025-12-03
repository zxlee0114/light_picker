import Icon from "@/components/Icon";
import { cn } from "@/lib/utils";

type BannerSearchBarProps = {
  placeholder: string;
  className?: string;
};

const BannerSearchBar = ({ placeholder, className }: BannerSearchBarProps) => {
  return (
    <form
      action={"http://localhost:3000/products/"}
      method="get"
      className={cn("w-[260px]", className)}
    >
      <label
        htmlFor="banner-search"
        // TODO: 動畫 opacity 讓 backdrop-blur 失效
        className={cn(
          "flex items-center gap-1 border-2 border-gray-light-100 bg-gray-light-200/30 backdrop-blur-xs rounded-[100px] shadow-0 transition-shadow shadow-gray-light-100 focus-within:shadow-xs",
          "sm:py-4 sm:px-8 py-2 px-5",
        )}
      >
        <input
          id="banner-search"
          name="query"
          type="search"
          required
          placeholder={placeholder}
          className={cn(
            "flex-1 w-full text-gray-light-200 placeholder:text-gray-light-200 focus-within:outline-0",
            "sm:placeholder:text-l-bold sm:h5-regular placeholder:text-s-bold text-sm",
          )}
        />
        <button type="submit" className="size-6 flex-center">
          <Icon name="search" className="text-gray-light-200" />
        </button>
      </label>
    </form>
  );
};

export default BannerSearchBar;
