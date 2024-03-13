import React from "react";

const ServiciiHero = () => {
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
      <h1 className="flex justify-center items-center text-white 4xs:text-2xl md:text-3xl xl:text-4xl font-semibold">
        Serviciile noastre
      </h1>
    </div>
  );
};

export default ServiciiHero;
