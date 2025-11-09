"use client";

import { useMemo, useState } from "react";
import IngredientSelector from "@/components/IngredientSelector";
import ExperimentCard from "@/components/ExperimentCard";
import { EXPERIMENTS } from "@/data/experiments";

type FilteredExperiment = {
  id: string;
  missingIngredientIds: string[];
};

export default function Home() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const { readyExperiments, almostReady } = useMemo(() => {
    const selectedSet = new Set(selectedIngredients);
    const ready: FilteredExperiment[] = [];
    const almost: FilteredExperiment[] = [];

    for (const experiment of EXPERIMENTS) {
      const missing = experiment.ingredients.filter(
        (ingredientId) => !selectedSet.has(ingredientId),
      );

      if (selectedIngredients.length === 0) {
        ready.push({ id: experiment.id, missingIngredientIds: [] });
        continue;
      }

      if (missing.length === 0) {
        ready.push({ id: experiment.id, missingIngredientIds: [] });
      } else if (missing.length <= 2) {
        almost.push({ id: experiment.id, missingIngredientIds: missing });
      }
    }

    return { readyExperiments: ready, almostReady: almost };
  }, [selectedIngredients]);

  const toggleIngredient = (ingredientId: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredientId)
        ? prev.filter((id) => id !== ingredientId)
        : [...prev, ingredientId],
    );
  };

  const clearSelection = () => setSelectedIngredients([]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-sky-50 to-amber-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),transparent_55%)]" />
      <main className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-20 pt-14 sm:px-8 sm:pt-20">
        <section className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/80 p-8 shadow-2xl shadow-[0_45px_120px_rgba(16,185,129,0.18)] backdrop-blur-sm sm:p-12">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-200/40 via-sky-200/30 to-amber-200/40" />
          <div className="grid gap-8 sm:grid-cols-[1.2fr_1fr] sm:items-center">
            <div className="space-y-5">
              <span className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                Experiment Playground
              </span>
              <h1 className="text-4xl font-black text-zinc-900 sm:text-5xl">
                Dream up science adventures with what&apos;s in your kitchen.
              </h1>
              <p className="text-lg leading-relaxed text-zinc-600 sm:text-xl">
                Pick the supplies you already have, and we&apos;ll match you
                with kid-approved experiments, adult talking points, and quick
                demo videos. Designed to feel playful for kids and insightful
                for grown-ups.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
                  Hands-on STEM
                </span>
                <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
                  Explain the why
                </span>
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  Video walk-throughs
                </span>
              </div>
            </div>
            <div className="relative mx-auto flex w-full max-w-sm flex-col items-center gap-4 rounded-3xl bg-white/80 p-6 text-center shadow-xl shadow-[0_30px_80px_rgba(16,185,129,0.16)] ring-1 ring-emerald-100">
              <div className="absolute -top-3 right-8 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Try this today
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
                Featured Experiment
              </p>
              <h2 className="text-2xl font-bold text-zinc-900">
                Rainbow Density Tower
              </h2>
              <p className="text-sm text-zinc-600">
                Stack liquids like a science sorcerer. Learn about density, make
                predictions, and light it up with a flashlight finale.
              </p>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                Start by picking ingredients below
              </p>
            </div>
          </div>
        </section>

        <IngredientSelector
          selectedIds={selectedIngredients}
          onToggle={toggleIngredient}
          onClear={clearSelection}
        />

        <section className="space-y-6">
          <header className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
              {selectedIngredients.length === 0
                ? "Kickoff collection"
                : "With your ingredients"}
            </p>
            <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
              {selectedIngredients.length === 0
                ? "Our favorite starter experiments"
                : readyExperiments.length > 0
                  ? "Experiments ready to go"
                  : "No instant matches yet"}
            </h2>
            {selectedIngredients.length > 0 && readyExperiments.length === 0 && (
              <p className="text-base text-zinc-600 sm:text-lg">
                You&apos;re close! Add one or two more items to unlock an
                experiment. See suggestions below.
              </p>
            )}
          </header>

          <div className="grid gap-10">
            {readyExperiments.length > 0 &&
              readyExperiments.map(({ id, missingIngredientIds }) => {
                const experiment = EXPERIMENTS.find((item) => item.id === id)!;
                return (
                  <ExperimentCard
                    key={experiment.id}
                    experiment={experiment}
                    highlight="match"
                    missingIngredientIds={missingIngredientIds}
                  />
                );
              })}

            {selectedIngredients.length === 0 && readyExperiments.length === 0 && (
              <p className="rounded-3xl bg-white/80 p-6 text-center text-lg text-zinc-600 shadow-inner shadow-[inset_0_15px_40px_rgba(16,185,129,0.08)]">
                Add an ingredient above to start receiving personalized
                experiments.
              </p>
            )}
          </div>
        </section>

        {selectedIngredients.length > 0 && almostReady.length > 0 && (
          <section className="space-y-6">
            <header className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
                Grab one more thing
              </p>
              <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
                Experiments that are almost ready
              </h2>
              <p className="text-base text-zinc-600 sm:text-lg">
                Missing ingredients are highlighted so you can decide whether to
                improvise or add them to your shopping list.
              </p>
            </header>

            <div className="grid gap-10">
              {almostReady.map(({ id, missingIngredientIds }) => {
                const experiment = EXPERIMENTS.find((item) => item.id === id)!;
                return (
                  <ExperimentCard
                    key={experiment.id}
                    experiment={experiment}
                    highlight="almost"
                    missingIngredientIds={missingIngredientIds}
                  />
                );
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
