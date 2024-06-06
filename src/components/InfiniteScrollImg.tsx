import React from "react";
import { Box, Img, keyframes, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  CEREAL_BLACK,
  CEREAL_DARK_AQUA,
  CEREAL_DARK_GREEN,
} from "@/utils/constants";

interface infiniteScrollImg {}

const InfiniteScrollImg: React.FC<infiniteScrollImg> = () => {
  const animationKeyframes = keyframes`0% { transform: translateX(0);  }
  100% { transform:  translateX(-100%); }`;

  const animation = `${animationKeyframes} 12s linear infinite`;

  return (
    <Box h={"100%"} w="100%" overflow="hidden">
      <Box overflow="hidden" bg={CEREAL_DARK_GREEN} h={"100%"} w="100%">
        <Flex
          as={motion.div}
          animation={animation}
          flexDir={"row"}
          alignItems="center"
          justifyContent={"start"}
          h={"100%"}
          w="100%"
        >
          <Img src="images/banner_wip.png" objectFit={"cover"} />
          <Img src="images/banner_wip.png" objectFit={"cover"} />
        </Flex>
      </Box>
    </Box>
  );
};

export default InfiniteScrollImg;