import { Eval } from "braintrust";
import { LevenshteinScorer } from "autoevals";

export default function runEval() {
  // console.log("Running Eval...");

  Eval("Say Hi Bot", {
    data: () => {
      return [
        {
          input: "Foo",
          expected: "Hi Foo",
        },
        {
          input: "Bar",
          expected: "Hello Bar",
        },
      ]; // Replace with your eval dataset
    },
    task: (input) => {
      return "Hi " + input; // Replace with your LLM call
    },
    scores: [LevenshteinScorer],
  });

} 