"use client";

import { useMemo } from "react";
import { INGREDIENTS, type IngredientCategory } from "@/data/experiments";

type IngredientSelectorProps = {
  selectedIds: string[];
  onToggle: (id: string) => void;
  onClear: () => void;
};

export default function IngredientSelector({
  selectedIds,
  onToggle,
  onClear,
}: IngredientSelectorProps) {
  const grouped = useMemo(() => {
    return INGREDIENTS.reduce<Record<IngredientCategory, typeof INGREDIENTS>>(
      (acc, ingredient) => {
        acc[ingredient.category] = acc[ingredient.category] || [];
        acc[ingredient.category]!.push(ingredient);
        return acc;
      },
      {
        Liquids: [],
        Pantry: [],
        Household: [],
        Tools: [],
      },
    );
  }, []);

  return (
    <section className="relative isolate rounded-3xl border border-white/40 bg-white/70 p-6 shadow-xl shadow-[0_25px_60px_rgba(16,185,129,0.12)] backdrop-blur sm:p-8">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-emerald-100 via-sky-100 to-amber-100 opacity-70" />
      <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold uppercase tracking-wide text-emerald-600">
            Ingredient Locker
          </p>
          <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
            What do you have on your kitchen counter?
          </h2>
        </div>
        <button
          type="button"
          onClick={onClear}
          className="self-start rounded-full border border-emerald-500 bg-white px-4 py-1 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50"
        >
          Clear all
        </button>
      </header>

      <div className="mt-5 grid gap-4">
        {(Object.keys(grouped) as IngredientCategory[]).map((category) => (
          <div key={category} className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {grouped[category]!.map((ingredient) => {
                const isActive = selectedIds.includes(ingredient.id);
                return (
                  <button
                    key={ingredient.id}
                    type="button"
                    onClick={() => onToggle(ingredient.id)}
                    className={`group flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "border-emerald-500 bg-emerald-500 text-white shadow-lg shadow-[0_18px_40px_rgba(16,185,129,0.22)]"
                        : "border-zinc-200 bg-white text-zinc-700 hover:border-emerald-500 hover:text-emerald-600"
                    }`}
                    aria-pressed={isActive}
                  >
                    <span aria-hidden className="text-lg">
                      {ingredient.icon}
                    </span>
                    {ingredient.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
