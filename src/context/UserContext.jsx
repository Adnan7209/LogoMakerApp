import React, { Children, useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const storedValues = JSON.parse(localStorage.getItem("value"));

  const getInitialValue = (key, defaultValue) => {
    return storedValues ? storedValues[key] : defaultValue;
  };

  const [size, setSize] = useState(() => getInitialValue("iconSize", 0));
  const [rotate, setRotate] = useState(() => getInitialValue("iconRotate", 0));
  const [color, setColor] = useState(() =>
    getInitialValue("iconColor", "rgba(255,255,255,1)")
  );

  const [rounded, setRounded] = useState(() => getInitialValue("bgRounded", 0));
  const [padding, setPadding] = useState(() => getInitialValue("bgPadding", 0));
  const [bgColor, setBgColor] = useState(() =>
    getInitialValue("bgColor", "rgba(255,255,255,1)")
  );
  const [iconName, setIconName] = useState(() =>
    getInitialValue("iconName", "Smile")
  );

  useEffect(() => {
    const updatedValue = {
      ...storedValues,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      iconName: iconName,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: bgColor,
    };
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [size, rotate, color, rounded, padding, bgColor]);

  const value = {
    size,
    setSize,
    rotate,
    setRotate,
    color,
    setColor,
    rounded,
    setRounded,
    padding,
    setPadding,
    bgColor,
    setBgColor,
    iconName,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
