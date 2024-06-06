import { useEffect, useState } from "react";
import Link from "next/link";
import { Person } from "@/utils/types";
import { Heading, Box } from "@chakra-ui/react";
import useCompleteQuery from "@/queries/react-query/complete";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <>
      <Projects />
    </>
  );
}
