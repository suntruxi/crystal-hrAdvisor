"use client";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="font-sans w-full flex flex-col justify-center items-center">
      <h1 className="my-6 text-lg font-semibold">
        Multumim pentru increderea acordata!
      </h1>
      <div className="w-[90%] grid grid-cols-1 xl:grid-cols-2">
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <ContactForm />
        </motion.div>
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Image src="/images/form.jpg" width={700} height={700} alt="form" />
        </motion.div>
      </div>
    </div>
  );
};

export default page;
