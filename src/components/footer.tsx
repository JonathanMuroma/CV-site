import React from "react";
import { Box } from "@chakra-ui/react";
import { CEREAL_DARK_GREEN, CEREAL_LIGHT_BLUE } from "@/utils/constants";

interface Footer {}

const Footer: React.FC<{}> = ({}) => {
  return (
    <Box>
      <Box pb="0px" bg={CEREAL_DARK_GREEN}>
        <Box
          borderRadius={"0 0 40px 40px"}
          background={"white"}
          p="10px 15px"
        ></Box>
      </Box>
      <Box pb="0px" bg={CEREAL_LIGHT_BLUE}>
        <Box
          //borderRadius={"0 0 40px 40px"}
          background={CEREAL_DARK_GREEN}
          p="10px 15px"
          color={"white"}
          textAlign="center"
        >
          Copyright 2024
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
