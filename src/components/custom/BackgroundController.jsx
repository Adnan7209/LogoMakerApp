import React, { useEffect, useState } from "react";
import { Slider } from "../ui/slider";
import ColorPickerController from "./ColorPickerController";

const BackgroundController = () => {
  const storedValues = JSON.parse(localStorage.getItem("value"));
  const getInitialValue = (key, defaultValue) => {
    return storedValues ? storedValues[key] : defaultValue;
  };

  const [rounded, setRounded] = useState(() => getInitialValue("bgRounded", 0));
  const [padding, setPadding] = useState(() => getInitialValue("bgPadding", 0));
  const [bgColor, setBgColor] = useState(() =>
    getInitialValue("bgColor", "rgba(255,255,255,1)")
  );

  useEffect(() => {
    const updatedValue = {
      ...storedValues,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: bgColor,
    };
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [rounded, padding, bgColor]);
  return (
    <div>
      <div className="p-2">
        <label className="p-2 flex justify-between items-center">
          Rounded <span>{rounded}px</span>
        </label>
        <Slider
          defaultValue={rounded}
          max={100}
          step={1}
          onValueChange={(event) => setRounded(event)}
        />
      </div>
      <div className="p-2">
        <label className="p-2 flex justify-between items-center">
          Padding <span>{padding}px</span>
        </label>
        <Slider
          defaultValue={padding}
          max={100}
          step={1}
          onValueChange={(event) => setPadding(event)}
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
