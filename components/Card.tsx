import React from "react";
import Image from "next/image";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

import { restaurant } from "@/types/restaurants";

interface CardProps {
  restaurant: restaurant;
}

const Card = ({ restaurant }: CardProps) => {
  return (
    // <div className="group relative flex h-[180px] w-full cursor-pointer flex-col gap-4 overflow-hidden rounded-lg border shadow-lg xl:h-[350px]">
    //   <div className="relative h-full w-full">
    //     <div className="absolute top-0 z-20 h-full w-full bg-black/30"></div>
    //     <Image
    //       src={restaurant.image}
    //       alt={restaurant.name}
    //       fill
    //       className="scale-100 object-cover transition-transform group-hover:scale-110"
    //     />
    //   </div>

    //   <div className="absolute bottom-0 z-20 p-4">
    //     <p className="font-bold text-white xl:text-2xl">{restaurant.name}</p>
    //     <div className="mt-4 hidden gap-2 xl:flex">
    //       {restaurant.category?.map((category, i) => (
    //         <div key={i} className="rounded-full bg-primary px-2 py-1">
    //           <p className="text-sm font-bold text-white">{category}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <Drawer>
      <DrawerTrigger>
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
      </DrawerTrigger>
      <DrawerContent>
        {restaurant.verified ? (
          <div className="flex w-full items-center justify-center">
            {/* <Image
              className="rounded-lg"
              src={restaurant.certificate}
              alt={restaurant.name}
              width={350}
              height={300}
            /> */}
            <Image
              src={restaurant.certificate}
              alt={restaurant.name}
              width={350}
              height={300}
              className="mb-5 rounded-xl xl:h-auto xl:w-auto"
              priority={true}
            />
          </div>
        ) : null}
        <DrawerHeader className="flex flex-col items-center justify-center gap-4 text-center">
          <DrawerTitle className="text-center">Approve Certificate</DrawerTitle>
          <DrawerDescription className="text-center xl:w-1/2">
            This certificate, issued by Pevadee Co. Ltd, confirms that{" "}
            {restaurant.name} Restaurant in Bangkok met the highest cleanliness
            and hygiene standards as of August 1, 2022, with the certification
            valid until August 1, 2023.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex items-center justify-center">
          <DrawerClose asChild>
            <Button className="w-full xl:w-1/3" onClick={() => null}>
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Card;
