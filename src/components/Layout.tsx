import React from "react";
import { Box } from "@chakra-ui/react";
import Menu from "./Menu";
import Footer from "./Footer";

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
