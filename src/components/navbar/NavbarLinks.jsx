import { Button } from "flowbite-react";
import { NavLink } from "react-router-dom";

const NavbarLinks = ({ link, title, icon }) => {
  return (
    <>
      <div className="nav-links">
        <NavLink to={link}>
          <Button color="" className="flex text-white items-center gap-4 ms-4">
            <div className="icn text-[20px]">{icon}</div>
            <span className="text-[16px] ms-1">{title}</span>
          </Button>
        </NavLink>
      </div>
    </>
  );
};

export default NavbarLinks;
