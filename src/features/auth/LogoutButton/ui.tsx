"use client";

import React from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { logout } from "./api";
import { Button } from "@mui/material";

export const LogoutButton = () => {
  const handleClick = () => {
    logout();
  };

  return (
    <Button onClick={handleClick}>
      <ExitToAppIcon sx={{ color: "white", width: "30px", height: "30px" }} />
    </Button>
  );
};
