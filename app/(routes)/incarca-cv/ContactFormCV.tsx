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
import { sendCvForm } from "@/lib/api";
import { CircleCheckBig, RotateCw } from "lucide-react";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";

const phoneNumberRegex = /^\d{10}$/;

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  url: z.string(),
  pathName: z.string(),
  phoneNumber: z.string().refine(
    (value) => {
      return phoneNumberRegex.test(value);
    },
    {
      message: "Număr de telefon invalid",
    }
  ),
  email: z.string().email({
    message: "Adresa de email invalidă.",
  }),
  message: z
    .string()
    .min(10, {
      message: "Mesajul trebuie să conțină minim 10 caractere. ",
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

const ContactFormCV = () => {
  const [buttonIsLoading, setButtonIsLoading] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  let firstName, lastName, url, pathName;

  if (typeof window !== "undefined") {
    firstName = localStorage.getItem("firstName");
    lastName = localStorage.getItem("lastName");
    url = localStorage.getItem("url");
    pathName = localStorage.getItem("pathname");
  }

  // console.log(firstName, lastName, url, pathName);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: firstName || "",
      lastName: lastName || "",
      url: url || "",
      pathName: pathName || "",
      phoneNumber: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
    try {
      setButtonIsLoading(true);
      await sendCvForm(values);
      setSendSuccess(true);
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
            Un reprezentant Crystal HR va reveni către dumneavoastră în cel mai
            scurt timp.
          </h1>
        </motion.div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Număr de telefon</FormLabel>
                  <FormControl>
                    <Input placeholder="07XXXXXXXX" {...field} />
                  </FormControl>
                  <FormDescription>
                    Numărul dumneavoastră pe care vă putem contacta
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
                      placeholder="Doresc să mă angajez ca..."
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

export default ContactFormCV;
