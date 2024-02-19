"use server";
import { Eval } from "braintrust";
import { Battle, Humor, LevenshteinScorer } from "autoevals";
import { generateEmail } from "./emailGenerator";

 
export default async function runEval(name: string, message: object) {
  // console.log(name);
  // console.log(message);
  // console.log(content);
  // return;

  Eval("Phil Test", {
    data: () => {
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
          input: "Bob Dylan",
          expected: message,
        },
      ]; // Replace with your eval dataset
    },
    task: generateEmail,
    scores: [LevenshteinScorer, Humor, Battle],
  });

} 