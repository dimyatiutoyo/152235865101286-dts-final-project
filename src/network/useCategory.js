
import useSWR from "swr";
import apiClient from "../config/apiClient";

const fetcher = async (url) => {
  let response = await apiClient.get(url);
  console.log(response);
  return response.data?.results ?? [];
}

const useCategory = () => {
  const { data, error } = useSWR("/api/category/recipes", async (url) => {
    let response = await apiClient.get(url);
    console.log(response);
    return response.data?.results ?? [1, 2, 3, 4];
  });

  return {
    data: data,
    isLoadingg: !error && !data,
    isError: error,
  }
}
export default useCategory;