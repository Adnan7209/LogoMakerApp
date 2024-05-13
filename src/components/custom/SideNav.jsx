import { Image, PencilRuler, Shield } from "lucide-react";
import React, { useState } from "react";

const SideNav = ({ activeIndex, setActiveIndex }) => {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];

  return (
    <div className="flex overflow-auto justify-between items-center  " >
      {menuList.map((menu, index) => (
        <div
          onClick={() => {
            setActiveIndex(index);
          }}
          key={index}
          className={`flex items-center mx-6 px-5 py-2 mt-2  text-white  cursor-pointer  transition-all duration-300 ${
            activeIndex == index
              ? "border-y-[5px] rounded-full  border-white"
              : "hover:scale-125"
          }`}
        >
          <menu.icon />
          {menu.name}
        </div>
      ))}
    </div>
  );
};

export default SideNav;
