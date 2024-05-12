import React, { useContext } from "react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { UserContext } from "@/context/UserContext";
import SideNav from "./SideNav";

import { Separator } from "@/components/ui/separator"

const Header = ({activeIndex,setActiveIndex}) => {
  const { downloadIconAsPng } = useContext(UserContext);
  return (
    <>
    <div className="px-10 py-2 flex justify-between items-center bg-[#23a2d4] ">
      <img src="" alt="logoExpress" />
      <div className="hidden md:block">
      <SideNav activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      </div>
      <Button className="flex gap-2 items-center bg-[#0853b3] hover:scale-110 hover:bg-[#0853b3] transition-all duration-300 " onClick={downloadIconAsPng}>
        <Download /> Download
      </Button>
    </div>
    <div className="md:hidden bg-[#23a2d4] py-2">
      <Separator/>

      <SideNav activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
    </div>
    </>
  );
};

export default Header;
