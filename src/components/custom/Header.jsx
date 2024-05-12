import React, { useContext } from "react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { UserContext } from "@/context/UserContext";
import SideNav from "./SideNav";

const Header = ({activeIndex,setActiveIndex}) => {
  const { downloadIconAsPng } = useContext(UserContext);
  return (
    <div className=" px-10 py-2 flex justify-between items-center bg-[#106ebe]">
      <img src="" alt="logoExpress" />
      <SideNav activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      <Button className="flex gap-2 items-center bg-[#683097] hover:scale-110 hover:bg-[#4e416e] transition-all duration-300 " onClick={downloadIconAsPng}>
        <Download /> Download
      </Button>
    </div>
  );
};

export default Header;
