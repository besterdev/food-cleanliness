"use client";

import { useState } from "react";
import Image from "next/image";

import data from "@/data/restaurant.json";

import SearchInput from "@/components/SearchInput";

import { restaurant } from "@/types/restaurants";

export default function Home() {
  const [search, setSearch] = useState("");

  const [restaurants, setRestaurants] = useState<restaurant[]>([]);

  const searchRestaurantByName = () => {
    const filteredRestaurants = data.restaurants.filter((restaurant) =>
      restaurant.name.includes(search),
    );

    setRestaurants(filteredRestaurants);
  };

  return (
    <main className="xs:p-10 flex min-h-screen flex-col items-center p-10 xl:p-24">
      <Image
        src={"/images/logo.png"}
        alt="logo"
        width={200}
        height={200}
        className="mb-10"
      />
      <SearchInput
        setSearch={(e) => setSearch(e.target.value)}
        onSearch={() => searchRestaurantByName()}
      />

      <div className="mt-10 grid w-full grid-cols-2 gap-3 xl:grid-cols-3 xl:gap-10">
        {restaurants?.map((restaurant, i) => (
          <div
            className="relative flex h-[180px] w-full cursor-pointer flex-col gap-4 overflow-hidden rounded-lg border shadow-lg xl:h-[350px]"
            key={i}
          >
            <div className="relative h-full w-full">
              <div className="absolute top-0 z-20 h-full w-full bg-black/30"></div>
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                fill
                className="scale-100 object-cover hover:scale-110"
              />
            </div>

            <div className="absolute bottom-0 z-20 p-4">
              <p className="font-bold text-white xl:text-2xl">
                {restaurant.name}
              </p>
              <div className="mt-4 hidden gap-2 xl:flex">
                {restaurant.category?.map((category, i) => (
                  <div key={i} className="rounded-full bg-primary px-2 py-1">
                    <p className="text-sm font-bold text-white">{category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
