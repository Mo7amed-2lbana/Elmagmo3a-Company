import { NavLink } from "react-router-dom";

// import Button Comp from react flowbit library
import { Button } from "flowbite-react";

// Import icons
import { FaCircleDollarToSlot, FaLinkedinIn } from "react-icons/fa6";
import { FaGithub, FaHome, FaFacebookF } from "react-icons/fa";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { TbCurrencyDollarOff } from "react-icons/tb";
import { GiBuyCard } from "react-icons/gi";
import { LiaStoreSolid } from "react-icons/lia";

import "./navbar.css";
import NavbarLinks from "./NavbarLinks";
import { navbarList } from "./navbarList";

const Navbar = () => {
  // icons List
  const iconList = [
    <FaHome color="" />,
    <HiUsers color="" />,
    <FaCircleDollarToSlot color="" />,
    <TbCurrencyDollarOff color="" />,
    <GiBuyCard color="" />,
    <LiaStoreSolid color="" />,
  ];

  return (
    <>
      <nav className=" relative z-[9999]  bg-second-color py-3">
        <div className=" px-[100px] flex items-center justify-between ">
          <div className="logo">
            <h2 className="text-white uppercase font-bold text-xl">
              شركة المجموعة
            </h2>
          </div>

          {/* Start Navbar Links  */}
          <div className="Links">
            <ul className="flex text-second-color px-4 rounded-lg">
              {navbarList.map((list, idx) => (
                <NavbarLinks
                  key={list.id}
                  icon={iconList[idx]}
                  title={list.title}
                  link={list.link}
                />
              ))}
            </ul>
          </div>
          {/* End Navbar Links  */}

          {/* Start Contact Links  */}
          <div className="contact flex items-center gap-5">
            {/* BTN Add  */}
            <Button>
              <NavLink to={"add"} className={"text-[16px]"}>
                اضافه
              </NavLink>
            </Button>

            <span className="text-white cursor-pointer text-[16px]">
              اتصل بنا{" "}
            </span>

            {/* Icons Contact  */}
            <div className="icons flex items-center gap-3 text-white">
              <div className="icon bg-second-color p-1 rounded-full cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="icon bg-second-color p-1 rounded-full cursor-pointer">
                <IoMdCall />
              </div>
              <div className="icon bg-second-color p-1 rounded-full cursor-pointer">
                <IoMdMail />
              </div>
            </div>
          </div>
          {/* End Contact Links  */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
