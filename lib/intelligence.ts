export const workspaceStats = [
  { label: "Client intelligence spaces", value: "14", detail: "3 in orchestration" },
  { label: "Artifacts indexed", value: "2.8k", detail: "Transcripts, SOPs, exports" },
  { label: "Systems generated", value: "41", detail: "Agents, workflows, repositories" },
  { label: "Deployment readiness", value: "92%", detail: "Across active builds" }
];

export const recentDeployments = [
  { client: "Northstar Logistics", system: "Dispatch memory + escalation agents", date: "Today", status: "Repository staged" },
  { client: "Cobalt Health", system: "Patient intake workflow architecture", date: "Yesterday", status: "Architecture exported" },
  { client: "Meridian Advisory", system: "Revenue intelligence operating layer", date: "May 8", status: "Production handoff" }
];

export const clientBrief = {
  name: "Asteria Operations Group",
  industry: "B2B implementation services",
  stage: "Series A / 68 employees",
  objective: "Compile a durable operating system for revenue follow-up, onboarding execution, support memory, and executive visibility.",
  bottleneck: "Institutional knowledge lives in senior operators. CRM motion is inconsistent after qualification. Customer issues repeat because resolutions are not captured as reusable memory."
};

export const intakeSources = [
  { label: "Founder interviews", type: "Transcript", detail: "Strategy, constraints, hidden decision paths", status: "Uploaded", count: "4 files" },
  { label: "SOP library", type: "PDF / Markdown", detail: "Current execution patterns and owner cadence", status: "Mapped", count: "27 docs" },
  { label: "CRM export", type: "CSV", detail: "Pipeline movement, lead leakage, stage velocity", status: "Parsed", count: "8.2k rows" },
  { label: "Support screenshots", type: "Images", detail: "Recurring customer friction and escalation loops", status: "Indexed", count: "36 images" },
  { label: "Loom walkthroughs", type: "Links", detail: "Operator screen recordings and process context", status: "Queued", count: "6 links" },
  { label: "Operational notes", type: "Freeform", detail: "Bottlenecks, exceptions, and undocumented routines", status: "Normalized", count: "11 notes" }
];

export const intelligenceViews = [
  { title: "Company Overview", signal: "Services team sells through expertise, then delivers through manual orchestration.", output: "Define operating domains, information sources, owners, and client lifecycle moments." },
  { title: "Department Mapping", signal: "Sales, onboarding, success, and support share context through meetings instead of systems.", output: "Create cross-functional topology with handoff rules and memory permissions." },
  { title: "Bottleneck Analysis", signal: "Qualified opportunities lose momentum when ownership changes or follow-up depends on individual discipline.", output: "Install response SLAs, lead revival queues, and agent-assisted next actions." },
  { title: "Operational Topology", signal: "Work travels through Slack, CRM notes, docs, and verbal decisions with no durable graph.", output: "Model triggers, dependencies, decision checkpoints, and escalation paths." },
  { title: "Execution Gaps", signal: "Customer onboarding risk appears late because issue signals are fragmented across tools.", output: "Generate risk scoring, kickoff memory, and implementation milestone automation." },
  { title: "Intelligence Opportunities", signal: "Repeated questions and support fixes can become reusable company memory.", output: "Deploy memory retrieval, SOP freshness loops, and executive briefs." }
];

export const orchestrationStages = [
  { stage: "Ingest", description: "Accept every company artifact and convert it into normalized operational evidence.", progress: 100 },
  { stage: "Decompose", description: "Extract departments, owners, workflows, customer moments, systems, and constraints.", progress: 96 },
  { stage: "Reason", description: "Detect leakage, decision latency, repeated cognition, and fragile human dependencies.", progress: 88 },
  { stage: "Architect", description: "Design agent responsibilities, memory boundaries, workflow triggers, and escalation systems.", progress: 74 },
  { stage: "Generate", description: "Compile prompts, configs, starter code, deployment plans, and documentation.", progress: 62 },
  { stage: "Export", description: "Package architecture and repository structure for client implementation.", progress: 41 }
];

