import { memo, useEffect, useTransition } from "react";

import { Check, Globe, Moon, Sun } from "lucide-react";
import { type _Translator, useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { Locales } from "@/types/global";

type PreferenceDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

/**
 * 測試用的偏好設定對話框
 * 使用自訂 Modal 元件，在語言切換時跳過開啟動畫
 */

// TODO: 切換外觀主題的閃爍問題
const PreferenceDialog = ({ open, onOpenChange }: PreferenceDialogProps) => {
  const currentLocale = useLocale();
  const t = useTranslations("preferenceDialog");
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // 語言切換時跳過動畫
  const handleLocaleChange = (code: Locales) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("test-preference-skip-animation", "true");
      } catch {
        // ignore
      }
    }
    startTransition(() => {
      router.replace(pathname, { locale: code });
    });
  };

  // 當語言切換完成後清除跳過動畫的標記
  useEffect(() => {
    if (!isPending) {
      queueMicrotask(() => {
        if (typeof window !== "undefined") {
          try {
            localStorage.removeItem("test-preference-skip-animation");
          } catch {
            console.error(
              "Some error happened when removing localStorage item",
            );
          }
        }
      });
    }
  }, [isPending]);

  return (
    <Modal
      isOpen={open}
      onClose={() => onOpenChange(false)}
      className="space-y-4"
    >
      {/* Header */}
      <div className="space-y-2">
        <h2 className="h4-bold">{t("title")}</h2>
      </div>

      {/* Content */}
      <main className="mt-4 space-y-6">
        <ThemeSwitch translation={t} />
        <Separator />
        <LanguageSwitch
          translation={t}
          locale={currentLocale as Locales}
          onLocaleChange={handleLocaleChange}
          isPending={isPending}
        />
      </main>

      {/* Footer */}
      <div className="mt-6 flex justify-end gap-2">
        <Button onClick={() => onOpenChange(false)}>{t("confirm")}</Button>
      </div>
    </Modal>
  );
};

/**
 * 主題切換元件
 */

type ThemeSwitchProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  translation: _Translator<Record<string, any>, "preferenceDialog">;
};

const ThemeSwitch = ({ translation: t }: ThemeSwitchProps) => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section className="space-y-3">
      <h3 className="flex items-center gap-2 text-m-bold">
        {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
        {t("appearanceSetting")}
      </h3>
      <div className="flex-between">
        <label
          htmlFor="theme"
          className="flex items-center gap-2 h6-regular cursor-pointer"
        >
          {isDark ? <>{t("switchToLight")}</> : <>{t("switchToDark")}</>}
        </label>
        <Switch
          id="theme"
          checked={isDark}
          onCheckedChange={checked => setTheme(checked ? "dark" : "light")}
        />
      </div>
    </section>
  );
};

type LanguageSwitchProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  translation: _Translator<Record<string, any>, "preferenceDialog">;
  locale: Locales;
  onLocaleChange: (code: Locales) => void;
  isPending: boolean;
};

const locales = [
  { code: "zh-TW", label: "繁體中文" },
  { code: "en", label: "English" },
] as const;

/**
 * 語言切換元件
 */
const LanguageSwitch = memo(
  ({
    locale,
    onLocaleChange,
    isPending,
    translation: t,
  }: LanguageSwitchProps) => {
    return (
      <section className="space-y-3">
        <h3 className="flex items-center gap-2 text-m-bold">
          <Globe className="size-4" />
          {t("languageSetting")}
        </h3>
        <div className="space-y-2">
          {locales.map(l => {
            const inUse = l.code === locale;

            return (
              <button
                key={l.code}
                onClick={() => onLocaleChange(l.code)}
                disabled={inUse || isPending}
                style={{
                  backgroundColor: `var(${inUse ? "--button-active-bg" : "--button-bg"})`,
                  cursor: inUse ? "default" : isPending ? "wait" : "pointer",
                  opacity: isPending ? 0.5 : 1,
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={e => {
                  if (!inUse && !isPending) {
                    const btn = e.currentTarget as HTMLButtonElement;
                    btn.style.backgroundColor = "var(--button-hover-bg)";
                  }
                }}
                onMouseLeave={e => {
                  const btn = e.currentTarget as HTMLButtonElement;
                  btn.style.backgroundColor = `var(${inUse ? "--button-active-bg" : "--button-bg"})`;
                }}
                className={cn(
                  "flex-between w-full p-1 px-2 rounded-sm h6-regular",
                  inUse && "font-bold",
                )}
              >
                <span className="flex-center">{l.label}</span>
                {inUse && <Check className="size-4 text-success" />}
              </button>
            );
          })}
        </div>
      </section>
    );
  },
);
LanguageSwitch.displayName = "LanguageSwitch";

export default PreferenceDialog;
