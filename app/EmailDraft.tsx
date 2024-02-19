import { Button, Box, Container, Flex, TextFieldInput } from "@radix-ui/themes";

export default function EmailDraft(props) {
  return (
    <Box
      style={{
        background: "var(--gray-a2)",
        borderRadius: "var(--radius-3)",
      }}
      className="p-6 mb-5"
    >
      <Container grow="1">
        <div className="font-mono">
          {/* Access each item's properties */}
          <h2 className="font-bold mb-2">{props.subject}</h2>
          <p>{props.body}</p>
        </div>
      </Container>
    </Box>
  );
}
