"use client";

import type { FC, PropsWithChildren } from "react";
import { createContext, useContext, useMemo, useState, useEffect } from "react";

import TestPreferenceDialog from "@/components/navigation/navbar/TestPreferenceDialog";

const SettingsContext = createContext({
  open: false,
  setOpen: (_v: boolean) => {},
});

const DIALOG_STATE_KEY = "test-preference-dialog-open";

export const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      const saved = localStorage.getItem(DIALOG_STATE_KEY);
      return saved === "true";
    } catch {
      return false;
    }
  });

  // 同步 open 狀態到 localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (open) {
        localStorage.setItem(DIALOG_STATE_KEY, "true");
      } else {
        localStorage.removeItem(DIALOG_STATE_KEY);
      }
    } catch {
      // ignore
    }
  }, [open]);

  const value = useMemo(() => ({ open, setOpen }), [open, setOpen]);

  return (
    <SettingsContext.Provider value={value}>
      {children}
      <TestPreferenceDialog open={open} onOpenChange={setOpen} />
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
