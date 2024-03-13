"use client";
import { testimonials } from "@/constants/testimonials";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StarIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const Testimoniale = () => {
  const t = testimonials;
  return (
    <div className="font-sans w-full flex flex-col justify-center items-center">
      <motion.div
        className="p-10 text-md italic w-[90%]"
        initial={{ opacity: 0, y: -200 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 2 },
        }}
        viewport={{ once: true }}
      >
        <h2>
          Testimonialele noastre sunt o oglindă a succesului și a colaborărilor
          semnificative pe care le-am realizat cu partenerii noștri și cu
          profesioniștii talentați pe care i-am plasat în poziții de vârf în
          diverse domenii. Aceste mărturii nu sunt doar cuvinte scrise; sunt
          povești reale de excelență profesională și satisfacție pe termen lung.
        </h2>
        <h2 className="mt-4">
          Descoperiți cum Crystal HR a transformat carierele și afacerile prin
          identificarea și potrivirea celor mai buni profesioniști cu
          oportunitățile potrivite. Suntem mândri să împărtășim aceste
          experiențe și să vă invităm să vă alăturați comunității noastre de
          succes. Citiți mai departe pentru a afla cum Crystal HR poate fi
          partenerul dumneavoastră de încredere în navigarea către succesul
          profesional.
        </h2>
      </motion.div>
      <div className="w-[90%] grid grid-cols-1 xl:grid-cols-3 p-3 gap-3">
        {t.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -200 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 1+ (index*0.1) },
            }}
            viewport={{ once: true }}
          >
            <Card className="border-[#fe403f] border-[1px]">
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{testimonial.description}</p>
              </CardContent>
              <CardFooter>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-300" />
                ))}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimoniale;
