import { UserProfile } from "@entities/user/ui/UserProfile";
import { LogoutButton } from "@features/auth/LogoutButton";
import { Box, Container, Typography } from "@mui/material";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

export const Header = () => {
  const name = cookies().get("name");

  return (
    <Box width="100%" bgcolor="#2196F3" paddingY="23px" paddingX="42px">
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Link href="/">
            <Typography
              variant="h1"
              color="#ffffff"
              fontWeight={500}
              fontSize="20px"
            >
              Мой шаблоны
            </Typography>
          </Link>

          {name?.name && (
            <UserProfile logoutButton={<LogoutButton />} name={name.value} />
          )}
        </Box>
      </Container>
    </Box>
  );
};
