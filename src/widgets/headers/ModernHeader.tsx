import { forwardRef } from "react";
import { HeaderPropsType } from "./lib";
import { Box, Container, Typography } from "@mui/material";

export const ModernHeader = forwardRef<HTMLDivElement, HeaderPropsType>(
  ({ headerBgColor, headerLinks, headerTextColor }, ref) => {
    return (
      <Box bgcolor={headerBgColor} width="100%" ref={ref} position="relative">
        <Container>
          <Box
            display="flex"
            padding="22px 40px"
            alignItems="center"
            flexDirection="row-reverse"
          >
            <Typography
              fontSize="36px"
              fontWeight={500}
              color={headerTextColor}
              position="absolute"
              sx={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Логотип
            </Typography>

            <Box
              flexWrap="wrap"
              flexDirection="row"
              display="flex"
              gap="20px"
              alignSelf="flex-end"
            >
              {headerLinks.split(",").map((headerLink, i) => (
                <Typography color={headerTextColor} key={i}>
                  {headerLink}
                </Typography>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    );
  }
);
