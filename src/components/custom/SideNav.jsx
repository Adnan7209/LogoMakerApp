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
    <div className="flex overflow-auto justify-between items-center">
      {menuList.map((menu, index) => (
        <div
          onClick={() => {
            setActiveIndex(index);
          }}
          key={index}
          className={`flex items-center mx-6 px-3 py-2  text-white  cursor-pointer hover:scale-125 transition-all duration-300 ${
            activeIndex == index ? "border-b-[5px] rounded-lg hover:scale-100 border-white" : "null"
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
