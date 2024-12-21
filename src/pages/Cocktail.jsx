import React from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import { customFetch } from "../custom.js";
import { useQuery } from "@tanstack/react-query";
const cocktailDetails = (id) => {
  return {
    queryKey: ["cocktailInfo", id],
    queryFn: async () => {
      const { data } = await customFetch.get(`/lookup.php?i=${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    await queryClient.ensureQueryData(cocktailDetails(params.id));
    const drinkId = params.id;
    return { drinkId };
  };

export default function Cocktail() {
  const { drinkId } = useLoaderData();
  const { data } = useQuery(cocktailDetails(drinkId));
  const { drinks: drink } = data;
  if (!drink) {
    return <Navigate to="/" />;
  }
  const {
    strDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strDrinkThumb,
    strInstructions,
  } = drink[0];

  const validIngredients = Object.keys(drink[0])
    .filter((ele) => ele.startsWith("strIngredient"))
    .filter((ele) => drink[0][ele] !== null)
    .map((ele) => drink[0][ele]);

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img
              className="w-full dark:hidden rounded-lg"
              src={strDrinkThumb}
              alt=""
            />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-extrabold text-gray-900  sm:text-3xl dark:text-white">
              {strDrink}
            </h1>
            <p className="  text-gray-500 dark:text-gray-400 text-start mt-3 flex items-center">
              <span className=" font-medium me-3 px-2 py-3 text-center rounded-lg text-green-950">
                Name :
              </span>
              {strDrink}
            </p>
            <p className="mb-6 text-gray-500 dark:text-gray-400 text-start mt-3">
              <span className=" font-medium me-3 px-2 py-3 text-center rounded-lg text-green-950">
                Category :
              </span>
              {strCategory}
            </p>
            <p className="mb-6 text-gray-500 dark:text-gray-400 text-start mt-6">
              <span className=" font-medium me-3 px-2 py-3 text-center rounded-lg text-green-950">
                Info :
              </span>
              {strAlcoholic}
            </p>
            <p className="mb-6 text-gray-500 dark:text-gray-400 text-start mt-6">
              <span className="font-medium me-3 px-2 py-3 text-center rounded-lg text-green-950">
                Glass :
              </span>
              {strGlass}
            </p>
            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
            <p className="text-gray-500 dark:text-gray-400 text-start mb-10">
              <span className="highlight font-medium me-3 px-2 py-3 text-center rounded-lg text-white">
                Ingredients :
              </span>
              {validIngredients.map((ing, index) => {
                return (
                  <span key={index}>
                    {ing}
                    {index + 1 < validIngredients.length ? ", " : "."}
                  </span>
                );
              })}
            </p>
            <p className="mb-6 text-gray-500 dark:text-gray-400 text-start leading-9">
              <span className="highlight font-medium me-3 px-2 py-3 text-center rounded-lg text-white">
                Instructions :{" "}
              </span>
              {strInstructions}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
