import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import Title from "./Title";
import ScrollAnimation from "react-animate-on-scroll";
import { CEREAL_DARK_GREEN } from "@/utils/constants";

//Change this to word list and animate it nicely with scrollAnimate

interface SkillList {}

const skills = [
  "Frontend",
  "Web development",
  "Unity engine",
  "Nextjs",
  "Prisma",
  "C#",
  "C++",
  "Java",
  "Python",
  "React",
  "HTML",
  "CSS",
  "VR development",
  "Javascript",
  "Typescript",
  "PHP",
  "Wordpress",
  "Finnish",
  "English",
  "Teamwork",
  "Customer service",
  "Leadership",
];

const traits = [
  "Hard working and responsible",
  "Trustworthy",
  "Cheerful and empathetic",
  "Good problem-solving skills, enjoy puzzles",
  "Passionate about gaming & game collecting",
  "Extremely punctual",
  "Sociable",
  "Supportive",
];

const interests = [
  "Programming",
  "Music, singing",
  "Dogs & Cats",
  "Tech",
  "Gaming",
  "Game design",
  "Creative building",
];

const SkillList: React.FC<SkillList> = ({}) => {
  return (
    <>
      <Box
        margin="40px 0"
        px={{ base: "15px", lg: "100px" }}
        display={{ base: "none", md: "block" }}
        overflow={"hidden"}
      >
        <Title title="Skills" />
        <Flex justifyContent={"space-around"} gap={"10px"} mb="-5px">
          <Box>
            <Heading
              as="h3"
              fontFamily={"Agbalumo !important"}
              fontSize="28px"
              mb="10px"
            >
              Interests
            </Heading>
            {interests.map((val, idx) => (
              <ScrollAnimation
                animateIn="fadeInLeft"
                delay={idx * 50 + (skills.length / 2) * 100}
                animateOnce={true}
                key={idx}
              >
                <Text mb="5px">{val}</Text>
              </ScrollAnimation>
            ))}
          </Box>
          <ScrollAnimation
            animateIn="zoomIn"
            animateOnce={true}
            delay={(skills.length / 2) * 100}
          >
            <Box
              height={"100%"}
              borderLeft={`2px solid ${CEREAL_DARK_GREEN}`}
            ></Box>
          </ScrollAnimation>

          <Box>
            {skills.map((val, idx) => {
              if (idx < skills.length / 2)
                return (
                  <ScrollAnimation
                    animateIn="fadeInLeft"
                    delay={idx * 50}
                    animateOnce={true}
                    key={idx}
                  >
                    <Text mb="5px">{val}</Text>
                  </ScrollAnimation>
                );
            })}
          </Box>
          <Box>
            {skills.map((val, idx) => {
              if (idx >= skills.length / 2)
                return (
                  <ScrollAnimation
                    animateIn="fadeInRight"
                    delay={(idx - skills.length / 2) * 50}
                    animateOnce={true}
                    key={idx}
                  >
                    <Text mb="5px">{val}</Text>
                  </ScrollAnimation>
                );
            })}
          </Box>
          <ScrollAnimation
            animateIn="zoomIn"
            animateOnce={true}
            delay={(skills.length / 2) * 100}
          >
            <Box
              height={"100%"}
              borderLeft={`2px solid ${CEREAL_DARK_GREEN}`}
            ></Box>
          </ScrollAnimation>
          <Box>
            <Heading
              as="h3"
              fontFamily={"Agbalumo !important"}
              fontSize="28px"
              mb="10px"
            >
              Traits
            </Heading>
            {traits.map((val, idx) => (
              <ScrollAnimation
                animateIn="fadeInRight"
                delay={idx * 50 + (skills.length / 2) * 100}
                animateOnce={true}
                key={idx}
              >
                <Text mb="5px">{val}</Text>
              </ScrollAnimation>
            ))}
          </Box>
        </Flex>
      </Box>
      {/* mobile */}
      <Box
        margin="40px 0"
        px={{ base: "15px", sm: "75px" }}
        display={{ base: "block", md: "none" }}
      >
        <Title title="Skills" />
        <Flex flexDir={"column"} gap={"20px"} mb="-5px">
          <Flex justifyContent={"space-around"} gap="15px">
            <Box width={"100%"} maxW="200px">
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                {skills.map((val, idx) => {
                  if (idx < skills.length / 2)
                    return (
                      <Text key={idx} mb="5px">
                        {val}
                      </Text>
                    );
                })}
              </ScrollAnimation>
            </Box>
            <Box width={"100%"} maxW="200px">
              <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                {skills.map((val, idx) => {
                  if (idx >= skills.length / 2)
                    return (
                      <Text key={idx} mb="5px">
                        {val}
                      </Text>
                    );
                })}
              </ScrollAnimation>
            </Box>
          </Flex>
          <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
            <Box
              w={"100%"}
              borderBottom={`2px solid ${CEREAL_DARK_GREEN}`}
            ></Box>
          </ScrollAnimation>
          <Flex justifyContent={"space-around"} gap="15px">
            <Box width={"100%"} maxW="200px">
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <Heading
                  as="h3"
                  fontFamily={"Agbalumo !important"}
                  fontSize="28px"
                  mb="10px"
                >
                  Interests
                </Heading>
                {interests.map((val, idx) => (
                  <Text key={idx} mb="5px">
                    {val}
                  </Text>
                ))}
              </ScrollAnimation>
            </Box>

            <Box width={"100%"} maxW="200px">
              <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                <Heading
                  as="h3"
                  fontFamily={"Agbalumo !important"}
                  fontSize="28px"
                  mb="10px"
                >
                  Traits
                </Heading>
                {traits.map((val, idx) => (
                  <Text key={idx} mb="5px">
                    {val}
                  </Text>
                ))}
              </ScrollAnimation>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default SkillList;
