import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import TextAnimator from "./textAnimator";
import ScrollAnimation from "react-animate-on-scroll";
import InfiniteScrollImg from "./infiniteScrollImg";

interface Hero {
  title: string;
  subtext: string;
  backgroundImg?: string;
  backgroundCol?: string;
  gradient?: string;
  color?: string;
}
//This is where it starts/ends
const Hero: React.FC<Hero> = ({
  title,
  subtext,
  backgroundImg,
  backgroundCol,
  gradient,
  color,
}) => {
  const mobileHeading = title.split(" ");
  console.log(mobileHeading);
  return (
    <Box
      m="0 0px"
      backgroundImage={backgroundImg ? backgroundImg : ""}
      background={backgroundCol ? backgroundCol : ""}
      backgroundPosition="center"
      backgroundRepeat={"no-repeat"}
      backgroundSize="cover"
      backgroundAttachment={"fixed"}
      position="relative"
      h={"98vh"}
      w="100%"
    >
      <Box pos={"absolute"} zIndex="9" h={"98vh"} w="100%">
        <InfiniteScrollImg />
      </Box>
      <Box
        pos={"absolute"}
        h={"98vh"}
        w="100%"
        display={"flex"}
        alignItems="center"
        justifyContent={"space-between"}
        flexDir="row"
        //backgroundColor={gradient}
        backgroundColor={"rgba(0,0,0,0.4)"}
        padding={{ base: "0 15px", sm: "0 75px", md: "0 100px" }}
        zIndex={"10"}
      >
        <Box>
          <Heading
            as={"h1"}
            fontSize={{ base: "50px", lg: "70px" }}
            lineHeight={{ base: "54px", lg: "75px" }}
            textTransform={"capitalize"}
            mb="7px"
            color={color}
            textShadow={"0px 0px 5px black"}
          >
            <Box display={{ base: "none", md: "block" }}>
              <TextAnimator
                text={title}
                fontFam="Agbalumo"
                color="#fff"
                spacing="15px"
              />
            </Box>
            {mobileHeading.map((val, idx) => (
              <Box display={{ base: "block", md: "none" }} key={idx}>
                <TextAnimator
                  text={val}
                  fontFam="Agbalumo"
                  color="#fff"
                  spacing="15px"
                />
              </Box>
            ))}
          </Heading>
          <Box>
            <ScrollAnimation
              animateIn="fadeInLeft"
              delay={title.length * 100}
              animateOnce={true}
            >
              <Heading
                as={"h2"}
                fontSize={{ base: "19px", lg: "22px" }}
                lineHeight={{ base: "24px", lg: "26px" }}
                fontWeight={"400"}
                fontFamily="Roboto, sans-serif"
                color={color}
                textShadow={"0px 0px 5px black"}
              >
                {subtext}
              </Heading>
            </ScrollAnimation>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
