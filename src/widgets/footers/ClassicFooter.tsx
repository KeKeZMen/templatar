import { forwardRef } from "react";
import { FooterPropsType } from "./lib";
import { Box, Container, Typography } from "@mui/material";

export const ClassicFooter = forwardRef<HTMLDivElement, FooterPropsType>(
  ({ footerBgColor, footerText, footerTextColor }, ref) => {
    return (
      <Box
        bgcolor={footerBgColor}
        width="100%"
        ref={ref}
      >
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            padding="22px 40px"
            alignItems="center"
          >
            <Box flexWrap="wrap">
              {footerText.split(",").map((footerText, i) => (
                <Typography color={footerTextColor} key={i}>
                  {footerText}
                </Typography>
              ))}
            </Box>

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
