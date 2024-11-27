import { navigation } from "../constants";
import Logo from "../assets/logo.svg";
import SearchIcon from "../assets/searchIcon.svg";
import ArrowDown from "../assets/arrowDown.svg";
import MenuSvg from "./MenuSvg";
import { motion } from "motion/react";
import { useState } from "react";

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredMenu(id);
  };
  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const subMenuAnimate = {
    open: {
      opacity: 1,
      rotateX: 0,
      display: "block",
      transition: { duration: 0.3 },
    },
    close: {
      opacity: 0,
      rotateX: -15,
      transition: { duration: 0.3 },
      transitionEnd: { display: "none" },
    },
  };

  return (
    <nav className="sticky top-10 z-50 w-full max-w-6xl rounded-2xl border border-gray/10 bg-white p-3 drop-shadow md:p-4">
      <div className="flex items-center justify-between">
        <a className="flex items-center" href="/">
          <img className="size-10" src={Logo} alt="logo" />
          <span className="pl-1 font-bold">Squaree</span>
        </a>

        <button onClick={toggleNavigation} className="z-10 md:hidden">
          <MenuSvg openNavigation={openNavigation} />
        </button>

        <div className="hidden gap-10 md:flex">
          {navigation.map((item) => (
            <div
              key={item.id}
              className="group relative"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <a className="flex items-center text-base" href={item.url}>
                {item.title}
                {item.icon && (
                  <img
                    className="ml-2 mt-1 size-3"
                    src={ArrowDown}
                    alt="arrow icon"
                  />
                )}
              </a>
              {item.submenu && (
                <motion.div
                  initial="close"
                  animate={hoveredMenu === item.id ? "open" : "close"}
                  variants={subMenuAnimate}
                  className="absolute -left-1 mt-2 w-40 rounded-lg border border-gray/10 bg-white p-2 shadow-md"
                >
                  {item.submenu.map((subItem, index) => (
                    <a
                      key={index}
                      className="block rounded px-3 py-2 text-sm hover:bg-gray/10"
                      href={subItem.url}
                    >
                      {subItem.title}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
        <img
          className="hidden size-10 md:block"
          src={SearchIcon}
          alt="search icon"
        />
      </div>
    </nav>
  );
};

export default Navbar;
