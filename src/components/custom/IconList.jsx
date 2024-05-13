import React from "react";
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
  return (
    <Sheet>
      <SheetTrigger className="hover:scale-110 transition-all duration-300">
        <span className="  rounded-md px-4 py-2 bg-[#0853b3] text-white ">
          Change Icon
        </span>
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle>Select Icons</SheetTitle>
          <SheetDescription>
            <div className="flex flex-wrap">
              {iconNames.map((iconName, index) => (
                <div key={index} className="">
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
