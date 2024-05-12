import React, { useContext, useEffect, useState } from "react";
import { Slider } from "../ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UserContext } from "@/context/UserContext";

const BackgroundController = () => {
  const { rounded, setRounded, padding, setPadding, bgColor, setBgColor } =
    useContext(UserContext);
  return (
    <div>
      <div className="p-2">
        <label className="p-2 flex justify-between items-center">
          Rounded <span>{rounded}px</span>
        </label>
        <Slider
          defaultValue={[rounded]}
          max={100}
          step={1}
          onValueChange={setRounded}
        />
      </div>
      <div className="p-2">
        <label className="p-2 flex justify-between items-center">
          Padding <span>{padding}px</span>
        </label>
        <Slider
          defaultValue={[padding]}
          max={100}
          step={1}
          onValueChange={setPadding}
        />
      </div>
      <div className="p-2">
        <label className="p-2 flex justify-between items-center">Color</label>
        <ColorPickerController color={bgColor} setColor={setBgColor} />
      </div>
    </div>
  );
};

export default BackgroundController;
