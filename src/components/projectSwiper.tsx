import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Title from "./title";

interface ProjectSwiper {}

const componentData = [
  {
    title: "Title",
    text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    background: "images/hero_img.jpg",
  },
  {
    title: "Title",
    text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    background: "images/hero_img.jpg",
  },
  {
    title: "Title",
    text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    background: "images/hero_img.jpg",
  },
];

const ProjectSwiper: React.FC<ProjectSwiper> = ({}) => {
  return (
    <Box>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
      >
        {componentData.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <Box
              bgImage={slide.background}
              backgroundPosition="center"
              backgroundRepeat={"no-repeat"}
              backgroundSize="cover"
              backgroundAttachment={"fixed"}
            >
              <Box
                w="100%"
                h="80vh"
                color={"white"}
                pt="130px"
                background={"rgba(255, 255, 255, 0.5)"}
                px="15px"
              >
                <Box mb="40px">
                  <Title title={slide.title} />
                </Box>
                <Box w="100%">
                  <Flex justifyContent="center" alignItems={"start"} w="100%">
                    <Box maxW={"550px"}> {slide.text}</Box>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProjectSwiper;
