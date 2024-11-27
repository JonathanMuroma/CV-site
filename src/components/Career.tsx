import React from "react";
import { Box, Text, Heading, Grid, GridItem, Image } from "@chakra-ui/react";
import Title from "./Title";
import { CEREAL_DARK_GREEN, CEREAL_LIGHT_BLUE } from "@/utils/constants";
import ScrollAnimation from "react-animate-on-scroll";

interface Career {}

const componentData = [
  {
    date: "03.2021 - 09.2024",
    title: "Tecci - Web developer",
    link: "Link to details of place?",
    text: "Web developer. Worked solo and in small teams on multiple websites created with React, Nextjs and Wordpress. Company being a consult firm, I've been part of creating all sorts of websites and services for all types of clients, from big to smaller ones.",
    icon: "images/Tecci_logo.png",
    iconAlt: "Tecci",
  },
  {
    date: "10.2019 - 01.2020",
    title: "XR Center - Unity engine VR-development trainee",
    link: "Link to details of place?",
    text: "Worked in a 3 person team as a Unity developer, creating a nurse training VR application for studying nurses. I took care of creating the online co-op functionalities and handling Unitys VR-library.",
    icon: "images/XR_logo.svg",
    iconAlt: "XR Center",
  },
  {
    date: "09.2019 - 05.2020",
    title: "Moonstruck dancer - Design assistant & developer for game demo",
    link: "Link to details of place?",
    text: "Worked as a game design assistant, focusing on the game mechanics as well as programming systems and mechanics for the game inside Unity engine.",
    icon: "images/moonstruck_dancer_logo.png",
    iconAlt: "Moonstruck Dancer",
  },
  {
    date: "02.2018 - 05.2018",
    title: "Guns of wreckage - Lead designer for game demo",
    link: "Link to details of place?",
    text: "Was the main designer and lead a team of 7, full of artists and developers, to create small game demo. We eventually took it to a game development competition called Bit1 and got into the finals.",
    icon: "images/Gow_icon.png",
    iconAlt: "Guns of Wreckage",
  },
];

const Career: React.FC<Career> = ({}) => {
  return (
    <Box padding={"0 15px"} margin={"40px 0"} overflow={"hidden"}>
      <Title title="Career" />
      <Box display="flex" alignItems={"center"} flexDir="column">
        {componentData.map((data, idx) => (
          <Grid
            templateColumns={{ base: "1px 1fr", md: "200px 1px 500px" }}
            key={idx}
            gap="0 30px"
          >
            <GridItem
              justifySelf={"end"}
              pt="11px"
              pr="1px"
              display={{ base: "none", md: "block" }}
            >
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <Text textAlign={"right"}>{data.date}</Text>
                <Image
                  m="0 auto"
                  src={data.icon}
                  alt={data.iconAlt}
                  objectFit="contain"
                  height={"150px"}
                  width="auto"
                  maxW={"140px"}
                ></Image>
              </ScrollAnimation>
            </GridItem>
            <GridItem>
              <Box
                borderLeft={`2px solid ${CEREAL_DARK_GREEN}`}
                height="100%"
                pos={"relative"}
              >
                <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                  <Box
                    position={"absolute"}
                    background={CEREAL_LIGHT_BLUE}
                    border={`2px solid ${CEREAL_DARK_GREEN}`}
                    width={"20px"}
                    height="20px"
                    borderRadius={"50%"}
                    left="-11px"
                    top="13px"
                  ></Box>
                </ScrollAnimation>
              </Box>
            </GridItem>
            <GridItem>
              <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                <Text
                  textAlign={{ base: "left", md: "right" }}
                  display={{ base: "block", md: "none" }}
                  pt="11px"
                >
                  {data.date}
                </Text>
                <Heading as="h3" mb="2px" fontSize={"20px"} pt="11px">
                  {data.title}
                </Heading>
                {/*
                  TODO Leave out for now
                <Text mb="10px" fontSize={"15px"} lineHeight="19px">
                  {data.link}
                </Text> */}
                <Text mb="25px" mt="10px">
                  {data.text}
                </Text>
              </ScrollAnimation>
            </GridItem>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default Career;
