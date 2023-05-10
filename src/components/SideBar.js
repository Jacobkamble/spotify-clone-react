// Import React and related components
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";

// Import spotify logo
import spotify from "./spotify.svg";

// Define links for navigation
const links = [
  { name: "For You", to: "/", icon: HiOutlineHome },
  { name: "Top Tracks", to: "/top-tracks", icon: HiOutlinePhotograph },
  { name: "Favorites", to: "/favourites", icon: HiOutlineUserGroup },
  { name: "Recently Played", to: "/recently-played", icon: HiOutlineHashtag },
];

// Create NavLinks component
const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

// Create SideBar component
const SideBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <>
        {/* Desktop sidebar */}
        <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
          <Link to={"/"}>
            {" "}
            <img
              src={spotify}
              alt="logo"
              className="w-full h-14 object-contain"
            />
          </Link>
          <NavLinks />
        </div>

        {/* Mobile sidebar */}
        <div className="absolute md:hidden block top-6 right-3">
          {!mobileMenuOpen ? (
            <HiOutlineMenu
              className="w-6 h-6 mr-2 text-white"
              onClick={() => setMobileMenuOpen(true)}
            />
          ) : (
            <RiCloseLine
              className="w-6 h-6 mr-2 text-white"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}
        </div>

        <div
          className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
            mobileMenuOpen ? "left-0" : "-left-full"
          }`}
        >
          <img
            src={spotify}
            alt="logo"
            className="w-full h-14 object-contain"
          />
          <NavLinks handleClick={() => setMobileMenuOpen(false)} />
        </div>
      </>
    </>
  );
};

// Export SideBar component
export default SideBar;