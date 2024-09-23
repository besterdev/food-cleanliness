"use client";

import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import Image from "next/image";

import data from "@/data/restaurant.json";

import SearchInput from "@/components/SearchInput";
import Card from "@/components/Card";

import { restaurant } from "@/types/restaurants";

export default function Home() {
  const [search, setSearch] = useState("");

  const [restaurants, setRestaurants] = useState<restaurant[]>(
    data.restaurants,
  );

  const debouncedSearchTerm = useDebounce(search, 500);

  const searchRestaurantByName = useCallback(() => {
    const filteredRestaurants = data.restaurants.filter((restaurant) =>
      restaurant.name.includes(search),
    );

    setRestaurants(filteredRestaurants);
  }, [search, data.restaurants]);

  useEffect(() => {
    searchRestaurantByName();
  }, [debouncedSearchTerm]);

  return (
    <main className="xs:p-10 flex min-h-screen flex-col items-center p-6 xl:p-24">
      <Image
        src={"/images/logo.png"}
        alt="logo"
        width={0}
        height={0}
        className="mb-4 w-56 xl:w-72"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <SearchInput setSearch={(e) => setSearch(e.target.value)} />
      {restaurants.length === 0 && (
        <div className="mt-4 flex flex-col items-center justify-center gap-10">
          <Image
            src="/images/not-found.svg"
            alt="empty"
            width={0}
            height={0}
            className="h-52 w-52"
          />
          <p className="text-xl font-bold">No restaurants found</p>
        </div>
      )}
      <div className="mt-4 grid w-full grid-cols-1 gap-3 xl:grid-cols-3 xl:gap-10">
        {restaurants?.map((restaurant, i) => (
          <Card key={i} restaurant={restaurant} />
        ))}
      </div>
    </main>
  );
}
