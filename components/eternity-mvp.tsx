"use client";

import { motion } from "framer-motion";
import { agents, intakeSources, operatingMap, orchestrationStages, priorities, workflows } from "@/lib/intelligence";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-96px" },
  transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] as const }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } }
};

const stageVariant = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }
};

const metrics = [
  ["86%", "operating model compiled"],
  ["18h", "reporting reclaimed weekly"],
  ["5", "workflows ready to stabilize"]
];

function SectionLabel({ eyebrow, title, copy, align = "center" }: { eyebrow: string; title: string; copy: string; align?: "center" | "left" }) {
  return (
    <motion.div {...fadeUp} className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-signal/80">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.055em] text-bone md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-fog md:text-lg">{copy}</p>
    </motion.div>
  );
}

function StatusPill({ children }: { children: string }) {
  return <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-fog">{children}</span>;
}

function UploadCard() {
  return (
    <motion.div initial={{ opacity: 0, y: 28, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] as const }} className="executive-card relative overflow-hidden rounded-[2rem] p-4 shadow-orbit">
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="rounded-[1.55rem] border border-white/[0.08] bg-[#090B10]/90 p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-signal/80">Secure intake</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-bone">Compile the company brain</h3>
            <p className="mt-2 max-w-sm text-sm leading-6 text-fog">Drop messy operating context. Eternity converts it into memory, workflows, agents, and deployment plans.</p>
          </div>
          <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-100">Encrypted</div>
        </div>

        <div className="mt-6 rounded-[1.3rem] border border-dashed border-white/15 bg-white/[0.035] p-5 text-center transition hover:border-signal/40 hover:bg-signal/[0.045]">
          <div className="mx-auto flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-xl text-ember">⌁</div>
          <p className="mt-4 text-sm font-semibold text-bone">Transcripts · SOPs · PDFs · Recordings · CRM exports</p>
          <p className="mt-2 text-xs leading-5 text-fog">One calm intake layer for every operational artifact.</p>
          <input className="sr-only" type="file" multiple aria-label="Upload operational artifacts" />
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {intakeSources.map((source) => (
            <div key={source.label} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-bone">{source.label}</p>
                <span className="text-[0.68rem] text-ember">{source.status}</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-fog">{source.detail}</p>
            </div>
          ))}
        </div>

        <textarea
          className="mt-5 min-h-28 w-full resize-none rounded-[1.2rem] border border-white/[0.08] bg-black/20 p-4 text-sm leading-6 text-bone outline-none ring-0 placeholder:text-fog/50 transition focus:border-signal/40"
          placeholder="Describe the operational problem..."
          defaultValue="Follow-up is inconsistent. Onboarding depends on senior people. Support fixes disappear after each escalation. Leadership needs one durable operating picture."
        />
      </div>
    </motion.div>
  );
}

