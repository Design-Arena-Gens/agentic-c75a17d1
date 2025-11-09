"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  type Experiment,
  INGREDIENT_LOOKUP,
} from "@/data/experiments";

type ExperimentCardProps = {
  experiment: Experiment;
  highlight?: "match" | "almost";
  missingIngredientIds?: string[];
};

export default function ExperimentCard({
  experiment,
  highlight = "match",
  missingIngredientIds = [],
}: ExperimentCardProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    if (isVideoOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isVideoOpen]);

  const missingLabels = useMemo(() => {
    return missingIngredientIds
      .map((id) => INGREDIENT_LOOKUP[id]?.label ?? id)
      .filter(Boolean);
  }, [missingIngredientIds]);

  const requiredLabels = useMemo(() => {
    return experiment.ingredients.map(
      (id) => INGREDIENT_LOOKUP[id]?.label ?? id,
    );
  }, [experiment.ingredients]);

  return (
    <>
      <article
        className={`relative overflow-hidden rounded-3xl border p-6 shadow-lg shadow-[0_35px_80px_rgba(15,118,110,0.15)] transition hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
          highlight === "match"
            ? "border-emerald-200 bg-white/90"
            : "border-amber-200 bg-white/80"
        }`}
      >
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-32 blur-3xl ${
            highlight === "match"
              ? "bg-gradient-to-br from-emerald-200 via-sky-200 to-transparent"
              : "bg-gradient-to-br from-amber-200 via-rose-200 to-transparent"
          }`}
        />
        <div className="relative flex flex-col gap-6 sm:flex-row">
          <div className="sm:w-1/3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={experiment.image.src}
                alt={experiment.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
                priority={highlight === "match"}
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-700">
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
                {experiment.duration}
              </span>
              <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-sky-700">
                Ages {experiment.ageRange}
              </span>
              <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-amber-700">
                Mess: {experiment.messLevel}
              </span>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <header className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                {highlight === "match" ? "Ready to Launch" : "Almost There"}
              </p>
              <h3 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
                {experiment.title}
              </h3>
              <p className="text-base text-zinc-600 sm:text-lg">
                {experiment.shortDescription}
              </p>
            </header>

            <section className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                You&apos;ll need
              </h4>
              <div className="flex flex-wrap gap-2">
                {requiredLabels.map((label) => (
                  <span
                    key={label}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700"
                  >
                    {label}
                  </span>
                ))}
              </div>
              {missingLabels.length > 0 && (
                <p className="text-sm font-semibold text-amber-600">
                  Grab these to make it happen:{" "}
                  <span className="font-normal text-amber-700">
                    {missingLabels.join(", ")}
                  </span>
                </p>
              )}
              {experiment.optionalExtras && experiment.optionalExtras.length > 0 && (
                <p className="text-sm text-zinc-500">
                  Optional sparkle:{" "}
                  {experiment.optionalExtras
                    .map((id) => INGREDIENT_LOOKUP[id]?.label ?? id)
                    .join(", ")}
                </p>
              )}
            </section>

            <section className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                Step-by-step adventure
              </h4>
              <ol className="space-y-2 rounded-2xl bg-white/70 p-4 text-sm text-zinc-700 ring-1 ring-zinc-100 sm:text-base">
                {experiment.steps.map((step, idx) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="grid gap-4 rounded-2xl bg-emerald-50/80 p-4 text-sm text-emerald-900 sm:grid-cols-2 sm:text-base">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  What we&apos;re learning
                </h4>
                <p className="text-sm leading-relaxed sm:text-base">
                  {experiment.scienceSpotlight}
                </p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  Explain it to kids
                </h4>
                <p className="text-sm leading-relaxed sm:text-base">
                  {experiment.howToExplain}
                </p>
              </div>
            </section>

            <section className="grid gap-4 rounded-2xl bg-white/80 p-4 ring-1 ring-emerald-100 sm:grid-cols-2 sm:text-base">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                  Adult coaching tip
                </h4>
                <p className="text-sm leading-relaxed text-zinc-700 sm:text-base">
                  {experiment.adultNote}
                </p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                  Try next
                </h4>
                <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-zinc-700 sm:text-base">
                  {experiment.extensionIdeas.map((idea) => (
                    <li key={idea}>{idea}</li>
                  ))}
                </ul>
                {experiment.safetyTip && (
                  <p className="text-sm font-semibold text-amber-600">
                    Safety: {experiment.safetyTip}
                  </p>
                )}
              </div>
            </section>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[0_18px_40px_rgba(16,185,129,0.22)] transition hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
              >
                ▶ Watch quick demo
              </button>
              <span className="flex items-center rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-sky-700">
                Built for co-learning
              </span>
            </div>
          </div>
        </div>
      </article>

      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8">
          <div className="w-full max-w-3xl overflow-hidden rounded-3xl bg-zinc-950 shadow-2xl">
            <div className="relative aspect-video">
              <iframe
                src={experiment.videoUrl}
                title={`${experiment.title} video walkthrough`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="flex items-center justify-between bg-zinc-900 px-4 py-3">
              <p className="text-sm font-semibold text-white">
                {experiment.title} — video demo
              </p>
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-white/20"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
