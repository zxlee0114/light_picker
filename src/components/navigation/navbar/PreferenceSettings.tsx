"use client";

import { EllipsisVertical } from "lucide-react";

import { useSettings } from "@/context/dialogs";

const PreferenceSettingWrapper = () => {
  const { setOpen } = useSettings();
  return (
    <>
      <button className="hidden sm:block" onClick={() => setOpen(true)}>
        <EllipsisVertical className="link" />
      </button>
      {/* <PreferenceSettingDialog open={isOpen} onOpenChange={setIsOpen} /> */}
    </>
  );
};

export default PreferenceSettingWrapper;
