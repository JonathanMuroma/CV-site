import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Button from "./Button";
import ScrollAnimation from "react-animate-on-scroll";

interface CtaBanner {
  title: string;
  text: string;
  link: string;
  buttonLabel: string;
  backgroundImg?: string;
  backgroundCol?: string;
  backgroundGradient?: string;
  textColor?: string;
}

const CtaBanner: React.FC<CtaBanner> = ({
  title,
  text,
  link,
  buttonLabel,
  backgroundImg,
  backgroundCol,
  backgroundGradient,
  textColor,
}) => {
  return (
    <Box
      background={backgroundCol ? backgroundCol : "unset"}
      backgroundImage={backgroundImg ? backgroundImg : "unset"}
      backgroundPosition="center"
      backgroundRepeat={"no-repeat"}
      backgroundSize="cover"
      backgroundAttachment={"fixed"}
      overflow={"hidden"}
    >
      <ScrollAnimation animateIn="bounceIn">
        <Box
          padding="60px"
          background={backgroundGradient ? backgroundGradient : "unset"}
        >
          <Flex
            justifyContent={"center"}
            flexDir="column"
            alignItems={"center"}
          >
            <Heading
              textAlign={"center"}
              mb="10px"
              color={textColor ? textColor : "inherit"}
              textTransform={"uppercase"}
            >
              {title}
            </Heading>
            <Text
              textAlign={"center"}
              mb="30px"
              maxW={"650px"}
              color={textColor ? textColor : "inherit"}
            >
              {text}
            </Text>
            <Button label={buttonLabel} link={link} />
          </Flex>
        </Box>
      </ScrollAnimation>
    </Box>
  );
};

export default CtaBanner;
