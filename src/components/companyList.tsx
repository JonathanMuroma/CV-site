import React from "react";
import { Box } from "@chakra-ui/react";

interface CompanyList {}

//Create a company list like in tecci, to make it more "professional"
//Career is still small, so this could inflate the look more with company sites I've worked on
//Put almost any and every you've ever touched here

const companies = [
  {
    name: "Elfving Forteco",
    logo: "",
  },
  {
    name: "Faba",
    logo: "",
  },
  {
    name: "Lauritzon",
    logo: "",
  },
  {
    name: "Ziirto",
    logo: "",
  },
  {
    //Turun yliopisto??
    name: "TYY",
    logo: "",
  },
  {
    name: "Tectis",
    logo: "",
  },
  {
    name: "Puumerkki",
    logo: "",
  },
  {
    name: "Betoni",
    logo: "",
  },
  {
    name: "Cushman & wakefield",
    logo: "",
  },
  {
    name: "Rokotenyt",
    logo: "",
  },
  {
    name: "Tecci",
    logo: "",
  },
  {
    name: "Kahviklubi",
    logo: "",
  },
];

const CompanyList: React.FC<CompanyList> = ({}) => {
  return <Box></Box>;
};

export default CompanyList;
