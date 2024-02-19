import { Eval, wrapOpenAI } from "braintrust";
import { LevenshteinScorer } from "autoevals";
import { OpenAI } from "openai";

const openai = wrapOpenAI(new OpenAI());

Eval("Say Hi Bot", {
  data: () => [
    {
      input: "Philip",
      expected: "Hi Philip",
    },
  ],
  task: async (input) => {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Answer the following question. Specify how confident you are (or not)",
        },
        { role: "user", content: "Question: " + input },
      ],
    });
   return "Hi " + response.choices[0].message.content || "Unknown";
  },
  scores: [LevenshteinScorer],
});