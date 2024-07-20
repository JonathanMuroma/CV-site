import React from "react";
import { Box, Grid, Text, Flex, Heading } from "@chakra-ui/react";
import Button from "./Button";
import { CEREAL_DARK_GREEN } from "@/utils/constants";

interface CtaRow {}

const list = [
  {
    title: "Look at my LinkedIn page",
    desc: "From here you can take a look at my Linkedin page and message me, if I peaked your interest.",
    button: "Open LinkedIn",
    link: "#",
  },
  {
    title: "Check the code on Github",
    desc: "Check out a copy of this sites github page and look into the code itself and how it was made.",
    button: "Open Github",
    link: "#",
  },
  {
    title: "Take a look at my CV",
    desc: "Open a copy of my CV in PDF format. It contains details about my work history and has my contact info in it.",
    button: "Open CV",
    link: "/test-pdf.pdf",
  },
];

const CtaRow: React.FC<CtaRow> = ({}) => {
  return (
    <Box>
      <Box p="20px 75px 0">
        <Grid templateColumns={`repeat(${list.length}, 1fr)`} gap={"10px"}>
          {list.map((block, idx) => (
            <Flex
              key={idx}
              flexDir={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              h={"350px"}
              px="20px"
              borderLeft={idx % 2 === 0 ? "none" : `solid ${CEREAL_DARK_GREEN}`}
              borderRight={
                idx % 2 === 0 ? "none" : `solid ${CEREAL_DARK_GREEN}`
              }
            >
              <Heading
                maxW={"250px"}
                as="h2"
                fontSize={"30px"}
                textAlign={"center"}
                mb="5px"
                height={"70px"}
              >
                {block.title}
              </Heading>
              <Text
                textAlign={"center"}
                mb="20px"
                maxW={"320px"}
                height={"90px"}
              >
                {block.desc}
              </Text>
              <Box>
                <Button link={block.link} label={block.button} target={true} />
              </Box>
            </Flex>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CtaRow;
