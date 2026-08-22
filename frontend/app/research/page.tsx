"use client";

import { useState } from "react";

export default function ResearchPage() {
  const [question, setQuestion] = useState("");

  const exampleQuestion =
    "What compounds are being investigated for EGFR in lung cancer?";

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <header className="border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-black shadow-lg shadow-cyan-400/20">
              B
            </div>

            <div>
              <div className="text-xl font-bold tracking-tight">
                BIOSAGE
              </div>

              <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                Research Workspace
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-3 text-xs text-gray-500 md:flex">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Research environment
          </div>

        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Biomedical Intelligence
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            What are you researching?
          </h1>

          <p className="mt-5 max-w-2xl leading-7 text-gray-400">
            Ask a question about diseases, compounds, targets, mechanisms or
            biomedical literature. BIOSAGE will retrieve evidence and organize
            it for research.
          </p>

        </div>

        <section className="mt-12">

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20 md:p-8">

            <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="relative">

              <div className="mb-4 flex items-center justify-between">

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Research question
                </span>

                <span className="text-[10px] uppercase tracking-wider text-gray-600">
                  Evidence grounded
                </span>

              </div>

              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder={exampleQuestion}
                className="min-h-40 w-full resize-none rounded-2xl border border-white/10 bg-[#050816] p-5 text-base leading-7 text-white outline-none placeholder:text-gray-600 transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20"
              />

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <button
                  onClick={() => setQuestion(exampleQuestion)}
                  className="text-left text-xs text-gray-500 transition hover:text-cyan-300"
                >
                  Try an example →
                </button>

                <button
                  onClick={() =>
                    alert(
                      "Biomedical retrieval will be connected here next."
                    )
                  }
                  className="rounded-2xl bg-cyan-400 px-7 py-3.5 font-semibold text-black shadow-lg shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Search Biomedical Evidence →
                </button>

              </div>

            </div>
          </div>
        </section>

        <section className="mt-12">

          <div className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Research pipeline
          </div>

          <div className="grid gap-3 md:grid-cols-5">

            {[
              ["01", "ASK"],
              ["02", "RETRIEVE"],
              ["03", "ANALYZE"],
              ["04", "VERIFY"],
              ["05", "INSIGHT"],
            ].map(([number, title], index) => (

              <div
                key={number}
                className={`rounded-2xl border p-5 ${
                  index === 0
                    ? "border-cyan-400/30 bg-cyan-400/5"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >

                <div className="text-[10px] tracking-widest text-gray-600">
                  STEP {number}
                </div>

                <div
                  className={`mt-3 text-sm font-bold tracking-[0.2em] ${
                    index === 0 ? "text-cyan-300" : "text-gray-400"
                  }`}
                >
                  {title}
                </div>

              </div>

            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1.5fr_1fr]">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

            <div className="flex items-center justify-between">

              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  AI synthesis
                </div>

                <h2 className="mt-3 text-2xl font-semibold">
                  Research findings
                </h2>
              </div>

              <div className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-wider text-gray-600">
                Awaiting query
              </div>

            </div>

            <div className="mt-8 rounded-2xl border border-dashed border-white/10 bg-black/10 p-8 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5 text-xl text-cyan-300">
                ◈
              </div>

              <h3 className="mt-5 font-semibold text-gray-300">
                Your research synthesis will appear here
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-600">
                Enter a biomedical question above. Retrieved evidence and an
                AI-assisted synthesis will be displayed in this area.
              </p>

            </div>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Evidence
            </div>

            <h2 className="mt-3 text-2xl font-semibold">
              Retrieved sources
            </h2>

            <div className="mt-8 space-y-3">

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">

                <div className="text-xs font-semibold text-gray-400">
                  PubMed
                </div>

                <div className="mt-2 text-sm text-gray-600">
                  Sources will appear here after retrieval.
                </div>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">

                <div className="text-xs font-semibold text-gray-400">
                  ChEMBL
                </div>

                <div className="mt-2 text-sm text-gray-600">
                  Compound evidence will appear here.
                </div>

              </div>

            </div>

          </div>

        </section>

        <div className="mt-12 rounded-2xl border border-yellow-400/10 bg-yellow-400/[0.03] p-5">

          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400/70">
            Research disclaimer
          </div>

          <p className="mt-2 text-xs leading-6 text-gray-500">
            BIOSAGE is intended for research and informational purposes only.
            It is not medical advice and should not be used for diagnosis,
            treatment decisions, or other clinical decisions. Biomedical
            evidence may be incomplete or uncertain and should be independently
            verified.
          </p>

        </div>

      </div>
    </main>
  );
}