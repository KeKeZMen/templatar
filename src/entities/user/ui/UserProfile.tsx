import { Box, Typography } from "@mui/material";
import React, { FC } from "react";

type PropsType = {
  name: string;
  logoutButton?: JSX.Element;
};

export const UserProfile: FC<PropsType> = ({ name, logoutButton }) => {
  return (
    <Box display="flex" gap="6px" alignItems="center">
      <Typography color="white" fontSize="20px" textTransform="uppercase">
        {name}
      </Typography>
      {logoutButton}
    </Box>
  );
};
