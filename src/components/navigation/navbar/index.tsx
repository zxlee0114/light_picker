import { Wrapper } from "@/components/Wrapper";

import Logo from "../Logo";
import AuthBtn from "./AuthBtn";
import HeaderButtonGroup from "./HeaderButtonGroup";
import HeaderMenu from "../HeaderMenu";
import MobileSideNavbar from "../sidebar/MobileNavbar";

const Navbar = () => {
  return (
    <header>
      <Wrapper className="flex-between gap-7 py-5">
        <section>
          <Logo className="w-35 h-10" />
        </section>
        <nav className="flex-1">
          <div className="flex-between">
            <HeaderMenu />
            <HeaderButtonGroup />
          </div>
        </nav>
        <div className="flex-center">
          <AuthBtn />
          <MobileSideNavbar />
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;
