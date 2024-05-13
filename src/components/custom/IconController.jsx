import { Smile } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Slider } from "../ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UserContext } from "@/context/UserContext";
import LogoPreview from "./LogoPreview";

const IconController = () => {
  const { size, setSize, rotate, setRotate, color, setColor,iconName } =
    useContext(UserContext);
  return (
    <div>
      <div>       
        <div className="flex flex-col justify-center items-center">
        <label className="text-xl">Icon: <span>{iconName}</span></label>
        <div className="p-3 cursor-pointer bg-gray-200 rounded-md w-[100px] h-[100px] flex items-center justify-center my-2">
          <Smile />
        </div>
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
