import { services } from "@/data/services";
import React from "react";

export default function ServicesBento() {
  return (
    <div className="grid auto-rows-[192px] grid-cols-3 gap-4 w-full">
      {services.map((_, i) => (
        <div
          key={i}
          className={`row-span-1 grid-rows-12 rounded-xl border-2 border-slate-400/10 bg-slate-300 dark:bg-neutral-900 ${
            i == 0 || i == 3 || i == 4 ? "col-span-2" : ""
          }`}
        ></div>
      ))}
    </div>
  );
}
