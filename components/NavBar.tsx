"use client";
import { Menu, X } from "lucide-react";
import { Tangerine } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "/servicii", label: "Servicii" },
    { href: "/despre-noi", label: "Despre Noi" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="bg-[#fbfaf9] sm:px-8 px-4 py-2 z-100 w-full">
        <nav className="flex justify-between items-center max-container">
          <Link href="/">
            <Image src="/images/2.png" width={200} height={200} alt="logo" />
          </Link>
          <div className="hidden xl:block text-lg">
            <h1 className="text-3xl">
              Motto ul care te face sa mergi la munka
            </h1>
          </div>
          <div>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-sans leading-normal text-lg font-semibold text-slate-gray hover:text-[#fe403f] underline-animation"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <Menu className="w-10 h-10" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 font-sans bg-black bg-opacity-50 z-50">
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <X className="w-10 h-10" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
              {navLinks.map((item) => (
                <li key={item.label} className="mb-10">
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
