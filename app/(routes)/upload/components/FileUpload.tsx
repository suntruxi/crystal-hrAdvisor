"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { PutBlobResult } from "@vercel/blob";
import { RotateCw } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

export default function FileUpload() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [buttonIsLoading, setButtonIsLoading] = useState(false);
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          setButtonIsLoading(true);

          if (!inputFileRef.current?.files) {
            throw new Error("No file selected");
          }

          const file = inputFileRef.current.files[0];
          const filename = file.name;
          const extension =
            "." + filename.substring(filename.lastIndexOf(".") + 1);

          const response = await fetch(
            `/api/file?filename=CV-${firstName}-${lastName}${extension}`,
            {
              method: "POST",
              body: file,
            }
          );

          const newBlob = (await response.json()) as PutBlobResult;
          localStorage.setItem("firstName", firstName);
          localStorage.setItem("lastName", lastName);
          localStorage.setItem("url", newBlob.url);
          localStorage.setItem("pathname", newBlob.pathname);

          setBlob(newBlob);
          router.push("/incarca-cv");
        }}
      >
        <p className="font-semibold">Nume</p>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Popescu"
          required
        />
        <p className="text-sm text-muted-foreground mb-3">
          Numele dumneavoastră
        </p>
        <p className="font-semibold">Prenume</p>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Andrei"
          required
        />
        <p className="text-sm text-muted-foreground mb-3">
          Prenumele dumneavoastră
        </p>
        <p className="font-semibold">CV</p>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          name="file"
          ref={inputFileRef}
          type="file"
          required
        />
        <p className="text-sm text-muted-foreground mb-3">
          Vă rugăm să încărcați CV-ul dumneavoastră
        </p>
        <div className="items-top flex space-x-2 my-6">
          <Checkbox id="terms1" required />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept termenii si conditiile
            </label>
            <p className="text-sm text-muted-foreground">
              Sunteti de acord cu{" "}
              <Link href="/termeni-conditii" target="_blank">
                <span className="text-blue-600 underline">
                  termenii si conditiile.
                </span>
              </Link>
            </p>
          </div>
        </div>
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
            Pasul urmator
          </Button>
        )}
      </form>
      {/* {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )} */}
    </div>
  );
}
