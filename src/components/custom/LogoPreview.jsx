import { UserContext } from "@/context/UserContext";
import { Download, icons } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";

const LogoPreview = () => {
  const {
    size,
    rotate,
    color,
    rounded,
    padding,
    bgColor,
    iconName,
    iconRef,
    downloadIconAsPng,
  } = useContext(UserContext);
  const Icon = ({ name, color, size, rotate }) => {
    const LucideIcon = icons[name];
    if (!LucideIcon) {
      return <p>not found</p>;
    }
    return (
      <LucideIcon
        color={color}
        size={size}
        style={{
          transform: `rotate(${rotate}deg)`,
          transformOrigin: "center",
        }}
      />
    );
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div
        className="h-[500px] w-[500px] bg-gray-200 outline-dotted outline-gray-400 "
        style={{ padding: `${padding}px` }}
      >
        <div
          ref={iconRef}
          id="downloadLogoDiv"
          className="h-full w-full flex justify-center items-center"
          style={{
            borderRadius: `${rounded}px`,
            backgroundColor: bgColor,
          }}
        >
          <Icon name={iconName} color={color} size={size} rotate={rotate} />
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
