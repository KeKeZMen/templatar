import { Box, Container } from "@mui/material";
import { db } from "@shared";
import { TemplateForPreview } from "@widgets/TemplateForPreview";
import { redirect } from "next/navigation";
import React from "react";

export default async function Preview({
  params,
}: {
  params: { templateId: string };
}) {
  const template = await db.template.findFirst({
    where: {
      id: params.templateId,
    },
  });

  if (!template) redirect("/");

  return (
    <Box display="flex" height="100dvh" width="100%">
      <TemplateForPreview template={template} />
    </Box>
  );
}