export const agents = [
  {
    name: "Revenue Intelligence Agent",
    domain: "Sales",
    responsibility: "Monitor CRM movement, identify stale qualified leads, draft next actions, and surface recovery opportunities.",
    memory: "CRM history, call transcripts, objections, proposal notes",
    escalation: "Alerts revenue lead when response SLA exceeds 18 hours",
    pipeline: "Lead event → qualification context → next-best action → owner approval → CRM update"
  },
  {
    name: "Onboarding Orchestrator",
    domain: "Success",
    responsibility: "Translate signed deals into implementation plans, milestones, kickoff briefs, and blocker detection.",
    memory: "Implementation SOPs, account requirements, project artifacts",
    escalation: "Raises risk when activation dependency has no owner for 48 hours",
    pipeline: "Closed won → kickoff brief → milestone graph → blocker scan → weekly client update"
  },
  {
    name: "Operations Memory Agent",
    domain: "Company Brain",
    responsibility: "Capture reusable decisions, recurring fixes, process exceptions, and SOP updates from daily execution.",
    memory: "Knowledge base, Slack decisions, meeting notes, support resolutions",
    escalation: "Requests human review when conflicting process guidance is detected",
    pipeline: "Conversation artifact → entity extraction → memory candidate → reviewer approval → durable index"
  },
  {
    name: "Executive Briefing Agent",
    domain: "Leadership",
    responsibility: "Synthesize operational movement into concise executive narratives, risks, and decision prompts.",
    memory: "Read-only metrics, department summaries, risk register, prior decisions",
    escalation: "Flags blocked initiatives and emerging systemic constraints before leadership meetings",
    pipeline: "Metric pull → narrative synthesis → risk ranking → decision agenda → archive"
  }
];

export const workflows = [
  { trigger: "Qualified lead inactive", system: "Revenue recovery flow", automation: "Draft follow-up, summarize context, assign owner", decision: "Approve outreach or recycle", dependency: "CRM + Email" },
  { trigger: "Deal marked closed-won", system: "Onboarding launch flow", automation: "Generate kickoff brief, task graph, risk checkpoints", decision: "Confirm scope and implementation owner", dependency: "CRM + Project workspace" },
  { trigger: "Repeated support theme", system: "Resolution memory flow", automation: "Cluster issue, propose SOP update, attach source examples", decision: "Publish or request review", dependency: "Support inbox + Knowledge base" },
  { trigger: "Weekly operating cadence", system: "Executive intelligence flow", automation: "Compile wins, risks, blocked work, next decisions", decision: "Prioritize intervention", dependency: "CRM + PM + Support" }
];

export const repositoryTree = [
  { path: "/agents", description: "Specialized agent definitions, tools, permissions, evaluation criteria", files: ["revenue-intelligence.agent.ts", "onboarding-orchestrator.agent.ts", "executive-briefing.agent.ts"] },
  { path: "/memory", description: "Vector schemas, retrieval policies, retention rules, knowledge graph seeds", files: ["schema.ts", "retrieval-policy.md", "memory-seeds.json"] },
  { path: "/workflows", description: "Event triggers, automation layers, approval gates, escalation paths", files: ["lead-recovery.workflow.ts", "onboarding-launch.workflow.ts", "support-memory.workflow.ts"] },
  { path: "/integrations", description: "CRM, email, project workspace, docs, and support connectors", files: ["hubspot.ts", "gmail.ts", "linear.ts", "intercom.ts"] },
  { path: "/frontend", description: "Client-facing operational command surface and executive views", files: ["app/briefing/page.tsx", "components/risk-register.tsx"] },
  { path: "/backend", description: "API routes, orchestration services, queues, audit logging", files: ["orchestrator.ts", "jobs/generate-brief.ts", "audit-log.ts"] },
  { path: "/deployment", description: "Vercel, environment, observability, queue, and database plans", files: ["vercel.json", "docker-compose.yml", "runbook.md"] },
  { path: "/prompts", description: "System prompts, review prompts, evaluation prompts, handoff templates", files: ["revenue-system.md", "memory-review.md", "executive-brief.md"] },
  { path: "/documentation", description: "Architecture export, implementation plan, operating model, admin guide", files: ["architecture.md", "implementation-plan.md", "operator-guide.md"] }
];

export const executiveInsights = [
  { title: "Lead leakage detected", severity: "High", insight: "31% of qualified opportunities have no recorded next action within 24 hours.", recommendation: "Deploy revenue recovery agent with SLA monitoring and owner escalation." },
  { title: "Onboarding depends on two senior operators", severity: "High", insight: "Kickoff quality changes by owner because requirements are not converted into a reusable implementation graph.", recommendation: "Generate onboarding launch workflow with milestone memory and risk checkpoints." },
  { title: "Support fixes do not become company memory", severity: "Medium", insight: "Recurring issues appear across accounts but resolutions remain buried in threads and tickets.", recommendation: "Install resolution memory flow with approval-based SOP publishing." },
  { title: "Executive visibility is manually assembled", severity: "Medium", insight: "Leadership meetings depend on status collection rather than an always-current operating picture.", recommendation: "Create weekly executive briefing agent connected to core systems." }
];

export const exportArtifacts = ["Architecture PDF", "Repository ZIP", "Prompt Pack", "Deployment Runbook", "Client Handoff Brief"];
