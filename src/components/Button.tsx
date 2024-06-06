import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { CEREAL_DARK_GREEN } from "@/utils/constants";

interface Button {
  link?: string;
  clickFunction?: () => void;
  label: string;
}

const Button: React.FC<Button> = ({ link, clickFunction, label }) => {
  const router = useRouter();
  return (
    <Box
      as="button"
      border={" 1px solid black"}
      onClick={() => {
        if (clickFunction) {
          clickFunction();
        }
        if (link) {
          router.push(link);
        }
      }}
      borderRadius="25px"
      padding="8px 40px"
      transition={"0.4s all"}
      fontWeight="normal"
      _hover={{
        background: CEREAL_DARK_GREEN,
        border: `1px solid ${CEREAL_DARK_GREEN}`,
        fontWeight: "bold",
        borderRadius: "25px 0 25px 0",
        color: "#fff",
      }}
      textAlign="center"
    >
      {label}
    </Box>
  );
};

export default Button;
