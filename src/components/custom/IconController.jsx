import { Smile, icons } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Slider } from "../ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UserContext } from "@/context/UserContext";
import LogoPreview from "./LogoPreview";
import IconList from "./IconList";

const IconController = () => {
  const { size, setSize, rotate, setRotate, color, setColor, iconName } =
    useContext(UserContext);
    const Icon = ({iconName})=>{
      const LucideIcon = icons[iconName];
      if(!LucideIcon)
        return <p>{iconName}</p>
      return (<LucideIcon size={60}/>)


    }
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center gap-2">
          <label className="text-3xl font-bold m-3 ">
            Icon: <span>{iconName}</span>
          </label>
          <div className="p-3 cursor-pointer bg-gray-200 rounded-md w-[100px] h-[100px] flex items-center justify-center my-2">
            <Icon iconName={iconName} />
            
          </div>
          <IconList />
        </div>

        <div className="p-2">
          <label className="p-2 flex justify-between items-center">
            Size <span>{size}px</span>
          </label>
          <Slider
            defaultValue={[size]}
            max={512}
            step={1}
            onValueChange={setSize}
          />
        </div>
        <div className="p-2">
          <label className="p-2 flex justify-between items-center">
            Rotate <span>{rotate}°</span>
          </label>
          <Slider
            defaultValue={[rotate]}
            min={-360}
            max={360}
            step={1}
            onValueChange={setRotate}
          />
        </div>
        <div className="p-2">
          <label className="p-2 flex justify-between items-center">Color</label>
          <ColorPickerController color={color} setColor={setColor} />
        </div>
      </div>
    </div>
  );
};

export default IconController;
