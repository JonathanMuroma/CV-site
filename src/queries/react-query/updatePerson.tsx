import { useMutation, useQueryClient } from "react-query";

interface body {
  id: number;
  fName: string;
}

const updatePerson = (body: body) => {
  return fetch(`/api/person/${body.id}`, {
    method: "PUT",
    credentials: "include",
    body: JSON.stringify({
      first_name: body.fName,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

export const useUpdatePerson = () => {
  const queryClient = useQueryClient();
  return useMutation(updatePerson, {
    onSuccess: () => {
      queryClient.invalidateQueries(["person"]);
    },
  });
};
