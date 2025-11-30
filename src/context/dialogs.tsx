"use client";

import type { FC, PropsWithChildren } from "react";
import { createContext, useContext, useMemo, useState, useEffect } from "react";

import PreferenceSettingDialog from "@/components/navigation/navbar/PreferenceSettingDialog";

const SettingsContext = createContext({
  open: false,
  setOpen: (_v: boolean) => {},
});

const DIALOG_STATE_KEY = "preference-dialog-open";

export const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(() => {
    // 初始化時從 sessionStorage 恢復 dialog 狀態
    if (typeof window === "undefined") return false;
    try {
      const saved = sessionStorage.getItem(DIALOG_STATE_KEY);
      return saved === "true";
    } catch {
      return false;
    }
  });

  // 當 open state 改變時，同步到 sessionStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (open) {
        sessionStorage.setItem(DIALOG_STATE_KEY, "true");
      } else {
        sessionStorage.removeItem(DIALOG_STATE_KEY);
      }
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
