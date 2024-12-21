import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        <div className="text-start flex flex-col justify-center px-10 py-10">
          <h2 className="text-4xl capitalize mb-7 font-medium ">about us</h2>
          <p className="text-lg">
            Introducing "MixMaster," the ultimate party sidekick app that
            fetches cocktails from the hilarious Cocktails DB API. With a flick
            of your finger, you'll unlock a treasure trove of enchanting drink
            recipes that'll make your taste buds dance and your friends jump
            with joy. Get ready to shake up your mixology game, one fantastical
            mocktail at a time, and let the laughter and giggles flow!
          </p>
          <div>
            <div class="max-w-screen-xl  py-8 mx-auto text-center lg:px-5">
              <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                <div class="flex flex-col items-start justify-center">
                  <dt class="mb-2 text-3xl md:text-4xl font-extrabold">20k</dt>
                  <dd class="font-light text-gray-500 dark:text-gray-400">
                    customers
                  </dd>
                </div>
                <div class="flex flex-col items-start justify-center">
                  <dt class="mb-2 text-3xl md:text-4xl font-extrabold">300+</dt>
                  <dd class="font-light text-gray-500 dark:text-gray-400">
                    drinks
                  </dd>
                </div>
                <div class="flex flex-col items-start justify-center">
                  <dt class="mb-2 text-3xl md:text-4xl font-extrabold">14+</dt>
                  <dd class="font-light text-gray-500 dark:text-gray-400">
                    countries
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <Link to="/" className="link-btn w-60 mt-9">
            Explore Drinks
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="./undraw_refreshing_djbj.svg"
            className="hidden lg:block py-10 px-10"
            alt="about us"
          />
        </div>
      </div>
    </section>
  );
}
