import React from "react";
import Image from "next/image";

import { restaurant } from "@/types/restaurants";

interface CardProps {
  restaurant: restaurant;
}

const Card = ({ restaurant }: CardProps) => {
  return (
    <div className="group relative flex h-[180px] w-full cursor-pointer flex-col gap-4 overflow-hidden rounded-lg border shadow-lg xl:h-[350px]">
      <div className="relative h-full w-full">
        <div className="absolute top-0 z-20 h-full w-full bg-black/30"></div>
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="scale-100 object-cover transition-transform group-hover:scale-110"
        />
      </div>

      <div className="absolute bottom-0 z-20 p-4">
        <p className="font-bold text-white xl:text-2xl">{restaurant.name}</p>
        <div className="mt-4 hidden gap-2 xl:flex">
          {restaurant.category?.map((category, i) => (
            <div key={i} className="rounded-full bg-primary px-2 py-1">
              <p className="text-sm font-bold text-white">{category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
