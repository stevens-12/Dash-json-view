/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Icons //
import { TbLayoutDashboard, TbUsers, TbMessageCircle2, TbBriefcase2, TbUser, TbCalendarCode, TbHelp } from "react-icons/tb";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();
  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Dashboard", icon: TbLayoutDashboard },
    { id: 2, path: "/members", name: "Members", icon: TbUsers },
    { id: 3, path: "/messages", name: "Messages", icon: TbMessageCircle2 },
    { id: 4, path: "/projects", name: "Projects", icon: TbBriefcase2 },
    { id: 5, path: "/clients", name: "Clients", icon: TbUser },
    { id: 6, path: "/work", name: "Work Plan", icon: TbCalendarCode },
  ];

  useEffect(() => {
    const currentIndex = SIDEBAR_LINKS.findIndex((link) => link.path === location.pathname);
    setActiveLink(currentIndex);
  }, [location]);

  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-gray-100">
      {/* logo */}
      <div className="mb-8">
        <img src="/monalisa-logo.svg" alt="logo" className="w-32 hidden md:flex" />
        <img src="/logo_mini.svg" alt="logo" className="w-12 flex md:hidden" />
      </div>
      {/* logo */}

      {/* Navigation Links */}
      <ul className="mt-6 flex flex-col gap-2">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-3 px-5 hover:bg-gray-200 hover:text-indigo-600 transition duration-300 ${activeLink === index ? "bg-indigo-200 text-indigo-600" : ""
              }`}
          >
            <Link to={link.path} className="flex justify-center md:justify-start items-center md:space-x-5">
              <span>{link.icon()}</span>
              <span className="text-sm text-gray-600 hidden md:flex">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {/* Navigation Links */}

      <div className="w-full absolute bottom-5 left-0 px-4 py-3 cursor-pointer justify-center">
        <div className="font-medium rounded-md py-3 px-5 bg-indigo-600 hover:bg-indigo-700 transition duration-300">
          <Link to="/help" className="flex items-center justify-center md:space-x-5 text-white md:justify-start">
            <div className="flex justify-center">
              <TbHelp />
            </div>
            <span className="text-sm hidden md:flex">Need Help?</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;