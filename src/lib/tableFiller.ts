interface ActionItem {
  iadc: string;
  action: string;
  severity: "High" | "Medium" | "Low";
  status: string;
}

// IADC codes (International Association of Drilling Contractors)
const iadcCodes = [
  "WC-01",
  "WC-02",
  "WC-03",
  "WC-04",
  "WC-05",
  "DM-01",
  "DM-02",
  "DM-03",
  "DM-04",
  "DM-05",
  "DR-01",
  "DR-02",
  "DR-03",
  "DR-04",
  "DR-05",
  "PS-01",
  "PS-02",
  "PS-03",
  "PS-04",
  "PS-05",
  "EQ-01",
  "EQ-02",
  "EQ-03",
  "EQ-04",
  "EQ-05",
  "ST-01",
  "ST-02",
  "ST-03",
  "ST-04",
  "ST-05",
  "MH-01",
  "MH-02",
  "MH-03",
  "MH-04",
  "MH-05",
  "EN-01",
  "EN-02",
  "EN-03",
  "EN-04",
  "EN-05",
];

// Possible actions for different IADC code categories
const actionsByCategory: Record<string, string[]> = {
  WC: [
    // Well Control
    "Inspect BOP pressure testing records",
    "Verify proper function of kick detection systems",
    "Check integrity of well barriers",
    "Test emergency shutdown systems",
    "Review well control procedures with crew",
    "Inspect choke manifold and control systems",
    "Verify proper mud weight for current operations",
    "Check diverter system functionality",
    "Inspect gas detection systems",
    "Review well control drills and logs",
  ],
  DM: [
    // Drilling Machinery
    "Inspect drawworks brake system",
    "Test crown-o-matic safety device",
    "Verify top drive torque monitoring system",
    "Check rotary table locking mechanism",
    "Inspect mud pump pressure relief valves",
    "Test emergency shutdown of drilling equipment",
    "Verify proper function of pipe handling equipment",
    "Check hydraulic system for leaks",
    "Inspect drill line condition and spooling",
    "Test backup generator systems",
  ],
  DR: [
    // Drilling Operations
    "Review drilling program compliance",
    "Check casing running procedures",
    "Verify proper drill string inspection protocols",
    "Inspect cementing equipment and procedures",
    "Review tripping procedures",
    "Check directional drilling equipment",
    "Verify logging equipment calibration",
    "Inspect coring equipment and procedures",
    "Review stuck pipe prevention measures",
    "Check fishing tool inventory and condition",
  ],
  PS: [
    // Personal Safety
    "Inspect PPE availability and condition",
    "Verify H2S safety equipment and procedures",
    "Check fall protection systems",
    "Review confined space entry procedures",
    "Inspect fire detection and fighting equipment",
    "Check emergency escape routes and muster stations",
    "Verify first aid equipment and qualified personnel",
    "Inspect personnel transfer equipment",
    "Review heat stress prevention measures",
    "Check noise monitoring and protection",
  ],
  EQ: [
    // Equipment
    "Inspect critical lifting equipment",
    "Check pressure vessels certification",
    "Verify proper equipment lockout/tagout procedures",
    "Inspect electrical systems and grounding",
    "Review maintenance records for critical equipment",
    "Check calibration of critical gauges and meters",
    "Inspect critical piping systems",
    "Verify backup systems functionality",
    "Review critical spares inventory",
    "Check crane inspection and certification",
  ],
  ST: [
    // Structural
    "Inspect derrick structural integrity",
    "Check substructure for corrosion or damage",
    "Verify helideck structural certification",
    "Inspect living quarters structural integrity",
    "Review load path analysis for critical operations",
    "Check stability calculations",
    "Inspect marine riser tensioning systems",
    "Verify structural supports for critical equipment",
    "Review structural maintenance program",
    "Check structural fire protection systems",
  ],
  MH: [
    // Material Handling
    "Inspect crane operations and certification",
    "Check manual handling procedures",
    "Verify proper rigging equipment and procedures",
    "Inspect pipe deck layout and handling",
    "Review material transfer procedures",
    "Check forklift operations and certification",
    "Inspect container management system",
    "Verify proper storage of chemicals and materials",
    "Review lift planning procedures",
    "Check bulk material handling systems",
  ],
  EN: [
    // Environmental
    "Inspect spill prevention equipment",
    "Check waste management procedures",
    "Verify emissions monitoring systems",
    "Inspect drilling waste handling systems",
    "Review chemical management system",
    "Check ballast water management",
    "Inspect fuel transfer procedures",
    "Verify environmental monitoring program",
    "Review environmental emergency response plan",
    "Check noise and light pollution mitigation measures",
  ],
};

// Generate a random action based on IADC code
function getRandomActionForIadc(iadc: string): string {
  const category = iadc.split("-")[0];
  const actions = actionsByCategory[category] || actionsByCategory.EQ;
  return actions[Math.floor(Math.random() * actions.length)];
}

// Generate a random severity with weighted distribution
function getRandomSeverity(): "High" | "Medium" | "Low" {
  const rand = Math.random();
  if (rand < 0.2) return "High";
  if (rand < 0.5) return "Medium";
  return "Low";
}

// Generate random status with some logic based on severity
function getRandomStatus(severity: string): string {
  const rand = Math.random();

  if (severity === "High") {
    if (rand < 0.4) return "Open";
    if (rand < 0.7) return "In Progress";
    if (rand < 0.85) return "Completed";
    return "Verified";
  } else if (severity === "Medium") {
    if (rand < 0.2) return "Open";
    if (rand < 0.4) return "In Progress";
    if (rand < 0.6) return "Scheduled";
    if (rand < 0.8) return "Completed";
    return "Deferred";
  } else {
    if (rand < 0.1) return "Open";
    if (rand < 0.3) return "Scheduled";
    if (rand < 0.5) return "Deferred";
    if (rand < 0.8) return "Completed";
    return "Verified";
  }
}

// Generate a single action item
function generateActionItem(): ActionItem {
  const iadc = iadcCodes[Math.floor(Math.random() * iadcCodes.length)];
  const action = getRandomActionForIadc(iadc);
  const severity = getRandomSeverity();
  const status = getRandomStatus(severity);

  return {
    iadc,
    action,
    severity,
    status,
  };
}

// Generate multiple action items
export function generateActionItems(count: number): ActionItem[] {
  const items: ActionItem[] = [];
  for (let i = 0; i < count; i++) {
    items.push(generateActionItem());
  }
  return items;
}

// Example: Generate 100 random action items
const actionItems = generateActionItems(100);
console.log(JSON.stringify(actionItems, null, 2));

// Export the data
export default actionItems;
