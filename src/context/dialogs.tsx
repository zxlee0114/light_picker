"use client";

import type { FC, PropsWithChildren } from "react";
import { createContext, useContext, useMemo, useState, useEffect } from "react";

import PreferenceSettingDialog from "@/components/navigation/navbar/PreferenceSettingDialog";

const SettingsContext = createContext({
  open: false,
  setOpen: (_v: boolean) => {},
});

export const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get("settings") === "preference";
    } catch {
      return false;
    }
  });

  // 當 open 改變時同步到 URL（使用 replaceState 以避免新增歷史紀錄）
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const url = new URL(window.location.href);
      const params = url.searchParams;
      if (open) params.set("settings", "preference");
      else params.delete("settings");
      // 將搜尋字串更新但不新增歷史紀錄
      url.search = params.toString();
      window.history.replaceState({}, "", url.toString());
    } catch {
      // ignore
    }
  }, [open]);

  const value = useMemo(() => ({ open, setOpen }), [open, setOpen]);

  return (
    <SettingsContext.Provider value={value}>
      {children}
      <PreferenceSettingDialog open={open} onOpenChange={setOpen} />
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
