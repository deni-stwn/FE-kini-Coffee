import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";
import logoNav from "../assets/logoNavbar/logoKiniCoffee.png";
import { Links } from "../ts/dataNav";
import { useScrollHandler } from "../util/handleScroll";

const Nav = ({ navbarClass }: { navbarClass: string }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const scrollY = useScrollHandler();

  let navbarTransparan =
    scrollY > 0 ? `scrolled bg-[#f6f6f6] ` : `bg-transparent `;

  const handleMenuClick = () => {
    setOpen(!open);
    const bgNav = document.querySelector(".navbarBg");
    bgNav?.classList.toggle("bg-[#f6f6f6]");
  };

  const BimenuRight = () => {
    return (
      <div className="text-black">
        <BiMenuAltRight />
      </div>
    );
  };

  const handleClickNavigate = () => {
    navigate("/");
    setOpen(false);
  };

  return (
    <div
      data-testid="navbar"
      className={`navbarr w-full fixed top-0 left-0 z-50 transition-all ease-in duration-300 ${navbarTransparan} `}
    >
      <div
        data-testid="navbarBg"
        className="navbarBg transition-all ease-out duration-500 items-center justify-between md:flex py-3 xl:py-5 md:px-14 px-7"
      >
        <div className="cursor-pointer flex items-center">
          <img
            onClick={handleClickNavigate}
            src={logoNav}
            alt="kini-kopi"
            className="w-24 md:w-36 py-2"
          />
        </div>
        <div
          className={`text-4xl absolute right-6 top-5 ${navbarClass} cursor-pointer md:hidden transition-all ease-in duration-300`}
          onClick={handleMenuClick}
          data-testid="menu-button"
        >
          {open ? <BimenuRight /> : <BiMenu />}
        </div>
        <ul
          className={`${
            open ? "top-2 bg-[#f6f6f6] text-[#222222]" : "-top-[100vh]"
          } md:flex left-0 h-screen bg-[#f6f6f6] md:h-0 md:items-center font-semibold md:pb-0 pb-12 text-center absolute md:static md:z-auto z-[-1]  w-full md:w-auto md:pl-0 pl-9 transition-all ease-out duration-500 pt-24 md:pt-0`}
        >
          {Links.map((link) => {
            const isActive = window.location.pathname === link.link;
            return (
              <li
                key={link.name}
                className={`${
                  open ? "text-[#222222]" : `${navbarClass}`
                } md:ml-4 lg:ml-7 text-sm lg:text-base xl:text-xl md:my-0 my-16 mr-6  ${
                  isActive ? "font-semibold" : "opacity-50"
                }`}
              >
                <NavLink
                  to={link.link}
                  className="font-semibold"
                  onClick={handleMenuClick}
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
