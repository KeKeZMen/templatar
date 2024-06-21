"use client";

import { Template } from "@prisma/client";
import { FC, useEffect, useRef, useState } from "react";
import {
  ClassicHeader,
  CompactHeader,
  MinimalHeader,
  ModernHeader,
} from "@widgets/headers";
import {
  ClassicFooter,
  CompactFooter,
  MinimalFooter,
  ModernFooter,
} from "@widgets/footers";
import { Box, Container, Typography } from "@mui/material";

type PropsType = {
  template: Template;
};

export const TemplatePreview: FC<PropsType> = ({ template }) => {
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
    <CompactHeader {...template} ref={headerRef}/>,
    <ModernHeader {...template} />,
    <MinimalHeader {...template} />,
  ];

  const footers = [
    <ClassicFooter {...template} ref={footerRef} />,
    <CompactFooter {...template} />,
    <ModernFooter {...template} />,
    <MinimalFooter {...template} />,
  ];

  return (
    <Box
      margin="38px"
      width="80%"
      border="1px solid #BBBBBB"
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
