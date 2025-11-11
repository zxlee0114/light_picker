import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="@container/nav">
      <div className="flex-between gap-7 @md/nav:max-w-7xl mx-auto py-5">
        <section>
          <h1>拾光堂</h1>
        </section>
        <nav className="flex-1">
          <div className="flex-between">
            <ul className="flex gap-5">
              <li>相機</li>
              <li>機身</li>
              <li>鏡頭</li>
              <li>配件</li>
              <li>收購流程</li>
              <li>其他</li>
            </ul>
            <ThemeToggle />
          </div>
        </nav>
        <button className="btn btn-medium">註冊／登入</button>
      </div>
    </header>
  );
};

export default Navbar;
