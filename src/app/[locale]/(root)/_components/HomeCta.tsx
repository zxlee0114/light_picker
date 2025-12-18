import { useLocale, useTranslations } from "next-intl";

const HomeCta = () => {
  const t = useTranslations("home");
  const locale = useLocale();

  const statement = t("cta");
  let first = statement;
  let second = "";

  if (locale === "zh-TW") {
    [first, second] = statement.split("，");
  }

  return (
    <section className="sm:h-[541px] h-[422px] grid place-items-center xs:bg-home-cta-lg bg-home-cta-sm bg-no-repeat bg-center seafoam-overlay">
      <div className="relative z-10 flex-center flex-col gap-10">
        <h2 className="h2-bold text-balance text-center flex sm:flex-row flex-col sm:gap-0 gap-3">
          <span>{first}</span>
          {locale === "zh-TW" && (
            <>
              <span className="sm:inline hidden">，</span>
              <span>{second}</span>
            </>
          )}
        </h2>
        {/* TODO: Component that switch auth btn to other UI */}
        <button type="button" className="btn btn-cta btn-light w-fit">
          註冊／登入
        </button>
      </div>
    </section>
  );
};

export default HomeCta;
