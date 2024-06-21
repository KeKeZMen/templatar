import { AuthForm } from "@features/auth/AuthForm";
import { Box, Container } from "@mui/material";
import { Header } from "@widgets";

export default function Login() {
  return (
    <>
      <Header />
      <Box
        sx={{
          height: "calc(100dvh - 70px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AuthForm />
      </Box>
    </>
  );
}
