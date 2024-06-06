import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";

interface Title {
  title: string;
}

const Title: React.FC<Title> = ({ title }) => {
  return (
    <Flex justifyContent={"center"} mb="20px">
      <Box width={"100%"} maxW="400px">
        <Heading
          as="h2"
          fontFamily={"agbalumo !important"}
          fontSize="40px"
          lineHeight={"44px"}
        >
          {title}
        </Heading>
      </Box>
    </Flex>
  );
};

export default Title;
