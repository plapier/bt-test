import { wrapOpenAI } from "braintrust";
import { OpenAI } from "openai";
 
export const client = wrapOpenAI(
  new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || "",
    dangerouslyAllowBrowser: true // Oops, don't hate me
  })
);