"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import { sendContactForm } from "@/lib/api";
import { CircleCheckBig, RotateCw } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  fullName: z.string().refine(
    (value) => {
      const capitalLetters = (value.match(/[A-Z]/g) || []).length;
      const containsDigitsOrSymbols = /[0-9!@#$%^&*(),.?":{}|<>]/.test(value);

      return capitalLetters === 2 && !containsDigitsOrSymbols;
    },
    {
      message: "Format-ul numelui și al prenumelui: Nume Prenume",
    }
  ),
  company: z
    .string()
    .min(4, {
      message: "Numele companiei trebuie să aibă cel puțin 4 caractere.",
    })
    .max(50, {
      message: "Numele companiei nu poate avea mai mult de 50 caractere.",
    }),
  phone: z.string().refine((value) => /^\d{10}$/.test(value), {
    message: "Format-ul numărului de telefon: 07XXXXXXXX",
  }),
  email: z.string().email({
    message: "Adresa de email invalidă.",
  }),
  message: z
    .string()
    .min(10, {
      message: "Mesajul trebuie sa conțină minim 10 caractere. ",
    })
    .max(1000, {
      message: "Mesajul nu poate conține mai mult de 1000 de caractere. ",
    })
    .refine(
      (value) => {
        const containsInvalidChars = /[!@#$%^&*():{}|<>]/.test(value);
        return !containsInvalidChars;
      },
      {
        message:
          "Mesajul nu trebuie să conțină caractere speciale, cu excepția punctuației obișnuite.",
      }
    ),
});

const ContactForm = () => {
  const [buttonIsLoading, setButtonIsLoading] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      company: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      await sendContactForm(values);
      setButtonIsLoading(true);
      // console.log(values);
      setTimeout(() => {
        setSendSuccess(true);
      }, 1000);
    } catch (error) {}
  }

  return (
    <div className="mb-5">
      {sendSuccess ? (
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <CircleCheckBig className="text-green-700" />
          <h1 className="font-semibold text-lg">
            Am primit cu succes email-ul dumneavoastră!
          </h1>
          <h1>
            Un reprezentant Crystal HR va reveni catre dumneavoastră in cel mai
            scurt timp.
          </h1>
        </motion.div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nume si Prenume</FormLabel>
                  <FormControl>
                    <Input placeholder="Popescu Ion" {...field} />
                  </FormControl>
                  <FormDescription>
                    Numele si prenumele cu care vă putem contacta
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Companie</FormLabel>
                  <FormControl>
                    <Input placeholder="S.C. COMPANIE S.R.L." {...field} />
                  </FormControl>
                  <FormDescription>
                    Numele companiei dumneavoastră{" "}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefon</FormLabel>
                  <FormControl>
                    <Input placeholder="07XXXXXXXX" {...field} />
                  </FormControl>
                  <FormDescription>
                    Numărul de telefon pe care vă putem contacta{" "}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="exemplu@email.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    Email-ul dumneavoastră de contact{" "}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mesaj</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="M-ar interesa să găsesc..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Mesajul dumneavoastră pentru echipa noastră{" "}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {buttonIsLoading ? (
              <Button disabled>
                <RotateCw className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-red-800 hover:bg-white hover:text-red-800"
              >
                Trimite
              </Button>
            )}
          </form>
        </Form>
      )}
    </div>
  );
};

export default ContactForm;
