/* eslint-disable no-unused-vars */
import React from "react";
import { TbBell, TbSearch } from "react-icons/tb";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 shadow-sm">
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-xs text-gray-600">Welcome Back!</h1>
        <p className="text-xl font-semibold text-gray-800">Brayan</p>
      </div>
      <div className="flex items-center space-x-5">
        <SearchBar />
        <NotificationButton />
        <UserProfile />
      </div>
    </header>
  );
};

const SearchBar = () => {
  return (
    <div
      className="hidden md:flex relative bg-indigo-100/30 rounded-lg py-2 pl-4 pr-4 w-64 xl:w-96 hover:bg-indigo-100/30"
    >
      <div className="flex justify-center items-center w-full">
        <span className="text-gray-400">
          <TbSearch size={16} />
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent w-full text-gray-600 focus:outline-0 pl-2"
        />
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full rounded-lg border border-indigo-100/20 shadow-inner pointer-events-none"
      />
    </div>
  );
};

const NotificationButton = () => {
  return (
    <button className="relative text-2xl text-gray-600">
      <TbBell size={26} />
      <span className="absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-indigo-600 text-white font-semibold text-[10px] w-5 h-4 rounded-full border-2 border-white">
        9
      </span>
    </button>
  );
};

const UserProfile = () => {
  return (
    <img
      className="w-8 h-8 rounded-full border-2 border-indigo-600"
      src="https://randomuser.me/api/portraits/men/1.jpg"
      alt=""
    />
  );
};

export default Header;