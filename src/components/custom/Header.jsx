import React, { useContext } from "react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { UserContext } from "@/context/UserContext";

const Header = () => {
  const { downloadIconAsPng } = useContext(UserContext);
  return (
    <div className="p-4 shadow-sm border flex justify-between items-center">
      <img src="" alt="logoExpress" />
      <Button className="flex gap-2 items-center" onClick={downloadIconAsPng}>
        <Download /> Download
      </Button>
    </div>
  );
};

export default Header;
