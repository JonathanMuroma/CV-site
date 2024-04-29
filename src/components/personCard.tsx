import { Person } from "@/utils/types";
import { Box, Text, Heading } from "@chakra-ui/react";

interface PersonCard {
  person: Person;
}

const PersonCard: React.FC<PersonCard> = ({ person }) => {
  return (
    <Box border={"solid 1px black"} p="10px" m="20px">
      <Heading as="h2">
        {person.id} {person.first_name} {person.last_name}
      </Heading>
      <Text>Gender: {person.gender}</Text>
      <Text>Email: {person.email ? person.email : "None"}</Text>
      <Text>Country of birth: {person.country_of_birth}</Text>
      <Text>Date of birth: {person.date_of_birth}</Text>
    </Box>
  );
};

export default PersonCard;
