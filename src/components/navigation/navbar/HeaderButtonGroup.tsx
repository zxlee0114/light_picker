import Icon from "@/components/Icon";

import CollectionIcon from "./CollectionButton";
import LocaleSwitcher from "../LocaleSwitcher";
import { ThemeToggle } from "../ThemeToggle";

const HeaderButtonGroup = () => {
  return (
    <div className="flex-center gap-3">
      <div className="p-3">
        <Icon name="search" className="size-6 link" />
      </div>
      <div className="p-3">
        <CollectionIcon name="favorite" />
      </div>
      <div className="p-3">
        <CollectionIcon name="cart" />
      </div>
      <ThemeToggle />
      <LocaleSwitcher />
    </div>
  );
};

export default HeaderButtonGroup;
