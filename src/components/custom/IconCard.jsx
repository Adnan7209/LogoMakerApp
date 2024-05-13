import { icons } from "lucide-react";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const IconCard = ({ name }) => {
  const LucideIcon = icons[name];
  if (!LucideIcon) return <></>;
  return (
    <div className="m-2 border-2 p-2 hover:scale-125 transition-all duration-300">
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
