import { ChatCompletionMessageParam } from "openai/resources";
import { client } from "./openai";
 
function emailGeneratorMessages(name: string): ChatCompletionMessageParam[] {
  return [
    {
      role: "system",
      content: `Draft 3 short and unique intro emails to ${name} using 200 characters or less. The recipient is probably a celebrity. Return these emails as a JSON Object with the structure { "email" = ["subject":"string", "body":"body"]}.`,
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
    messages,
    seed: 123,
  });

  const content = response.choices[0].message.content
  if (content == "") { return content }

  return JSON.parse(content)
    // return response.choices[0].message.content || "";
}