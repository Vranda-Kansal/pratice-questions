import { useEffect, useState } from "react";

const LightFeatures = ({ pattern, interval, running }) => {
  const [isOn, setIsOn] = useState(true);
  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => {
      if (pattern === "blinking") {
        setIsOn((prev) => !prev);
      } else if (pattern === "fading") {
        setIsOn((prev) => !prev);
      } else {
        setIsOn(true);
      }
    }, interval * 1000);
    return () => clearInterval(timer);
  }, [pattern, interval, running]);

  return (
    <div
      className={`
    w-24 h-12 rounded-xl
    ${isOn ? "bg-yellow-400" : "bg-gray-300"}
    ${isOn ? "opacity-100" : "opacity-20"}
    ${pattern === "fading" ? "transition-opacity duration-1000 ease-in-out" : ""}
  `}
    />
  );
};
export default LightFeatures;
