import { ChatCompletionMessageParam } from "openai/resources";
import { client } from "./openai";
import { Content } from "next/font/google";
 
function emailGeneratorMessages(name: string): ChatCompletionMessageParam[] {
  return [
    {
      role: "system",
      content: `Draft a short and unique intro emaila to recipient, ${name}, using 300 characters or less. Please start the email addressing the person's first name. Try to include an emoji or two in the response. Return these emails as a JSON Object with the structure { " ["subject":"string", "body":"body"]}. You must specify how confident you are in the recipient being a celebrity.`,
    },
    {
      role: "user",
      content: "Email Draft: " + name,
    },
  ];
}
 
export async function generateEmail(name: string) {
    console.log("running generator...");
    const messages = emailGeneratorMessages(name);

  const response = await client.chat.completions.create({
    model: "gpt-3.5-turbo",
    response_format: { type: "json_object" },
    n: 3,
    messages,
    seed: 123,
  });

  const emails = []
  Object.keys(response.choices).map((item) => (
    emails.push(JSON.parse(response.choices[item].message.content))
  ));
  const responseContent = emails || ""

  return responseContent;
}