import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <Box width="100%" bgcolor="#2196F3" paddingY="23px" paddingX="42px">
      <Container maxWidth="xl">
        <Typography variant="h1" color="#ffffff" fontWeight={500}>
          Мой шаблоны
        </Typography>
      </Container>
    </Box>
  );
};
