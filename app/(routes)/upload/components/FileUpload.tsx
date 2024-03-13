"use client";

import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";

export default function FileUpload() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Va rugam sa completati toate spatiile de mai jos</h1>

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          if (!inputFileRef.current?.files) {
            throw new Error("No file selected");
          }

          const file = inputFileRef.current.files[0];
          const filename = file.name;
          const extension = '.'+filename.substring(filename.lastIndexOf('.') + 1)


            const response = await fetch(`/api/file?filename=CV-${firstName}-${lastName}${extension}`, {
              method: "POST",
              body: file,
            });

            const newBlob = (await response.json()) as PutBlobResult;

            setBlob(newBlob);
        }}
      >
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="first name"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="last name"
        />
        <input name="file" ref={inputFileRef} type="file" required />
        <button type="submit">Upload</button>
      </form>
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </div>
  );
}
