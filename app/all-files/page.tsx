import React from "react";
import { list } from "@vercel/blob";
import DeleteButton from "./DeleteButton";

const page = async () => {
  const { blobs } = await list();
  console.log({ blobs });
  return (
    <div className="font-sans">
      {blobs.map((blob) => (
        <div key={blob.url}>
          {blob.pathname} - <DeleteButton url={blob.url} />
        </div>
      ))}
    </div>
  );
};

export default page;
