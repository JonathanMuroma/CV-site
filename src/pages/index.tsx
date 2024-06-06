import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Career from "@/components/Career";
// import ProjectSwiper from "@/components/ProjectSwiper";

import CtaBanner from "@/components/CtaBanner";
import { CEREAL_DARK_GREEN } from "@/utils/constants";
import SkillList from "@/components/SkillList";
import LogoBanner from "@/components/LogoBanner";

const HomePage: NextPage = () => {
  return (
    <Box>
      <Hero
        title="Jonathan Muroma"
        subtext="Web/software developer"
        backgroundCol={CEREAL_DARK_GREEN}
        color="white"
      />
      <AboutMe
        imgPath="images/stock_portrait.jpg"
        title="About Me"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <Career />
      <SkillList />
      <LogoBanner />
      {/* <ProjectSwiper /> */}
      <CtaBanner
        title="CHECK THE PROJECT CODE ON GITHUB"
        text="TESTI TEXTI KLIKKAA NAPPULAA!"
        link="https://www.youtube.com/"
        buttonLabel="Check it out"
        // backgroundCol={CEREAL_DARK_GREEN}
        // textColor={CEREAL_LIGHT_BLUE}
      />
    </Box>
  );
};

export default HomePage;
