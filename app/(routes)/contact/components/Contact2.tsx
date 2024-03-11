"use client";
import useMobile from "@/hooks/useMobile";
import React from "react";
import { motion } from "framer-motion";

const Contact2 = () => {
  const isLargeScreen = useMobile();
  return (
    <div className="font-sans w-full flex flex-col justify-center items-center">
      <div className="w-[90%] flex flex-col justify-center items-center mt-4">
        <h1 className="text-md text-center">
          Suntem aici pentru a vă ajuta să gestionați resursele umane cu
          încredere și profesionalism.
        </h1>
        <h2 className="text-md text-center">
          Dacă aveți întrebări, solicitări sau doriți să discutați despre cum
          putem contribui la succesul organizației dumneavoastră, nu ezitați să
          ne contactați.
        </h2>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <motion.div
          className="flex flex-col justify-center items-center mt-4"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="flex flex-col justify-center items-center">
            <h3 className="font-semibold text-md mt-4">Datele de Contact:</h3>
            <p>Adresa: Str. Șoimuș, Nr.46, Sector 4, Bucuresti</p>
            <p>Telefon: (0712) 345 678</p>
            <p>E-mail: contact@crystal-hr.com</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="font-semibold text-md mt-4">Program de Lucru:</h3>
            <p>Luni - Vineri: 9:00-17:00</p>
            <p>Sâmbătă - Duminică: Inchis</p>
          </div>
        </motion.div>
        <motion.div
          className="rounded-lg overflow-hidden my-10"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <iframe
            title="Google Map"
            width={isLargeScreen ? "full" : "800"}
            height="500"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.0145033741933!2d26.09582857668161!3d44.39182400434639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fe4a1a3316b7%3A0x8773d2ddcc3bdea3!2zU3RyYWRhIMiYb2ltdciZIDQ1LCBCdWN1cmXImXRpIDA0MDcwNQ!5e0!3m2!1sen!2sro!4v1710193138289!5m2!1sen!2sro"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact2;
