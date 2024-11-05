import { FaHome } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { Button } from "flowbite-react";

const Sidebar = () => {
  return (
    <>
      <aside className="fixed top-0 z-[99999999] bg-[#f2f2f2] w-fit h-[100vh] px-[10px] flex justify-center items-center  rounded-md ">
        <ul>
          <li className="py-3">
            <Button>
              <NavLink to={"/"} className={"flex gap-1"}>
                <FaHome
                  size={25}
                  color="white"
                  className="hover:text-main-color active:text-main-color cursor-pointer"
                />
                <span className="text-lg">الرئيسية</span>
              </NavLink>
            </Button>
          </li>
          <li className="py-3">
            <Button color="">
              <NavLink to={"/user"} className={"flex gap-1"}>
                <HiUsers
                  size={25}
                  className="hover:text-main-color cursor-pointer"
                />
                <span className="text-lg">مناديب</span>
              </NavLink>
            </Button>
          </li>
          <li className="py-3">
            <Button color="">
              <NavLink to={"/user"} className={"flex gap-1"}>
                <FaCircleDollarToSlot
                  size={25}
                  className="hover:text-main-color cursor-pointer"
                />
                <span className="text-lg">ايرادات</span>
              </NavLink>
            </Button>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
