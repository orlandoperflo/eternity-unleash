"use client";

import { motion } from "framer-motion";
import { agents, intakeSources, operatingMap, orchestrationStages, priorities, workflows } from "@/lib/intelligence";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const }
};

function SectionLabel({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-medium uppercase tracking-[0.34em] text-signal/[0.80]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-bone md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-fog md:text-lg">{copy}</p>
    </motion.div>
  );
}

function UploadCard() {
  return (
    <motion.div {...fadeUp} className="glass-panel rounded-[2rem] p-4 md:p-6">
      <div className="rounded-[1.5rem] border border-white/10 bg-night/70 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-fog">Secure intake</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">Upload the company brain</h3>
          </div>
          <div className="rounded-full border border-emerald-300/[0.20] bg-emerald-300/[0.10] px-3 py-1 text-xs text-emerald-200">Encrypted</div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {intakeSources.map((source) => (
            <div key={source.label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium text-bone">{source.label}</p>
                <span className="text-xs text-ember">{source.status}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-fog">{source.detail}</p>
            </div>
          ))}
        </div>

        <label className="mt-5 flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-white/[0.18] bg-white/[0.025] px-6 text-center transition hover:border-signal/[0.50] hover:bg-signal/[0.045]">
          <input className="sr-only" type="file" multiple />
          <span className="text-3xl">⌁</span>
          <span className="mt-3 text-sm font-medium text-bone">Drop transcripts, SOPs, PDFs, recordings, screenshots, exports</span>
          <span className="mt-2 text-xs text-fog">MVP accepts every operational artifact and simulates intelligence compilation.</span>
        </label>

        <textarea
          className="mt-5 min-h-32 w-full resize-none rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-bone outline-none placeholder:text-fog/60 focus:border-signal/[0.40]"
          placeholder="Describe the operational problem: where leads leak, where decisions stall, where knowledge disappears..."
          defaultValue="We sell implementation services to mid-market teams. Leads come from referrals and outbound, but follow-up is inconsistent. Onboarding depends on two senior people. Support issues repeat because fixes are not captured anywhere durable."
        />
      </div>
    </motion.div>
  );
}

function OrchestrationScreen() {
  return (
    <motion.div {...fadeUp} className="glass-panel relative overflow-hidden rounded-[2rem] p-6 md:p-8">
      <div className="absolute inset-0 orbit-grid opacity-60" />
      <div className="relative z-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-signal/[0.80]">Eternity Core</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">Orchestration, not chat.</h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-fog">The system reads raw company context, identifies how work actually moves, then compiles a deployable operating architecture with agents, workflows, memory, and executive visibility.</p>
          <div className="mt-8 rounded-2xl border border-white/10 bg-night/70 p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-fog">Analysis state</p>
            <div className="mt-4 h-2 rounded-full bg-white/10">
              <motion.div className="h-full rounded-full bg-gradient-to-r from-signal to-ember" initial={{ width: "12%" }} whileInView={{ width: "86%" }} transition={{ duration: 1.4, ease: "easeOut" }} viewport={{ once: true }} />
            </div>
            <p className="mt-3 text-sm text-bone">Operational model compiled · 86%</p>
          </div>
        </div>
        <div className="space-y-3">
          {orchestrationStages.map((stage, index) => (
            <motion.div
              key={stage}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="flex size-8 items-center justify-center rounded-full bg-signal/[0.10] text-xs text-signal">0{index + 1}</span>
              <span className="text-sm text-bone">{stage}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ArchitectureDashboard() {
  return (
    <section id="architecture" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionLabel eyebrow="Generated architecture" title="A calm command surface for company execution." copy="The MVP presents Eternity's outputs as operational architecture: maps, agents, workflows, priorities, and a deployment-ready sequence." />
      <div className="mt-14 grid gap-5 lg:grid-cols-4">
        {operatingMap.map((item) => (
          <motion.div {...fadeUp} key={item.title} className="glass-panel rounded-[1.5rem] p-5">
            <p className="text-sm font-semibold text-bone">{item.title}</p>
            <p className="mt-4 text-sm leading-6 text-fog">{item.signal}</p>
            <div className="mt-5 rounded-2xl bg-signal/[0.10] p-3 text-xs leading-5 text-signal">{item.leverage}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AgentEcosystem() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionLabel eyebrow="Agent ecosystem" title="Specialized agents with purpose, permissions, and measurable outcomes." copy="Every agent is defined by operational role, memory access, escalation boundaries, and business KPI—not novelty." />
        <div className="grid gap-4 md:grid-cols-2">
          {agents.map((agent, index) => (
            <motion.div {...fadeUp} key={agent.name} className="glass-panel rounded-[1.5rem] p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-white/[0.08] px-3 py-1 text-xs text-fog">{agent.domain}</span>
                <span className="text-xs text-ember">A{index + 1}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-bone">{agent.name}</h3>
              <p className="mt-3 text-sm leading-6 text-fog">{agent.objective}</p>
              <dl className="mt-5 space-y-3 text-xs leading-5">
                <div><dt className="text-fog">Permissions</dt><dd className="text-bone">{agent.permissions}</dd></div>
                <div><dt className="text-fog">KPI</dt><dd className="text-bone">{agent.kpi}</dd></div>
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
      <SectionLabel eyebrow="Workflow compiler" title="From raw input to operating system." copy="Eternity's first-touch experience shows the path from unstructured company information to deployment-ready infrastructure." />
      <div className="mt-14 grid gap-3 lg:grid-cols-5">
        {workflows.map((workflow, index) => (
          <motion.div {...fadeUp} key={workflow.step} className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5">
            <span className="text-xs text-signal">0{index + 1}</span>
            <h3 className="mt-6 text-xl font-semibold text-bone">{workflow.step}</h3>
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
      <div className="glass-panel overflow-hidden rounded-[2rem]">
        <div className="grid lg:grid-cols-[1fr_0.9fr]">
          <div className="p-6 md:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-signal/[0.80]">Executive intelligence</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">Your company is operating with invisible coordination debt.</h2>
            <p className="mt-5 text-base leading-8 text-fog">Eternity identifies where knowledge is trapped in people, where customer momentum slows, and where leadership lacks a durable operating picture. The recommended MVP architecture starts with memory, then workflow automation, then specialized agents.</p>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {[["18h", "weekly reporting reclaimed"], ["32%", "faster lead response target"], ["5", "core workflows to stabilize"]].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-night/60 p-4">
                  <p className="text-3xl font-semibold text-bone">{value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-fog">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 bg-night/50 p-6 md:p-10 lg:border-l lg:border-t-0">
            <p className="text-sm font-semibold text-bone">Priority matrix</p>
            <div className="mt-5 space-y-3">
              {priorities.map(([category, system, impact, complexity]) => (
                <div key={system} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm text-bone">{system}</p>
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
    <main className="relative min-h-screen overflow-hidden bg-night bg-radial-fade text-bone">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(233,216,180,0.10),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(154,184,255,0.16),transparent_30%)]" />
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-full border border-white/[0.15] bg-white/[0.08] shadow-glass" />
          <span className="text-sm font-semibold tracking-[0.24em]">ETERNITY</span>
        </div>
        <a href="#intake" className="rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 text-sm text-bone transition hover:bg-white/[0.12]">Begin intake</a>
      </nav>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-14 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:pt-24">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}>
          <p className="text-xs font-medium uppercase tracking-[0.36em] text-signal/[0.80]">Operational intelligence orchestrator</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.07em] text-bone md:text-7xl lg:text-8xl">Upload your company brain.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-fog">Eternity transforms interviews, SOPs, transcripts, CRM exports, and operational pain into a complete AI systems architecture for how your company should execute.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#intake" className="rounded-full bg-bone px-6 py-3 text-center text-sm font-semibold text-night transition hover:bg-white">Compile operating system</a>
            <a href="#architecture" className="rounded-full border border-white/[0.14] px-6 py-3 text-center text-sm text-bone transition hover:bg-white/[0.08]">View generated output</a>
          </div>
        </motion.div>
        <UploadCard />
      </section>

      <section id="intake" className="relative z-10 mx-auto max-w-7xl px-5 py-10 md:px-8">
        <OrchestrationScreen />
      </section>

      <ArchitectureDashboard />
      <AgentEcosystem />
      <WorkflowVisualization />
      <ExecutiveSummary />
    </main>
  );
}
