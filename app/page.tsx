"use client";

import { useState } from "react";
import Image from "next/image";

import data from "@/data/restaurant.json";

import SearchInput from "@/components/SearchInput";

import { restaurant } from "@/types/restaurants";
import Card from "@/components/Card";

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
          <Card key={i} restaurant={restaurant} />
        ))}
      </div>
    </main>
  );
}
