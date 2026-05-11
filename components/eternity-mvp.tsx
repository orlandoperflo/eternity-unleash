"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  agents,
  clientBrief,
  executiveInsights,
  exportArtifacts,
  intakeSources,
  intelligenceViews,
  orchestrationStages,
  recentDeployments,
  repositoryTree,
  workflows,
  workspaceStats
} from "@/lib/intelligence";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
  transition: { duration: 0.72, ease }
};

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-medium uppercase tracking-[0.34em] text-signal/80">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-bone md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-fog md:text-lg">{copy}</p>
    </motion.div>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs text-fog">{children}</span>;
}

function WorkspaceShell() {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease }} className="glass-panel overflow-hidden rounded-[2rem]">
      <div className="border-b border-white/10 px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-fog">Active client</p>
            <h3 className="mt-1 text-xl font-semibold tracking-[-0.03em] text-bone">{clientBrief.name}</h3>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.8)]" />
            <span className="text-xs text-emerald-200">Orchestration live</span>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
        <div className="space-y-4 border-b border-white/10 p-5 lg:border-b-0 lg:border-r">
          <div className="rounded-3xl border border-white/10 bg-night/70 p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-signal/80">Create client</p>
            <div className="mt-5 space-y-3">
              {["Company identity", "Operating context", "Source systems", "Bottleneck brief"].map((step, index) => (
                <div key={step} className="flex items-center gap-3 rounded-2xl bg-white/[0.035] p-3">
                  <span className="flex size-7 items-center justify-center rounded-full bg-bone text-xs font-semibold text-night">{index + 1}</span>
                  <span className="text-sm text-bone">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
            <p className="text-sm font-medium text-bone">Recent deployments</p>
            <div className="mt-4 space-y-3">
              {recentDeployments.map((deployment) => (
                <div key={deployment.client} className="rounded-2xl border border-white/10 bg-night/50 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm text-bone">{deployment.client}</p>
                    <span className="text-[11px] text-ember">{deployment.date}</span>
                  </div>
                  <p className="mt-1 text-xs leading-5 text-fog">{deployment.system}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-signal/80">{deployment.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative min-h-[560px] overflow-hidden p-5">
          <div className="absolute inset-0 orbit-grid opacity-50" />
          <div className="relative z-10 grid gap-4 sm:grid-cols-2">
            {workspaceStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-night/[0.65] p-5 shadow-glass">
                <p className="text-4xl font-semibold tracking-[-0.05em] text-bone">{stat.value}</p>
                <p className="mt-2 text-sm text-bone">{stat.label}</p>
                <p className="mt-1 text-xs text-fog">{stat.detail}</p>
              </div>
            ))}
          </div>
          <div className="relative z-10 mt-4 rounded-3xl border border-white/10 bg-night/[0.75] p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-fog">Intelligence status</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-bone">Operational model compiling</h3>
              </div>
              <Pill>Deployment readiness 92%</Pill>
            </div>
            <div className="mt-7 space-y-4">
              {orchestrationStages.slice(0, 4).map((stage) => (
                <div key={stage.stage}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-bone">{stage.stage}</span>
                    <span className="text-fog">{stage.progress}%</span>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-white/10">
                    <motion.div className="h-full rounded-full bg-gradient-to-r from-signal to-ember" initial={{ width: 0 }} animate={{ width: `${stage.progress}%` }} transition={{ duration: 1.2, delay: 0.15 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function IntakeLayer() {
  return (
    <section id="intake" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHeader eyebrow="Client intelligence intake" title="A structured intake surface for messy company reality." copy="Operators can drag in documents, paste interviews, attach Loom links, describe bottlenecks, and convert scattered operational context into a single compilation layer." />
      <div className="mt-14 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div {...fadeUp} className="glass-panel rounded-[2rem] p-5 md:p-6">
          <label className="flex min-h-72 cursor-pointer flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-white/20 bg-white/[0.025] px-6 text-center transition hover:border-signal/60 hover:bg-signal/[0.05]">
            <input className="sr-only" type="file" multiple accept=".pdf,.md,.txt,.csv,.png,.jpg,.jpeg" />
            <span className="text-5xl text-bone">⌁</span>
            <span className="mt-4 text-lg font-medium text-bone">Drop transcripts, SOPs, PDFs, CRM exports, screenshots, markdown, and notes</span>
            <span className="mt-3 max-w-md text-sm leading-6 text-fog">This Vercel-ready prototype simulates ingestion and presents the operational intelligence compiler experience.</span>
          </label>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <input className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-bone outline-none placeholder:text-fog/60 focus:border-signal/50" placeholder="Client name" defaultValue={clientBrief.name} />
            <input className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-bone outline-none placeholder:text-fog/60 focus:border-signal/50" placeholder="Industry" defaultValue={clientBrief.industry} />
          </div>
          <textarea className="mt-3 min-h-36 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-bone outline-none placeholder:text-fog/60 focus:border-signal/50" defaultValue={clientBrief.bottleneck} />
          <div className="mt-4 flex flex-wrap gap-2">
            {exportArtifacts.map((artifact) => <Pill key={artifact}>{artifact}</Pill>)}
          </div>
        </motion.div>
        <div className="grid gap-3 sm:grid-cols-2">
          {intakeSources.map((source, index) => (
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: index * 0.04, ease }} key={source.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-bone">{source.label}</p>
                <span className="text-[11px] uppercase tracking-[0.18em] text-ember">{source.status}</span>
              </div>
              <p className="mt-3 text-xs text-signal/80">{source.type} · {source.count}</p>
              <p className="mt-2 text-sm leading-6 text-fog">{source.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntelligenceLayer() {
  return (
    <section id="intelligence" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHeader eyebrow="Company intelligence layer" title="The system understands the company structurally." copy="Every uploaded artifact becomes operational evidence: departments, execution gaps, topology, bottlenecks, opportunities, dependencies, and memory boundaries." />
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {intelligenceViews.map((view) => (
          <motion.div {...fadeUp} key={view.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5">
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-bone">{view.title}</h3>
            <p className="mt-4 text-sm leading-6 text-fog">{view.signal}</p>
            <div className="mt-5 rounded-2xl border border-signal/15 bg-signal/[0.045] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-signal/80">Generated output</p>
              <p className="mt-2 text-sm leading-6 text-bone">{view.output}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function OrchestrationEngine() {
  return (
    <section id="orchestration" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 md:p-8">
        <div className="absolute inset-0 orbit-grid opacity-60" />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div {...fadeUp}>
            <p className="text-xs uppercase tracking-[0.34em] text-signal/80">Orchestration engine</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] text-bone md:text-6xl">Analysis that feels alive, not decorative.</h2>
            <p className="mt-6 text-base leading-8 text-fog">The engine decomposes company inputs into workflows, agents, memory systems, and deployment topology. It is not a chatbot; it is a compiler for enterprise operating structure.</p>
            <button className="mt-8 rounded-full bg-bone px-6 py-3 text-sm font-semibold text-night transition hover:bg-white">Run orchestration analysis</button>
          </motion.div>
          <div className="space-y-3">
            {orchestrationStages.map((stage, index) => (
              <motion.div key={stage.stage} initial={{ opacity: 0, x: 26 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.07, ease }} className="rounded-3xl border border-white/10 bg-night/70 p-4">
                <div className="flex items-center gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.055] text-xs text-signal">0{index + 1}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-medium text-bone">{stage.stage}</p>
                      <span className="text-xs text-fog">{stage.progress}%</span>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-fog">{stage.description}</p>
                    <div className="mt-3 h-1.5 rounded-full bg-white/10">
                      <motion.div className="h-full rounded-full bg-gradient-to-r from-signal via-white to-ember" initial={{ width: "8%" }} whileInView={{ width: `${stage.progress}%` }} viewport={{ once: true }} transition={{ duration: 1.1, delay: index * 0.08 }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AgentEcosystem() {
  return (
    <section id="agents" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHeader eyebrow="Agent ecosystem visualizer" title="Specialized agents with clear responsibility, memory, and escalation boundaries." copy="The workspace turns company operations into a coherent agent topology: who watches what, what memory each agent can access, when it escalates, and how execution pipelines move." />
      <div className="mt-14 grid gap-4 lg:grid-cols-4">
        {agents.map((agent, index) => (
          <motion.div {...fadeUp} transition={{ duration: 0.65, delay: index * 0.05, ease }} key={agent.name} className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5">
            {index < agents.length - 1 && <div className="absolute -right-2 top-12 hidden h-px w-4 bg-white/20 lg:block" />}
            <p className="text-xs uppercase tracking-[0.25em] text-signal/80">{agent.domain}</p>
            <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-bone">{agent.name}</h3>
            <p className="mt-3 text-sm leading-6 text-fog">{agent.responsibility}</p>
            <dl className="mt-5 space-y-3 text-sm">
              <div><dt className="text-fog">Memory access</dt><dd className="mt-1 text-bone">{agent.memory}</dd></div>
              <div><dt className="text-fog">Escalation</dt><dd className="mt-1 text-bone">{agent.escalation}</dd></div>
              <div><dt className="text-fog">Pipeline</dt><dd className="mt-1 text-bone">{agent.pipeline}</dd></div>
            </dl>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function WorkflowArchitecture() {
  return (
    <section id="workflows" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHeader eyebrow="Workflow architecture" title="Triggers, decisions, automations, escalations, and dependencies in one calm map." copy="Operators can see how execution actually flows from business events to automation layers and human decision gates." />
      <div className="mt-14 space-y-4">
        {workflows.map((workflow, index) => (
          <motion.div {...fadeUp} key={workflow.system} className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 md:grid-cols-[0.9fr_1fr_1fr_0.8fr] md:items-center">
            <div>
              <span className="text-xs text-signal">0{index + 1}</span>
              <p className="mt-2 font-semibold text-bone">{workflow.system}</p>
              <p className="mt-1 text-sm text-fog">Trigger: {workflow.trigger}</p>
            </div>
            <p className="text-sm leading-6 text-bone">{workflow.automation}</p>
            <p className="text-sm leading-6 text-fog">Decision gate: {workflow.decision}</p>
            <Pill>{workflow.dependency}</Pill>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function RepositoryGenerator() {
  return (
    <section id="repository" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <motion.div {...fadeUp} className="sticky top-6 rounded-[2rem] border border-white/10 bg-bone p-6 text-night shadow-orbit">
          <p className="text-xs uppercase tracking-[0.34em] text-black/55">Repository generator</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] md:text-5xl">Generate client infrastructure.</h2>
          <p className="mt-5 text-sm leading-7 text-black/65">The most important surface: Eternity compiles a deployment-ready implementation repository with agents, memory, workflows, integrations, frontend, backend, deployment plans, prompts, and documentation.</p>
          <button className="mt-7 w-full rounded-full bg-night px-6 py-3 text-sm font-semibold text-bone transition hover:bg-black">Generate Client Infrastructure</button>
          <div className="mt-5 rounded-2xl border border-black/10 bg-black/[0.04] p-4 font-mono text-xs leading-6 text-black/70">
            <p>$ eternity compile --client asteria</p>
            <p>✓ architecture exported</p>
            <p>✓ prompts generated</p>
            <p>✓ repository scaffold ready</p>
          </div>
        </motion.div>
        <div className="space-y-3">
          {repositoryTree.map((folder, index) => (
            <motion.div key={folder.path} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.035, ease }} className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-mono text-lg text-bone">{folder.path}</h3>
                <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">Generated</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-fog">{folder.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {folder.files.map((file) => <Pill key={file}>{file}</Pill>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExecutiveLayer() {
  return (
    <section id="executive" className="mx-auto max-w-7xl px-5 pb-28 pt-24 md:px-8">
      <div className="glass-panel overflow-hidden rounded-[2rem]">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="p-6 md:p-10">
            <p className="text-xs uppercase tracking-[0.34em] text-signal/80">Executive intelligence layer</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] text-bone md:text-6xl">Elite operational consulting, generated from evidence.</h2>
            <p className="mt-6 text-base leading-8 text-fog">The output is a decision surface: inefficiency detection, lead leakage analysis, execution bottlenecks, workflow weaknesses, and optimization opportunities translated into implementation architecture.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["31% lead leakage", "18h reporting reclaimed", "4 agent systems"].map((metric) => (
                <div key={metric} className="rounded-2xl border border-white/10 bg-night/60 p-4 text-sm text-bone">{metric}</div>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 bg-night/50 p-6 md:p-10 lg:border-l lg:border-t-0">
            <div className="space-y-3">
              {executiveInsights.map((insight) => (
                <div key={insight.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium text-bone">{insight.title}</p>
                    <span className="text-xs text-ember">{insight.severity}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-fog">{insight.insight}</p>
                  <p className="mt-3 text-sm leading-6 text-bone">Recommendation: {insight.recommendation}</p>
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(233,216,180,0.11),transparent_28%),radial-gradient(circle_at_82%_4%,rgba(154,184,255,0.16),transparent_32%)]" />
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-full border border-white/[0.15] bg-white/[0.07] shadow-glass"><span className="size-2 rounded-full bg-bone" /></div>
          <span className="text-sm font-semibold tracking-[0.28em]">ETERNITY</span>
        </a>
        <div className="hidden items-center gap-5 text-sm text-fog md:flex">
          <a className="transition hover:text-bone" href="#intake">Intake</a>
          <a className="transition hover:text-bone" href="#orchestration">Orchestration</a>
          <a className="transition hover:text-bone" href="#repository">Repository</a>
        </div>
        <a href="#repository" className="rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 text-sm text-bone transition hover:bg-white/[0.12]">Generate infrastructure</a>
      </nav>

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-12 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:pt-24">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease }}>
          <p className="text-xs font-medium uppercase tracking-[0.36em] text-signal/80">Internal operator workspace</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.075em] text-bone md:text-7xl lg:text-8xl">Compile companies into operating systems.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-fog">Eternity operators ingest company intelligence, analyze organizational structure, generate agent ecosystems, design workflows, and scaffold deployment-ready client repositories.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#intake" className="rounded-full bg-bone px-6 py-3 text-center text-sm font-semibold text-night transition hover:bg-white">Create new client</a>
            <a href="#orchestration" className="rounded-full border border-white/[0.14] px-6 py-3 text-center text-sm text-bone transition hover:bg-white/[0.08]">Run orchestration</a>
          </div>
        </motion.div>
        <WorkspaceShell />
      </section>

      <IntakeLayer />
      <IntelligenceLayer />
      <OrchestrationEngine />
      <AgentEcosystem />
      <WorkflowArchitecture />
      <RepositoryGenerator />
      <ExecutiveLayer />
    </main>
  );
}