function OrchestrationScreen() {
  return (
    <motion.section {...fadeUp} id="intake" className="mx-auto max-w-7xl px-5 py-8 md:px-8">
      <div className="executive-card relative overflow-hidden rounded-[2rem] p-6 md:p-8">
        <div className="absolute inset-0 orbit-grid opacity-45" />
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-signal/10 blur-3xl" />
        <div className="relative z-10 grid gap-9 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <StatusPill>Eternity Core</StatusPill>
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-bone md:text-5xl">Orchestration, not chat.</h3>
            <p className="mt-5 max-w-md text-sm leading-7 text-fog">The system reads raw context, identifies how work actually moves, and compiles a deployable operating architecture with memory, agents, workflows, and executive visibility.</p>
            <div className="mt-8 rounded-[1.4rem] border border-white/[0.08] bg-night/70 p-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.24em] text-fog">Analysis state</p>
                <p className="text-sm font-semibold text-bone">86%</p>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div className="h-full rounded-full bg-gradient-to-r from-signal via-white to-ember" initial={{ width: "12%" }} whileInView={{ width: "86%" }} transition={{ duration: 1.35, ease: "easeOut" }} viewport={{ once: true }} />
              </div>
              <p className="mt-3 text-sm text-fog">Operational model compiled into deployable modules.</p>
            </div>
          </div>
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid gap-3 md:grid-cols-2">
            {orchestrationStages.map((stage, index) => (
              <motion.div key={stage} variants={stageVariant} className="rounded-[1.35rem] border border-white/[0.08] bg-white/[0.045] p-4 shadow-glass">
                <span className="flex size-8 items-center justify-center rounded-full bg-signal/10 text-xs font-semibold text-signal">0{index + 1}</span>
                <p className="mt-5 text-sm font-medium text-bone">{stage}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function ArchitectureDashboard() {
  return (
    <section id="architecture" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionLabel eyebrow="Generated architecture" title="A command surface that feels calm, not crowded." copy="Eternity presents the output as a readable operating architecture: where work breaks, what system should exist, and which deployment sequence creates leverage first." />
      <div className="mt-14 grid gap-4 lg:grid-cols-4">
        {operatingMap.map((item) => (
          <motion.div {...fadeUp} key={item.title} className="executive-card rounded-[1.6rem] p-5">
            <div className="h-1 w-10 rounded-full bg-gradient-to-r from-signal to-ember" />
            <p className="mt-6 text-sm font-semibold text-bone">{item.title}</p>
            <p className="mt-4 min-h-12 text-sm leading-6 text-fog">{item.signal}</p>
            <div className="mt-5 rounded-2xl border border-signal/10 bg-signal/[0.08] p-3 text-xs leading-5 text-signal">{item.leverage}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AgentEcosystem() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <SectionLabel align="left" eyebrow="Agent ecosystem" title="Purpose-built agents with boundaries and outcomes." copy="Every agent is defined by operational role, memory access, escalation limits, and business KPI—not novelty." />
        <div className="grid gap-4 md:grid-cols-2">
          {agents.map((agent, index) => (
            <motion.div {...fadeUp} key={agent.name} className="executive-card rounded-[1.6rem] p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/[0.08] bg-white/[0.06] px-3 py-1 text-xs text-fog">{agent.domain}</span>
                <span className="text-xs font-semibold text-ember">A{index + 1}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.035em] text-bone">{agent.name}</h3>
              <p className="mt-3 text-sm leading-6 text-fog">{agent.objective}</p>
              <dl className="mt-5 space-y-3 border-t border-white/[0.08] pt-4 text-xs leading-5">
                <div><dt className="text-fog">Permissions</dt><dd className="mt-1 text-bone">{agent.permissions}</dd></div>
                <div><dt className="text-fog">KPI</dt><dd className="mt-1 text-bone">{agent.kpi}</dd></div>
              </dl>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowVisualization() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionLabel eyebrow="Workflow compiler" title="From raw company context to a deployable operating system." copy="The first-touch experience makes the transformation visible without turning the product into an engineering dashboard." />
      <div className="mt-14 grid gap-3 lg:grid-cols-5">
        {workflows.map((workflow, index) => (
          <motion.div {...fadeUp} key={workflow.step} className="relative rounded-[1.5rem] border border-white/[0.08] bg-white/[0.035] p-5">
            <span className="text-xs font-semibold text-signal">0{index + 1}</span>
            <h3 className="mt-6 text-xl font-semibold tracking-[-0.035em] text-bone">{workflow.step}</h3>
            <p className="mt-3 text-sm leading-6 text-fog">{workflow.description}</p>
            {index < workflows.length - 1 && <div className="absolute -right-2 top-1/2 hidden size-4 rotate-45 border-r border-t border-white/20 lg:block" />}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ExecutiveSummary() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-28 md:px-8">
      <div className="executive-card overflow-hidden rounded-[2rem]">
        <div className="grid lg:grid-cols-[1fr_0.9fr]">
          <div className="p-6 md:p-10">
            <StatusPill>Executive intelligence</StatusPill>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-bone md:text-5xl">Your company is operating with invisible coordination debt.</h2>
            <p className="mt-5 text-base leading-8 text-fog">Eternity identifies where knowledge is trapped in people, where customer momentum slows, and where leadership lacks a durable operating picture. The recommended architecture starts with memory, then workflow automation, then specialized agents.</p>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {metrics.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/[0.08] bg-night/60 p-4">
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-bone">{value}</p>
                  <p className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-fog">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-white/[0.08] bg-black/15 p-6 md:p-10 lg:border-l lg:border-t-0">
            <p className="text-sm font-semibold text-bone">Priority matrix</p>
            <div className="mt-5 space-y-3">
              {priorities.map(([category, system, impact, complexity]) => (
                <div key={system} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-bone">{system}</p>
                    <span className="text-xs text-ember">{category}</span>
                  </div>
                  <p className="mt-2 text-xs text-fog">Impact: {impact} · Complexity: {complexity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function EternityMvp() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-night text-bone">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(233,216,180,0.14),transparent_30%),radial-gradient(circle_at_78%_0%,rgba(154,184,255,0.18),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
        <div className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-full border border-white/[0.14] bg-white/[0.07] shadow-glass">
            <div className="size-2 rounded-full bg-ember" />
          </div>
          <span className="text-sm font-semibold tracking-[0.24em] text-bone">ETERNITY</span>
        </div>
        <a href="#intake" className="rounded-full border border-white/[0.12] bg-white/[0.07] px-4 py-2 text-sm text-bone transition hover:border-white/20 hover:bg-white/[0.11]">Begin intake</a>
      </nav>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:pt-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] as const }}>
          <StatusPill>Operational intelligence orchestrator</StatusPill>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.075em] text-bone md:text-7xl lg:text-8xl">Upload your company brain.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-fog md:text-xl md:leading-9">Eternity transforms interviews, SOPs, transcripts, CRM exports, and operational pain into an elegant AI systems architecture for how your company should execute.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#intake" className="rounded-full bg-bone px-6 py-3 text-center text-sm font-semibold text-night transition hover:bg-white">Compile operating system</a>
            <a href="#architecture" className="rounded-full border border-white/[0.14] px-6 py-3 text-center text-sm text-bone transition hover:border-white/25 hover:bg-white/[0.08]">View generated output</a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {metrics.map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
                <p className="text-2xl font-semibold tracking-[-0.04em] text-bone">{value}</p>
                <p className="mt-2 text-[0.64rem] uppercase tracking-[0.16em] text-fog">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <UploadCard />
      </section>

      <OrchestrationScreen />
      <ArchitectureDashboard />
      <AgentEcosystem />
      <WorkflowVisualization />
      <ExecutiveSummary />
    </main>
  );
}
