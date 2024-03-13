"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  url: string;
};

const DeleteButton = ({ url }: Props) => {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        await fetch("api/file", {
          method: "DELETE",
          body: JSON.stringify({
            url,
          }),
        });
        router.refresh();
      }}
    >
      DELETE
    </button>
  );
};

export default DeleteButton;
