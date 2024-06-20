import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";

type PropsType = {
  name: string;
};

export const TemplateCard: FC<PropsType> = ({ name }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        bgcolor="#D9D9D9"
        display="flex"
        justifyContent="center"
        width={285}
        height={175}
        sx={{
          cursor: "pointer",
        }}
      >
        <ModeOutlinedIcon sx={{ height: 100, width: 100 }} />
      </Box>
      <Typography>{name}</Typography>
    </Box>
  );
};
