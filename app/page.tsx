"use client";
import { Button, Box, Container, Flex, TextFieldInput } from "@radix-ui/themes";
import { generateEmail } from "./emailGenerator";
import { useState } from "react";
import EmailDraft from "./EmailDraft";
import runEval from "./email.eval";

export default function Home() {
  const [emails, setEmails] = useState({});
  const [recipientName, setRecipientName] = useState("Carl Sagan");
  const [buttonState, setButtonState] = useState(false);

  const captureInput = (event: any) => {
    setRecipientName(event.target.value);
    if (event.key == "Enter") {
      fetchData();
    }
  };
  const fetchData = async () => {
    setButtonState(true);
    const generatedEmail = await generateEmail(recipientName);
    setEmails(generatedEmail);

    console.log("Recipient Name: ", recipientName);
    console.log("Generated Email:", generatedEmail);

    await runEval(recipientName, generatedEmail);
    setButtonState(false);
    return;
  };

  return (
    <main className="flex p-24 min-h-screen font-sans justify-center">
      <div className="" style={{ width: 600 }}>
        <header>
          <h1 className="font-bold text-xl mb-3">Email Draft Generator</h1>
        </header>
        <section className="flex flex-col">
          <div className="flex gap-3 justify-items-start">
            <div className="flex-1">
              <TextFieldInput
                size="3"
                grow="1"
                placeholder="Enter a Musician or Celebrity"
                onKeyUp={(handleChange) => captureInput(handleChange)}
              />
            </div>
            <Button size="3" disabled={buttonState} onClick={() => fetchData()}>
              Generate
            </Button>
          </div>
          <div className="flex flex-col justify-items-stretch mt-10">
            {Object.keys(emails).map((item) => (
              <EmailDraft
                key={item}
                subject={emails[item].subject}
                body={emails[item].body}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
