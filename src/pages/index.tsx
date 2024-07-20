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
// import CtaRow from "@/components/CtaRow";

const HomePage: NextPage = () => {
  return (
    <Box>
      <Hero
        title="Jonathan Muroma"
        subtext="Web/software developer"
        backgroundCol={CEREAL_DARK_GREEN}
        color="white"
      />
      <AboutMe imgPath="images/portrait.jpeg" title="About Me" />
      <Career />
      <SkillList />
      <LogoBanner />
      {/* <ProjectSwiper /> */}
      {/* <CtaRow /> */}
      <CtaBanner
        title="Check the code on github!"
        text="Take a look at this sites github page and look into the code and how this was made."
        link="https://www.youtube.com/"
        buttonLabel="Check it out!"
      />
    </Box>
  );
};

export default HomePage;
