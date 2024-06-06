import React from "react";
import { Box, Flex, Image, Heading } from "@chakra-ui/react";
import { CEREAL_DARK_GREEN } from "@/utils/constants";

interface LogoBanner {}

const LogoBanner: React.FC<LogoBanner> = ({}) => {
  const logos = [
    "/images/logos/betoni.png",
    "/images/logos/Cushman_&_Wakefield.png",
    "/images/logos/elfving-forteco.png",
    "/images/logos/faba.png",
    "/images/logos/Invisible_ceilings.png",
    "/images/logos/kahviklubi.png",
    "/images/logos/karkare.png",
    "/images/logos/kielo.png",
    "/images/logos/lauritzon.png",
    "/images/logos/puumerkki.png",
    "/images/logos/rokotenyt.png",
    "/images/logos/tecci.png",
    "/images/logos/tectis.png",
    "/images/logos/tyy.png",
    "/images/logos/ziirto.png",
  ];
  //TODO set max width to 1920
  return (
    <Box mt="60px">
      <Flex justifyContent={"center"} alignItems={"stretch"}>
        <Box
          borderRadius={"100% 0 0 0 "}
          width={"100px"}
          bg={CEREAL_DARK_GREEN}
          color="white"
        ></Box>
        <Heading
          textAlign={"center"}
          height={"100%"}
          bg={CEREAL_DARK_GREEN}
          as="h2"
          color={"white"}
          p={{ base: "10px, 20px", sm: "10px 30px" }}
          fontFamily={"agbalumo!important"}
          whiteSpace={"nowrap"}
        >
          Sites I&apos;ve worked on
        </Heading>
        <Box
          borderRadius={"0 100%  0 0 "}
          width={"100px"}
          bg={CEREAL_DARK_GREEN}
          color="white"
        ></Box>
      </Flex>
      <Box
        bg={CEREAL_DARK_GREEN}
        p={{ base: "25px 15px", sm: "25px 30px", md: "25px 75px" }}
      >
        <Flex
          flexDir={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={{ base: "10px", md: "20px" }}
        >
          {logos.map((logo, idx) => (
            <Image
              filter="invert(1)"
              objectFit={"contain"}
              width={"100%"}
              maxW={{ base: "140px", sm: "200px" }}
              maxH={"100px"}
              height={"auto"}
              key={idx}
              src={logo}
              alt={"logo_render"}
            ></Image>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default LogoBanner;
