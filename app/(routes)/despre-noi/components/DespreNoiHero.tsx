import React from "react";

const DespreNoiHero = () => {
  return (
    <div
      className="w-full font-sans h-[50vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(/images/servicii.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {" "}
      <h1 className="flex justify-center items-center text-white 4xs:text-lg md:text-2xl xl:text-4xl font-semibold">
        Despre noi
      </h1>
    </div>
  );
};

export default DespreNoiHero;
