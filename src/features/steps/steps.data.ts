export interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    id: "send-events",
    number: "1",
    title: "Send your events",
    description:
      "Drop in the snippet or point our SDK at your existing event stream. Historical data backfills automatically.",
  },
  {
    id: "model-once",
    number: "2",
    title: "Model it once",
    description:
      "Name your events and properties in a shared schema so everyone is reading the same numbers.",
  },
  {
    id: "answer-questions",
    number: "3",
    title: "Answer questions",
    description:
      "Build the view you need, share a link, and the whole team sees exactly what you see.",
  },
];
