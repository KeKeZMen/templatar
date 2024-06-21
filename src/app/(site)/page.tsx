import { TemplateCard } from "@entities/template";
import { CreateTemplateButton } from "@features/template/CreateTemplateButton";
import { Box } from "@mui/material";
import { db } from "@shared";

export default async function Home() {
  const templates = await db.template.findMany();

  return (
    <Box display="flex" gap="18px" flexWrap="wrap">
      {templates.map((template) => (
        <TemplateCard template={template} key={template.id} />
      ))}
      <CreateTemplateButton />
    </Box>
  );
}
