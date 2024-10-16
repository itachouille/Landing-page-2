import { navigation } from "../constants";
import Logo from "../assets/logo.svg";
import SearchIcon from "../assets/searchIcon.svg";
import ArrowDown from "../assets/arrowDown.svg";

const Navbar = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-50 mx-auto mt-10 h-20 max-w-[1400px] rounded-2xl border border-gray-200 bg-white px-6 shadow-lg backdrop-blur-lg transition-all">
      <div className="flex size-full items-center justify-between">
        <a className="flex items-center" href="/">
          <img className="size-10" src={Logo} alt="logo" />
          <span className="pl-1 font-bold">Squaree</span>
        </a>
        <div className="flex gap-10">
          {navigation.map((item) => (
            <a key={item.id} className="flex text-lg" href={item.url}>
              {item.title}
              {item.icon ? (
                <img
                  className="ml-2 mt-2 size-3"
                  src={ArrowDown}
                  alt="arrow icon"
                />
              ) : null}
            </a>
          ))}
        </div>
        <a href="/">
          <img className="size-10" src={SearchIcon} alt="search icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
