import React from "react";
import CocktailItem from "./CocktailItem";

export default function CocktailList({ drinks }) {
  if (!drinks) {
    return <h4 className="text-center">no matching cocktails found</h4>;
  }
  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          {drinks.map((drink) => {
            return <CocktailItem key={drink.idDrink} drink={drink} />;
          })}
        </div>
      </div>
    </section>
  );
}
