import { useState, useEffect } from "react";

const useMobile = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth < 431); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", updateScreenSize);

    updateScreenSize();

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);
  return isLargeScreen
};

export default useMobile;