"use client";
import { Clock4, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";
import useScreen from "@/hooks/useScreen";

const Footer = () => {
  const isLargeScreen = useScreen();
  return (
    <div>
      {isLargeScreen ? (
        <div className="w-full bg-[#fbfaf9] flex justify-between items-center px-10">
          <div className="flex">
            <div className="font-sans flex justify-center items-center">
              <Phone className="w-5 h-5 mr-2" />
              <h2>(0712) 345 678</h2>
            </div>
            <Separator orientation="vertical" className="mx-4" />
            <div className="font-sans flex justify-center items-center">
              <Mail className="w-5 h-5 mr-2" />
              <h2>contact@crystal-hr.com</h2>
            </div>
            <Separator orientation="vertical" className="mx-4" />
            <div className="font-sans flex justify-center items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <h2>Str. Stoimus, Nr.46, Sector 4, Bucuresti</h2>
            </div>
            <Separator orientation="vertical" className="mx-4" />
            <div className="font-sans flex justify-center items-center">
              <Clock4 className="w-5 h-5 mr-2" />
              <h2>Luni-Vineri 9:00-17:00</h2>
            </div>
          </div>
          <Image src="/images/1.png" width={200} height={200} alt="logo" />
        </div>
      ) : (
        <div className="w-full bg-[#fbfaf9] flex justify-between items-center">
          <div className="flex-col mt-2">
            <div className="font-sans flex justify-start items-center ml-2">
              <Phone className="w-5 h-5 mr-2" />
              <h2>(0712) 345 678</h2>
            </div>
            <Separator className="my-1" />
            <div className="font-sans flex justify-start items-center ml-2">
              <Mail className="w-5 h-5 mr-2" />
              <h2>contact@crystal-hr.com</h2>
            </div>
            <Separator className="my-1" />
            <div className="font-sans flex justify-start items-center">
              <MapPin className="4xs:w-8 4xs:h-8  md:h-5 w-5 mr-2 4xs:ml-2 md:ml-1 xl:ml-2" />
              <h2>Str. Stoimus, Nr.46, Sector 4, Bucuresti</h2>
            </div>
            <Separator className="my-1" />
            <div className="font-sans flex justify-start items-center mb-2 ml-2">
              <Clock4 className="w-5 h-5 mr-2" />
              <h2>Luni-Vineri 9:00-17:00</h2>
            </div>
          </div>
          <Image src="/images/1.png" width={150} height={150} alt="logo" />
        </div>
      )}
    </div>
  );
};

export default Footer;
