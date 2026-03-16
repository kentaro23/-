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
    <div className="divide-y divide-gray-200 border-t border-gray-200">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-medium text-ink md:text-base">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-gray-400 transition-transform",
                  isOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>
            {isOpen ? (
              <div className="pb-5 text-sm leading-relaxed text-gray-500">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
