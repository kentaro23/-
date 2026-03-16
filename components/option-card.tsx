import { Mail, MapPin, Phone } from "lucide-react";
import type { ServiceOption, OptionFeatureIconKey } from "@/content/options";
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
    <div className={cn("rounded-xl border border-gray-200 bg-white p-6 shadow-card", className)}>
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">Option</span>
        <h3 className="text-sm font-semibold text-ink">{option.name}</h3>
      </div>
      <p className="mt-3 text-lg font-bold text-brand-700">{option.price}</p>
      {compact ? (
        <p className="mt-2 text-sm text-gray-500">{option.shortLabel}</p>
      ) : (
        <>
          <ul className="mt-4 space-y-2">
            {option.features.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <li
                  key={feature.text}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  <span>{feature.text}</span>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 space-y-1">
            {option.notes.map((note) => (
              <p key={note} className="text-xs text-gray-400">
                {note}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
