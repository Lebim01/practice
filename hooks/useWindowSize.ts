import { useState, useEffect, useMemo } from "react";

type Size = number | undefined;
type WindowSize = { width: Size, height: Size }
export const XS = 1
export const SM = 2
export const MD = 3
export const LG = 4
export const XL = 5
export const XXL = 6
type DeviceSize = typeof LG | typeof MD | typeof SM | typeof XL | typeof XS | typeof XXL

const useWindowSize = (): { windowSize: WindowSize, deviceSize: DeviceSize } => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  const deviceSize: DeviceSize = useMemo(() => {
    if(windowSize.width){
      if(windowSize.width >= 1400) return XXL
      if(windowSize.width >= 1200) return XL
      if(windowSize.width >= 992) return LG
      if(windowSize.width >= 768) return MD
      if(windowSize.width >= 576) return SM
      if(windowSize.width <= 576) return XS
    }
    return XS
  }, [windowSize])

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { windowSize, deviceSize };
}

export default useWindowSize