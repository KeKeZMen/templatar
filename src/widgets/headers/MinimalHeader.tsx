"use client";

import { forwardRef, useState } from "react";
import { HeaderPropsType } from "./lib";
import {
  Box,
  Container,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const MinimalHeader = forwardRef<HTMLDivElement, HeaderPropsType>(
  ({ headerBgColor, headerLinks, headerTextColor }, ref) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <Box bgcolor={headerBgColor} width="100%" ref={ref} position="relative">
        <Container>
          <Box
            display="flex"
            padding="22px 40px"
            alignItems="center"
            gap="20px"
          >
            <div className="relative">
              <Button onClick={handleClick}>
                <MenuIcon
                  sx={{
                    color: headerTextColor,
                    width: "30px",
                    height: "30px",
                  }}
                />
              </Button>
              <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
                {headerLinks.split(",").map((headerLink, i) => (
                  <MenuItem color={headerTextColor} key={i}>
                    {headerLink}
                  </MenuItem>
                ))}
              </Menu>
            </div>

            <Typography
              fontSize="36px"
              fontWeight={500}
              color={headerTextColor}
            >
              Логотип
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }
);
