import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { text: "About", path: "/about" },
  { text: "Pricing", path: "/pricing" },
  { text: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 text-white bg-opacitiy-30 p-2 m-2 rounded">
      <Link className="flex flex-row items-center gap-2" href={"/"}>
        <HomeIcon />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((item, index) => (
        <ActiveLink key={index} {...item} />
      ))}
    </nav>
  );
};

export default Navbar;
