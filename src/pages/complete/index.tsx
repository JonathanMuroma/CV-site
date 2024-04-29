import { useEffect, useState } from "react";
import Link from "next/link";
import { Person } from "@/utils/types";
import { Heading, Box } from "@chakra-ui/react";
import useCompleteQuery from "@/queries/react-query/complete";

export default function Contact() {
  const [data, setData] = useState<Person[]>([]);

  const { data: completeData, isLoading } = useCompleteQuery();

  useEffect(() => {
    if (completeData) {
      setData(completeData);
    }
  }, [completeData]);

  return (
    <>
      <Heading as="h1" m="20px">
        Complete
      </Heading>
      {!isLoading ? (
        <div>
          {data.map((person, idx) => {
            return (
              <Box key={idx}>
                {person.first_name} {person.car && person.car.model}
              </Box>
            );
          })}
        </div>
      ) : (
        <div>loading</div>
      )}
      <Box cursor={"pointer"} m="20px">
        <Link href={"/"}>Home</Link>
      </Box>
    </>
  );
}
