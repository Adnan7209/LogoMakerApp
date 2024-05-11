import { Image, PencilRuler, Shield } from "lucide-react";
import React, { useState } from "react";

const SideNav = ({selectedIndex}) => {
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
  const [activeIndex,setActiveIndex] = useState(0);
  return (
    <div className="border shadow-sm h-screen">
      <div>
        {menuList.map((menu, index) => (
          <h2
            onClick={()=>{setActiveIndex(index);
              selectedIndex(index)
            }}
            key={index}
            className="flex items-center gap-2 p-2 text-lg px-7 text-gray-500 my-2 cursor-pointer hover:bg-red-900 hover:text-white hover:scale-[1.25]"
          >
            <menu.icon/>
            {menu.name}
          </h2>
        ))}
      </div>{activeIndex}
    </div>
  );
};

export default SideNav;
