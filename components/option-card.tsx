import { Mail, MapPin, Phone } from "lucide-react";
import type { ServiceOption, OptionFeatureIconKey } from "@/content/options";
import { Card, Pill } from "@/components/ui";
import { cn } from "@/lib/utils";

const iconMap: Record<OptionFeatureIconKey, typeof MapPin> = {
  "map-pin": MapPin,
  mail: Mail,
  phone: Phone
};

export function OptionCard({
  option,
  compact = false,
  className
}: {
  option: ServiceOption;
  compact?: boolean;
  className?: string;
}) {
  return (
    <Card className={cn("border-brand-100 bg-white", className)}>
      <div className="flex flex-wrap items-center gap-2">
        <Pill className="border-brand-200 bg-brand-50 text-brand-900">Option</Pill>
        <h3 className="text-base font-semibold text-slate-900">{option.name}</h3>
      </div>
      <p className="mt-3 text-xl font-bold text-brand-900">{option.price}</p>
      {compact ? (
        <p className="mt-3 text-sm text-slate-700">{option.shortLabel}</p>
      ) : (
        <>
          <ul className="mt-4 space-y-2">
            {option.features.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <li
                  key={feature.text}
                  className="flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                >
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-800" />
                  <span>{feature.text}</span>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 space-y-1">
            {option.notes.map((note) => (
              <p key={note} className="text-xs leading-6 text-slate-500">
                - {note}
              </p>
            ))}
          </div>
        </>
      )}
    </Card>
  );
}
