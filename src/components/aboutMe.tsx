import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Title from "./title";

interface AboutMe {
  imgPath: string;
  title: string;
  text: string;
}

const AboutMe: React.FC<AboutMe> = ({ imgPath, title, text }) => {
  return (
    <Box m="50px 0">
      <Box padding={{ base: "0 15px" }}>
        <Title title={title} />
      </Box>

      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={{ base: "center", md: "stretch" }}
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
        />
        <Box w={{ base: "100%", md: "65%" }}>
          <Text
            fontSize={{ base: "16px", sm: "18px", md: "20px" }}
            lineHeight={{ base: "24px", sm: "28px", md: "37px" }}
            textAlign={{ base: "left", sm: "center", md: "left" }}
          >
            Hi! I'm Jonathan Muroma, a web/software developer from Finland. With
            expertise in various web technologies like React, Next.js, and
            Wordpress, I primarily focus on front-end development while
            exploring back-end. Additionally, I've worked with engines like
            Unity and Unreal, crafting VR applications and games. Passionate
            about continuous learning and helping others, I'm also a proud
            'father' of two cats and in my free time, I enjoy gaming with
            friends and indulging my inner nerd.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
