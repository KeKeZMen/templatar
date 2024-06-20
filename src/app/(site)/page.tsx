import { TemplateCard } from "@entities/template";
import { CreateTemplateButton } from "@features/template/CreateTemplateButton";
import { Box, Container } from "@mui/material";
import { db } from "@shared";

export default async function Home() {
  const templates = await db.template.findMany();

  return (
    <Container maxWidth="lg">
      <Box display="flex" gap={18}>
        {templates.map((template) => (
          <TemplateCard name={template.name} />
        ))}
        <CreateTemplateButton />
      </Box>
    </Container>
  );
}
