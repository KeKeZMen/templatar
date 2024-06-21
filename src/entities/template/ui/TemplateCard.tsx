import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import { Template } from "@prisma/client";
import Link from "next/link";

type PropsType = {
  template: Template;
};

export const TemplateCard: FC<PropsType> = ({ template }) => {
  return (
    <Link href={`/template/${template.id}`}>
      <Box display="flex" flexDirection="column" gap="6px">
        <Box
          bgcolor="#D9D9D9"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width={280}
          height={175}
          sx={{
            cursor: "pointer",
          }}
        >
          <ModeOutlinedIcon sx={{ height: 100, width: 100, color: "white" }} />
        </Box>
        <Typography fontWeight="bold">{template.name}</Typography>
      </Box>
    </Link>
  );
};
