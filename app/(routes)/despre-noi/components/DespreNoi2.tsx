"use client";
import React from "react";
import { motion } from "framer-motion";

const DespreNoi2 = () => {
  return (
    <div className="font-sans w-full flex flex-col justify-center items-center p-10">
      <div className="flex flex-col w-[90%]">
        <h1 className="text-md mt-1">
          Crystal HR Advisor este o firmă de consultanță în resurse umane
          dedicată exclusiv industriei de transport. Echipa noastră combină
          expertiza aprofundată în HR cu o înțelegere detaliată a nevoilor și
          provocărilor specifice acestui sector.
        </h1>
        <h1 className="text-md mt-4">
          {" "}
          Misiunea noastră este de a conecta companiile de transport cu
          talentele de care au nevoie pentru a-și accelera creșterea și a-și
          optimiza operațiunile.
        </h1>
        <h2 className="text-lg font-semibold italic mt-4">
          De ce să lucrezi cu noi?
        </h2>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-md mt-2">• Acces la o Rețea Extinsă de Talente</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <p className="text-md mt-2">
            • Procese eficiente și mai puțin costisitoare
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 3 }}
        >
          <p className="text-md mt-2">
            • Identificăm cu precizie nevoile specifice de resurse umane ale
            afacerii dumneavoastră.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 4 }}
        >
          <p className="text-md mt-2">
            • Procedura noastră de angajare este concepută pentru a fi rapidă și
            simplă, asigurând o experiență optimă pentru angajator.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 5 }}
        >
          <p className="text-md mt-2">
            • Oferim o garanție de 30 de zile pentru fiecare angajare, însemnând
            că, în cazul în care un angajat recrutat de noi își încheie
            colaborarea în mai puțin de 30 de zile, vom iniția procesul de
            recrutare din nou, fără costuri
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default DespreNoi2;
