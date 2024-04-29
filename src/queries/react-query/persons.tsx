import { useQuery } from "react-query";

const usePersonsQuery = () => {
  const { data, isLoading, isRefetching, isFetching } = useQuery({
    queryFn: fetchFunc,
    queryKey: ["person"],
  });

  async function fetchFunc() {
    const personel = await fetch("/api/person");
    const data = await personel.json();

    return data;
  }

  return { data, isLoading, isRefetching, isFetching };
};

export default usePersonsQuery;
