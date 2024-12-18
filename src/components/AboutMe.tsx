import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Title from "./Title";

interface AboutMe {
  imgPath: string;
  title: string;
}

const AboutMe: React.FC<AboutMe> = ({ imgPath, title }) => {
  return (
    <Box m="50px 0">
      <Box padding={{ base: "0 15px" }}>
        <Title title={title} />
      </Box>

      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={{ base: "center" }}
        flexDir={{ base: "column", md: "row" }}
        maxWidth={"900px"}
        margin="0 auto"
        gap="20px"
        padding={{ base: "0 15px", sm: "0 75px" }}
      >
        <Image
          src={imgPath}
          alt="Portrait"
          w={{ base: "auto", md: "35%" }}
          height={"320px"}
          objectFit="cover"
          borderRadius={"25%"}
          objectPosition={"bottom"}
        />
        <Box w={{ base: "100%", md: "65%" }}>
          <Text
            fontSize={{ base: "16px", sm: "18px", md: "20px" }}
            lineHeight={{ base: "24px", sm: "28px", md: "37px" }}
            textAlign={{ base: "left", sm: "center", md: "left" }}
          >
            Hi! I&apos;m Jonathan Muroma, a web/software developer from Finland.
            With expertise in various web technologies like React, Node.Js, and
            Wordpress. Additionally, I&apos;ve worked with engines like Unity
            and Unreal, crafting VR applications and games. Passionate about
            continuous learning and helping others, I&apos;m also a proud
            &apos;father&apos; of two cats and in my free time, I enjoy gaming
            with friends and indulging my inner nerd.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
