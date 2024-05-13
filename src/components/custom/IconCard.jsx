import { icons } from "lucide-react";
import React, { useContext } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { UserContext } from "@/context/UserContext";

const IconCard = ({ name }) => {
    const {setIconName} = useContext(UserContext);
  const LucideIcon = icons[name];
  if (!LucideIcon) return <></>;
  return (
    <div className="m-2 border-2 p-2 hover:scale-125 transition-all duration-300"
     onClick={()=>setIconName(name)}
    >
      <HoverCard openDelay={0} closeDelay={0}>
        <HoverCardTrigger>
          <LucideIcon size={35} />
        </HoverCardTrigger>
        <HoverCardContent
          className="w-auto"
          style={{ position: "absolute", zIndex: 10, left: "-42px" }}
        >
          {name}
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default IconCard;
