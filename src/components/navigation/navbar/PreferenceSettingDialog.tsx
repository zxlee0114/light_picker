import { useEffect, useState } from "react";

import { Check, Globe, Moon, Sun } from "lucide-react";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { Locales } from "@/types/global";

type PreferenceSettingDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const PreferenceSettingDialog = ({
  open,
  onOpenChange,
}: PreferenceSettingDialogProps) => {
  const currentLocale = useLocale();
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <span className="h4-bold">偏好設定</span>
          </DialogTitle>
        </DialogHeader>

        <main className="mt-4 space-y-6">
          <ThemeSwitch />
          <Separator />
          <LanguageSwitch locale={currentLocale as Locales} />
        </main>

        <DialogFooter>
          <Button>確定</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <section className="space-y-3">
      <h3 className="flex items-center gap-2 text-m-bold">
        {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
        外觀主題
      </h3>
      <div className="flex-between">
        <label
          htmlFor="theme"
          className="flex items-center gap-2 h6-regular cursor-pointer"
        >
          {isDark ? <>切換為淺色模式</> : <>切換為深色模式</>}
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
  locale: Locales;
};

const locales = [
  { code: "zh-TW", label: "繁體中文" },
  { code: "en", label: "English" },
] as const;

const LanguageSwitch = ({ locale }: LanguageSwitchProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (code: Locales) => {
    // 保留目前的 query string（例如 ?settings=1），避免切換語言時遺失對話框狀態
    const search = typeof window !== "undefined" ? window.location.search : "";
    const target = `${pathname}${search}`;
    router.replace(target, { locale: code });
  };

  return (
    <section className="space-y-3">
      <h3 className="flex items-center gap-2 text-m-bold">
        <Globe className="size-4" />
        語言設定
      </h3>
      <div className="space-y-2">
        {locales.map(l => {
          const inUse = l.code === locale;
          return (
            <button
              key={l.code}
              onClick={() => handleLocaleChange(l.code)}
              disabled={inUse}
              className={cn(
                "flex-between w-full p-1 px-2 rounded-sm h6-regular hover:bg-gray-100 transition-colors",
                inUse && "bg-gray-100 font-bold cursor-default",
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
};

export default PreferenceSettingDialog;
