import React from "react";
import { Box, Grid, Image, Text, Flex } from "@chakra-ui/react";
import Title from "./Title";
import Link from "next/link";
import { CEREAL_DARK_GREEN } from "@/utils/constants";

interface Projects {}

//Add extra value, which holds val for spacing the logos better in someway
const projectData = [
  {
    name: "Betoni",
    img: "/images/logos/betoni.png",
    desc: "Website",
    link: "https://betoni.com/",
  },
  {
    name: "Cushman & Wakefield",
    img: "/images/logos/Cushman_&_Wakefield.png",
    desc: "Website",
    link: "https://cushmanwakefield.fi/",
  },
  {
    name: "Elfving forteco",
    img: "/images/logos/elfving-forteco.png",
    desc: "Multi-website",
    link: "https://elfvingforteco.fi/",
  },
  {
    name: "Faba",
    img: "/images/logos/faba.png",
    desc: "Website",
    link: "https://faba.fi/fi/etusivu",
  },
  {
    name: "Invisible ceilings",
    img: "/images/logos/Invisible_ceilings.png",
    desc: "Website",
    link: "https://invisibleceilings.com/",
  },
  {
    name: "Kahviklubi",
    img: "/images/logos/kahviklubi.png",
    desc: "Website & web-app",
  },
  {
    name: "Karkare",
    img: "/images/logos/karkare.png",
    desc: "Website",
    link: "https://www.keuruunauto.fi/karkare/",
  },
  {
    name: "Kielo",
    img: "/images/logos/kielo.png",
    desc: "Website",
  },
  {
    name: "Lauritzon",
    img: "/images/logos/lauritzon.png",
    desc: "Website",
    link: "https://lauritzon.fi/",
  },
  {
    name: "Puumerkki",
    img: "/images/logos/puumerkki.png",
    desc: "Website",
  },
  {
    name: "Rokotenyt",
    img: "/images/logos/rokotenyt.png",
    desc: "Website",
    link: "https://rokotenyt.fi/",
  },
  {
    name: "Tecci",
    img: "/images/logos/tecci.png",
    desc: "Website",
    link: "https://tecci.fi/",
  },
  {
    name: "Tectis",
    img: "/images/logos/tectis.png",
    desc: "Website",
    link: "https://tectis.fi/",
  },
  {
    name: "Turun yliopiston ylioppilaskunta",
    img: "/images/logos/tyy.png",
    desc: "Website",
    link: "https://tylkkari.fi/",
  },
  {
    name: "Ziirto",
    img: "/images/logos/ziirto.png",
    desc: "Website & web-app",
  },
];
//TODO: max width set to 1920
const Projects: React.FC<Projects> = ({}) => {
  return (
    <Box pt="100px" pb="50px" px={{ base: "15px", lg: "100px" }}>
      <Title title="Released Projects" />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={{ base: "20px" }}
        pt="25px"
        mb="50px"
      >
        {projectData
          .sort((a, b) => {
            if (a.link !== undefined && b.link === undefined) {
              return -1;
            } else if (a.link === undefined && b.link !== undefined) {
              return 1;
            } else {
              return -1;
            }
          })
          .map((data, idx) => {
            if (data.link)
              return (
                <Link
                  href={data.link}
                  target="_blank"
                  style={{ height: "100%", display: "block" }}
                  key={idx}
                >
                  <Flex
                    justifySelf={"center"}
                    flexDir={"column"}
                    border={`2px solid ${CEREAL_DARK_GREEN}`}
                    borderRadius={"25px"}
                    bg={CEREAL_DARK_GREEN}
                    w={"100%"}
                    h="100%"
                    transition={"all 0.25s"}
                    _hover={{
                      boxShadow: "0px 0px 34px -5px rgba(0,0,0,0.5)",
                      transform: "translateY(-15px)",
                    }}
                    role="group"
                    overflow={"hidden"}
                  >
                    <Image
                      src={data.img}
                      filter="invert(1)"
                      height={"auto"}
                      maxH={{ base: "150px", sm: "200px" }}
                      width={"auto"}
                      objectFit={"contain"}
                      mb="auto"
                      mt="auto"
                      py={{ base: "10px", sm: "0" }}
                      alt={data.name}
                    />
                    <Box p="15px 10px" bg="white" pos={"relative"}>
                      <Text
                        pos={"relative"}
                        zIndex={"10"}
                        textAlign={"center"}
                        transition={"all 0.25s"}
                        _groupHover={{ color: "white" }}
                      >
                        {data.desc}
                      </Text>
                      <Box
                        top={"-5px"}
                        left={"0"}
                        pos={"absolute"}
                        height={"0px"}
                        w="100%"
                        bg={CEREAL_DARK_GREEN}
                        transition={"all 0.25s"}
                        zIndex={"1"}
                        _groupHover={{ height: "calc(100% + 5px)" }}
                      ></Box>
                    </Box>
                  </Flex>
                </Link>
              );
          })}
      </Grid>
      <Title title="Yet to be released" />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={{ base: "20px" }}
        pt="25px"
      >
        {projectData
          .sort((a, b) => {
            if (a.link !== undefined && b.link === undefined) {
              return -1;
            } else if (a.link === undefined && b.link !== undefined) {
              return 1;
            } else {
              return -1;
            }
          })
          .map((data, idx) => {
            if (data.link) {
              return;
            }
            return (
              <Flex
                key={idx}
                justifySelf={"center"}
                flexDir={"column"}
                border={`2px solid ${CEREAL_DARK_GREEN}`}
                borderRadius={"25px"}
                bg={CEREAL_DARK_GREEN}
                w={"100%"}
              >
                <Image
                  src={data.img}
                  filter="invert(1)"
                  height={"auto"}
                  maxH={{ base: "150px", sm: "200px" }}
                  width={"auto"}
                  objectFit={"contain"}
                  mb="auto"
                  mt="auto"
                  py={{ base: "10px", sm: "0" }}
                  alt={data.name}
                />
                <Box p="15px 10px" bg="white" borderRadius={"0 0 25px 25px"}>
                  <Text textAlign={"center"}>{data.desc}</Text>
                  <Text textAlign={"center"}>Coming soon</Text>
                </Box>
              </Flex>
            );
          })}
      </Grid>
    </Box>
  );
};

export default Projects;
