"use server";
import { Eval } from "braintrust";
import { Battle, Humor, LevenshteinScorer } from "autoevals";
import { generateEmail } from "./emailGenerator";

 
export default async function runEval(name: string, message: object) {
  Eval("Phil Test", {
    data: () => {
      // return;
      return [
        {
          input: name,
          expected: message,
        },
        {
          input: "Taylor Swift",
          expected: message,
        },
        {
          input: "Jimmy Hendrix",
          expected: message,
        },
      ];
    },
    task: generateEmail,
    scores: [LevenshteinScorer, Humor, Battle],
  });

} 