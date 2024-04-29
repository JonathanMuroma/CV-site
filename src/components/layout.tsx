import React from "react";
import { Box } from "@chakra-ui/react";
import Menu from "./menu";
import Footer from "./footer";

interface Layout {
  children?: JSX.Element;
}

const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <Box>
      <Menu />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
