import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { CEREAL_DARK_GREEN, CEREAL_LIGHT_BLUE } from "@/utils/constants";

interface Menu {}

const Menu: React.FC<{}> = ({}) => {
  const [menuStatus, setMenuStatus] = useState(false);

  const menuItems = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Contact",
      link: "/contact",
    },
    {
      label: "Complete",
      link: "/complete",
    },
    {
      label: "Projects",
      link: "/projects",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/jonathan-muroma-0808b018a",
      target: "_blank",
    },
  ];

  return (
    <>
      <Box
        display={{ base: "block", lg: "none" }}
        pos={"fixed"}
        top="15px"
        left={"10px"}
        p="8px 5px"
        borderRadius={"10px"}
        zIndex={"999"}
        onClick={() => setMenuStatus(!menuStatus)}
        bg={CEREAL_DARK_GREEN}
      >
        <Flex
          height={"5px"}
          w="40px"
          bg={"white"}
          borderRadius="25px"
          mb="10px"
          justify="center"
        >
          <Box
            h="100%"
            width={menuStatus ? "100%" : "0"}
            bg={CEREAL_LIGHT_BLUE}
            transition={"all .25s"}
          ></Box>
        </Flex>
        <Flex
          height={"5px"}
          w="40px"
          bg={"white"}
          borderRadius="25px"
          mb="10px"
          justify="center"
        >
          <Box
            h="100%"
            width={menuStatus ? "100%" : "0"}
            bg={CEREAL_LIGHT_BLUE}
            transition={"all .25s"}
          ></Box>
        </Flex>
        <Flex
          height={"5px"}
          w="40px"
          bg={"white"}
          borderRadius="25px"
          justify="center"
        >
          <Box
            h="100%"
            width={menuStatus ? "100%" : "0"}
            bg={CEREAL_LIGHT_BLUE}
            transition={"all .25s"}
          ></Box>
        </Flex>
      </Box>
      <Box
        pos={"fixed"}
        left={{ base: menuStatus ? "0" : "-100px", lg: "0" }}
        top="20%"
        zIndex={"999"}
        transition="left 0.25s"
      >
        <Flex flexDir={"column"} alignItems="start" gap="5px">
          {menuItems.map((item, idx) => (
            <Link
              href={item.link}
              target={item.target ? item.target : ""}
              key={idx}
            >
              <Flex
                height={"30px"}
                alignItems={"center"}
                backgroundColor="rgba(255,255,255,1)"
                width={"100%"}
                justifyContent="center"
                padding="0 10px"
                minW={"90px"}
                pos="relative"
                borderRadius={"0 25px 25px 0"}
                role="group"
                _hover={{ width: "120px" }}
                transition="all 0.25s"
                borderTop={`2px solid ${CEREAL_DARK_GREEN}`}
                borderRight={`2px solid ${CEREAL_DARK_GREEN}`}
                borderBottom={`2px solid ${CEREAL_DARK_GREEN}`}
              >
                <Box pos="absolute" zIndex={"10"}>
                  {item.label}
                </Box>
                <Box
                  top="-2px"
                  left="-100px"
                  height={"30px"}
                  width="calc(100% + 3px)"
                  pos="absolute"
                  zIndex={"9"}
                  background={CEREAL_LIGHT_BLUE}
                  borderRadius={"0 25px 25px 0"}
                  _groupHover={{ left: "0" }}
                  transition="all 0.25s"
                ></Box>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Menu;
