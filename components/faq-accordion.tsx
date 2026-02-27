"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Item = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: readonly Item[] }) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div key={item.question} className="texture-mesh rounded-2xl border border-slate-200 bg-white">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-semibold text-slate-900 md:text-base">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-slate-500 transition-transform",
                  isOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>
            {isOpen ? (
              <div className="border-t border-slate-200 px-5 py-4 text-sm leading-7 text-slate-600">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
