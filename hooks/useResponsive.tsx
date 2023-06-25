import React, { useEffect, useState } from "react";

type IDeviceType = "mobile" | "tablet" | "desktopS" | "desktopL" | "desktopXL";

interface HookType {
  is: (deviceType: IDeviceType, comparisonType?: ">" | "<") => boolean;
}

const breakpoints: { [key: string]: number } = {
  mobile: 425,
  tablet: 834,
  desktopS: 1280,
  desktopL: 1440,
  desktopXL: 1920,
};

const useResponsive = (): HookType => {
  const [windowSize, setWindowSize] = useState("");
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);

      const newWidth = window.innerWidth;
      if (newWidth <= breakpoints.mobile) return setWindowSize("mobile");
      if (newWidth <= breakpoints.tablet) return setWindowSize("tablet");
      if (newWidth <= breakpoints.desktopS) return setWindowSize("desktopS");
      if (newWidth <= breakpoints.desktopL) return setWindowSize("desktopL");
      if (newWidth <= breakpoints.desktopXL) return setWindowSize("desktopXL");
    };
    window.addEventListener("resize", handleResize);
  }, []);

  const is = (deviceType: IDeviceType, comparisonType?: ">" | "<") => {
    if (comparisonType === ">") {
      return breakpoints[deviceType] > width;
    }
    if (comparisonType === "<") {
      return breakpoints[deviceType] < width;
    }
    return windowSize === deviceType;
  };
  return { is };
};

export default useResponsive;
