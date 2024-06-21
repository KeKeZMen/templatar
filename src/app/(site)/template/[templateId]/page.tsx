import { TemplatePreview } from "@entities/template";
import { EditTemplateMenu } from "@features/template/EditTemplateMenu";
import { Box } from "@mui/material";
import { db } from "@shared";
import { redirect } from "next/navigation";
import React from "react";

export default async function Template({
  params,
}: {
  params: { templateId: string };
}) {
  const template = await db.template.findFirst({
    where: {
      id: params.templateId,
    },
  });

  if (!template) {
    return redirect("/");
  }

  return (
    <Box display="flex">
      <EditTemplateMenu template={template} />
      <TemplatePreview template={template} />
    </Box>
  );
}
