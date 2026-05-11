export const intakeSources = [
  { label: "Founder interviews", detail: "Strategy, constraints, decision paths", status: "Ready" },
  { label: "SOP library", detail: "Current execution patterns", status: "Mapped" },
  { label: "CRM export", detail: "Pipeline movement and leakage", status: "Parsed" },
  { label: "Support transcripts", detail: "Customer friction and escalation loops", status: "Indexed" }
];

export const orchestrationStages = [
  "Ingesting company memory",
  "Mapping operating model",
  "Detecting coordination drag",
  "Designing agent ecosystem",
  "Compiling workflow architecture",
  "Preparing deployment surface"
];

export const operatingMap = [
  { title: "Revenue Engine", signal: "Lead response drops after qualification", leverage: "Install autonomous sales triage and follow-up memory." },
  { title: "Customer Onboarding", signal: "Handoffs depend on tribal knowledge", leverage: "Codify lifecycle checkpoints and owner visibility." },
  { title: "Support Operations", signal: "Escalations repeat without durable learning", leverage: "Create searchable issue memory and resolution playbooks." },
  { title: "Executive Rhythm", signal: "Status reporting is assembled manually", leverage: "Generate weekly operating brief from source systems." }
];

export const agents = [
  {
    name: "Revenue Intelligence Agent",
    domain: "Sales",
    objective: "Convert raw CRM activity into prioritized action paths.",
    permissions: "CRM read/write, email drafting, meeting notes",
    kpi: "Response SLA, stage velocity, revived opportunities"
  },
  {
    name: "Onboarding Orchestrator",
    domain: "Success",
    objective: "Coordinate kickoff, requirements, education, and risk detection.",
    permissions: "Project workspace, knowledge base, customer timeline",
    kpi: "Time-to-value, open blockers, activation quality"
  },
  {
    name: "Operations Memory Agent",
    domain: "Company Brain",
    objective: "Preserve reusable decisions, SOP changes, and recurring exceptions.",
    permissions: "Document index, transcript store, workflow history",
    kpi: "Search success, repeated-question reduction, SOP freshness"
  },
  {
    name: "Executive Briefing Agent",
    domain: "Leadership",
    objective: "Synthesize operational movement into calm weekly decisions.",
    permissions: "Read-only metrics, department summaries, risk register",
    kpi: "Decision latency, risk visibility, meeting compression"
  }
];

export const workflows = [
  { step: "Capture", description: "Accept interviews, exports, notes, transcripts, and SOPs into a single intake layer." },
  { step: "Normalize", description: "Extract entities, departments, owners, cadence, dependencies, and customer moments." },
  { step: "Reason", description: "Detect bottlenecks, memory gaps, repetitive cognition, and revenue leakage." },
  { step: "Generate", description: "Produce agents, workflows, permissions, escalation logic, and deployment architecture." },
  { step: "Operate", description: "Surface executive summaries, priority matrix, and phased implementation roadmap." }
];

export const priorities = [
  ["Immediate leverage", "CRM follow-up memory", "High", "Low"],
  ["Foundational", "Company knowledge graph", "High", "Medium"],
  ["Strategic", "Cross-functional orchestration layer", "Very high", "High"],
  ["Optimization", "Autonomous executive reporting", "Medium", "Low"]
];
