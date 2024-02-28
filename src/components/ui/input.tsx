import React from "react";

interface Props {
  name: string;
  placeholder: string;
}

export default function InputText({ name, placeholder }: Props) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="w-full decoration-transparent border py-3 bg-transparent border-t-0 border-x-0  border-secondary text-secondary outline-none placeholder:text-secondary placeholder:opacity-75 placeholder:font-anderson placeholder:m-5"
    />
  );
}
