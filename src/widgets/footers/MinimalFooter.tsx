import { forwardRef } from "react";
import { FooterPropsType } from "./lib";
import { Box, Container, Typography } from "@mui/material";

export const MinimalFooter = forwardRef<HTMLDivElement, FooterPropsType>(
  ({ footerBgColor, footerText, footerTextColor }, ref) => {
    return (
      <Box bgcolor={footerBgColor} width="100%" ref={ref}>
        <Container>
          <Box
            display="flex"
            justifyContent="center"
            padding="22px 40px"
            alignItems="center"
          >
            <Typography
              fontSize="36px"
              fontWeight={500}
              color={footerTextColor}
            >
              Логотип
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }
);
