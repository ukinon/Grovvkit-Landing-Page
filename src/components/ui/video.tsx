import React from "react";

export default function Video() {
  return (
    <video
      className="object-cover h-full w-full fixed -z-10"
      autoPlay
      loop
      muted
    >
      <source src="/background/hero/background.mp4" />
    </video>
  );
}
