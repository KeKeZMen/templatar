"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import {
  ClassicHeader,
  CompactHeader,
  MinimalHeader,
  ModernHeader,
} from "./headers";
import {
  ClassicFooter,
  CompactFooter,
  MinimalFooter,
  ModernFooter,
} from "./footers";
import { Box, Typography, Container } from "@mui/material";
import { Template } from "@prisma/client";

type PropsType = {
  template: Template;
};

export const TemplateForPreview: FC<PropsType> = ({ template }) => {
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.clientHeight || 0);
    }
  }, []);

  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight || 0);
    }
  }, []);

  const headers = [
    <ClassicHeader {...template} ref={headerRef} />,
    <CompactHeader {...template} ref={headerRef} />,
    <ModernHeader {...template} ref={headerRef} />,
    <MinimalHeader {...template} ref={headerRef} />,
  ];

  const footers = [
    <ClassicFooter {...template} ref={footerRef} />,
    <CompactFooter {...template} ref={footerRef} />,
    <ModernFooter {...template} ref={footerRef} />,
    <MinimalFooter {...template} ref={footerRef} />,
  ];

  return (
    <Box
      width="100%"
      position="relative"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      {headers[template.headerId]}

      <Box
        bgcolor={template.mainBgColor}
        width="100%"
        height={`calc(100% - ${footerHeight}px - ${headerHeight}px)`}
      >
        <Container>
          <Box padding="20px">
            <Typography color={template.mainTextColor}>
              {template.mainText}
            </Typography>
          </Box>
        </Container>
      </Box>

      {footers[template.footerId]}
    </Box>
  );
};
