import React from "react";
import { Box } from "@chakra-ui/react";
import ScrollAnimation from "react-animate-on-scroll";

interface TextAnimator {
  text?: string;
  fontFam?: string;
  color?: string;
  runOnce?: boolean;
  anim?: string;
  spacing?: string;
  delay?: number;
}

const TextAnimator: React.FC<TextAnimator> = ({
  text = "Cerealland is dope!",
  fontFam,
  color,
  runOnce = true,
  anim = "bounceIn",
  spacing = "3px",
  delay = 0,
}) => {
  const charList = text.split("");

  return (
    <Box>
      {charList.map((char, idx) => {
        return (
          <Box key={idx} display="inline-block" px={char === " " ? spacing : 0}>
            <ScrollAnimation
              animateIn={anim}
              animateOnce={runOnce}
              delay={idx * 100 + delay}
            >
              <Box
                display="inline-block"
                color={color}
                fontFamily={`${fontFam} !important`}
              >
                {char}
              </Box>
            </ScrollAnimation>
          </Box>
        );
      })}
    </Box>
  );
};

export default TextAnimator;
