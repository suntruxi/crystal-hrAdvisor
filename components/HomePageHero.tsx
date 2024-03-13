"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  ChevronsLeft,
  ChevronsRight,
  FileUp,
  Handshake,
  MailQuestion,
} from "lucide-react";
import Link from "next/link";

const HomePageHero = () => {
  const bounceTransition = {
    x: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeOut",
    },
    opacity: {
      delay: 2,
    },
  };

  return (
    <div className="w-full flex flex-col xl:flex-row justify-center items-center">
      <motion.div
        className="w-full h-[75vh] flex items-center justify-center border-[#fe403f] border-t-[10px] border-b-[10px] xl:border-t-0 xl:border-r-[15px] xl:border-b-[30px]"
        style={{
          backgroundImage: `url(/images/stanga-test.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0, x: -200 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, delay: 0 },
        }}
        viewport={{ once: true }}
      >
        {" "}
        <div className="bg-black bg-opacity-50 p-4 flex flex-col justify-center items-center rounded-lg">
          <h1 className="font-sans text-lg text-white font-semibold">
            Caut candidati!
          </h1>
          <Link href="/servicii">
            <Button
              variant="outline"
              className="font-sans hover:bg-red-800 hover:text-white mt-2"
            >
              <Handshake className="w-5 h-5 mr-2" />
              Afla serviciile noastre
            </Button>
          </Link>
          <Link href="/solicita-oferta">
            <Button
              variant="outline"
              className=" font-sans hover:bg-red-800 hover:text-white mt-3"
            >
              <MailQuestion className="w-5 h-5 mr-2" />
              Solicita oferta
            </Button>
          </Link>
        </div>
        <motion.div
          className="hidden 2xl:flex items-end justify-end "
          transition={bounceTransition}
          animate={{
            x: ["300%", "350%"],
            opacity: 1,
          }}
          initial={{ opacity: 0 }}
          style={{ transition: "opacity  0.3s ease" }}
        >
          <ChevronsLeft className="w-20 h-20 mr-2 text-white" />
        </motion.div>
      </motion.div>
      <motion.div
        className="w-full h-[75vh] flex items-center justify-center border-[#fe403f] border-t-[10px] border-b-[10px] xl:border-t-0 xl:border-l-[15px] xl:border-b-[30px]"
        style={{
          backgroundImage: `url(/images/dreapta.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0, x: 200 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, delay: 0.5 },
        }}
        viewport={{ once: true }}
      >
        <motion.div
          className="hidden 2xl:flex items-end justify-end "
          transition={bounceTransition}
          animate={{
            x: ["-300%", "-350%"],
            opacity: 1,
          }}
          initial={{ opacity: 0 }}
          style={{ transition: "opacity  0.3s ease" }}
        >
          <ChevronsRight className="w-20 h-20 text-[#fe403f]" />
        </motion.div>
        <div className="bg-black bg-opacity-50 p-4 flex flex-col justify-center items-center rounded-lg">
          <h1 className="font-sans text-lg text-white font-semibold">
            Vreau sa ma angajez!
          </h1>
          <Link href="/upload">
            <Button
              variant="outline"
              className="font-sans hover:bg-red-800 hover:text-white mt-2"
            >
              <FileUp className="w-5 h-5 mr-2" />
              Incarca CV
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePageHero;
