import SearchForm from "../Components/searchForm.jsx";
import { useLoaderData } from "react-router-dom";
import { customFetch } from "../custom.js";
import CocktailList from "../Components/CocktailList.jsx";
import { useQuery } from "@tanstack/react-query";

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const result = await customFetch.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      return result.data.drinks;
    },
  };
};

export const loader =
  (clientQuery) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "orange";
    await clientQuery.ensureQueryData(searchCocktailsQuery(searchTerm));
    return { searchTerm };
  };

export default function Landing() {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));
  return (
    <main>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </main>
  );
}
