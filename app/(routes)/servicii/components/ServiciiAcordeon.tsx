import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services } from "@/constants/services";

const ServiciiAcordeon = () => {
  const servicii = services;
  return (
    <div className="font-sans w-full flex flex-col justify-center items-center p-10">
      <div className="flex flex-col justify-center items-center w-[90%]">
        <h1 className="text-md">
          Bine ați venit în universul nostru dedicat dezvoltării și consolidării
          resurselor umane, unde Crystal HR Advisor se distinge prin oferirea unui
          portofoliu complet de servicii specializate în gestionarea talentului
          și optimizarea proceselor de resurse umane. Suntem aici pentru a vă
          susține în toate aspectele critice ale managementului personalului, de
          la recrutare și selecție la redactarea detaliată a documentelor
          esențiale, precum și gestionarea canalelor de atragere și a
          contractelor de muncă.
        </h1>
        <h2 className="mt-4 text-md">
          Descoperiți cum Crystal HR Advisor poate transforma modul în care vă
          gestionați resursele umane, oferind servicii personalizate de
          recrutare, redactare de documente și gestionare a personalului, pentru
          a vă ajuta să atingeți și să depășiți obiectivele organizației
          dumneavoastră. Suntem aici pentru a vă susține în fiecare pas al
          călătoriei dumneavoastră în lumea resurselor umane, contribuind la
          succesul durabil al afacerii dumneavoastră.
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center w-[90%] mt-8">
        {servicii.map((s, index) => (
          <Accordion type="single" key={index} collapsible className="w-[60%]">
            <AccordionItem value={`item-${index + 1}`}>
              <AccordionTrigger className="text-lg text-[#fe403f]">
                {s.title}
              </AccordionTrigger>
              <AccordionContent>{s.value}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default ServiciiAcordeon;
