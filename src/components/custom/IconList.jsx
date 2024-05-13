import React, { useEffect, useState } from "react";
import { iconNames } from "@/utils/icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import IconCard from "./IconCard";

const IconList = () => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <Sheet>
      <SheetTrigger className="hover:scale-110 transition-all duration-300">
        <span className="  rounded-md px-4 py-2 bg-[#0853b3] text-white ">
          Change Icon
        </span>
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle>Search Icons</SheetTitle>
          <input
            type="text"
            placeholder=" Start searching..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-2 p-2 rounded-full"
          />
          <SheetTitle>Select Icons</SheetTitle>
          <SheetDescription>
            <div className="flex flex-wrap">
              {iconNames
                .filter((iconNames) => iconNames.toLowerCase().includes(search.toLowerCase().replace(/\s+/g, '')))
                .map((iconName, index) => (
                  <div key={index} >
                    <IconCard name={iconName} />
                  </div>
                ))}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default IconList;
