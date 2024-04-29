import { useEffect, useState } from "react";
import Link from "next/link";
import { Person } from "@/utils/types";
import PersonCard from "@/components/personCard";
import { Heading, Box, Input, Text } from "@chakra-ui/react";
import usePersonsQuery from "@/queries/react-query/persons";
import { useUpdatePerson } from "@/queries/react-query/updatePerson";

export default function Contact() {
  const [data, setData] = useState<Person[]>([]);
  const [input, setInput] = useState<string>("");
  const [chosen, setChosen] = useState<number>(-1);
  const { data: personData, isLoading } = usePersonsQuery();

  useEffect(() => {
    if (personData) {
      setData(personData);
    }
  }, [personData]);

  const { mutateAsync: updatePerson, isSuccess } = useUpdatePerson();

  return (
    <>
      <Heading as="h1" m="20px">
        Contact
      </Heading>
      {!isLoading ? (
        <div>
          {data.map((person, idx) => {
            return (
              <Box key={idx} onClick={() => setChosen(person.id)}>
                <PersonCard person={person} />
              </Box>
            );
          })}
        </div>
      ) : (
        <div>loading</div>
      )}
      <Box m="20px">
        <Text>{chosen}</Text>
        <Input
          type={"text"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Box
          as="button"
          border={"solid 2px black"}
          borderRadius="10px"
          p="5px"
          onClick={async () => {
            updatePerson({ id: chosen, fName: input });
            setChosen(-1);
            setInput("");
          }}
        >
          Send name change
        </Box>
      </Box>
      <Box cursor={"pointer"} m="20px">
        <Link href={"/"}>Home</Link>
      </Box>
    </>
  );
}
