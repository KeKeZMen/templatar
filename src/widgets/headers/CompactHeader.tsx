import { forwardRef } from "react";
import { HeaderPropsType } from "./lib";
import { Box, Container, Typography } from "@mui/material";

export const CompactHeader = forwardRef<HTMLDivElement, HeaderPropsType>(
  ({ headerBgColor, headerLinks, headerTextColor }, ref) => {
    return (
      <Box bgcolor={headerBgColor} width="100%" ref={ref}>
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            padding="22px 40px"
            alignItems="center"
            flexDirection="column"
          >
            <Typography
              fontSize="36px"
              fontWeight={500}
              color={headerTextColor}
            >
              Логотип
            </Typography>

            <Box flexWrap="wrap" flexDirection="row" display="flex" gap="20px">
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
