import { db } from "@shared";
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

  return <div>Template</div>;
}
