import { useQuery } from "react-query";

const useCompleteQuery = () => {
  const { data, isLoading, isRefetching, isFetching } = useQuery({
    queryFn: fetchFunc,
    queryKey: ["complete"],
  });

  async function fetchFunc() {
    const personel = await fetch("/api/complete");
    const data = await personel.json();

    return data;
  }

  return { data, isLoading, isRefetching, isFetching };
};

export default useCompleteQuery;
