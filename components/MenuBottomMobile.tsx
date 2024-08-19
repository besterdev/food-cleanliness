"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Home, Search, CircleUserRound } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  {
    label: "Home",
    url: "/",
    logo: Home,
  },
  {
    label: "Search",
    url: "/",
    logo: Search,
  },
  {
    label: "Contract",
    url: "/",
    logo: CircleUserRound,
  },
];

const MenuBottomMobile = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 left-1/2 z-20 w-5/6 -translate-x-1/2 rounded-full border-gray-100/40 bg-white/50 p-3 shadow-lg backdrop-blur-md md:hidden lg:hidden">
      <div className="mx-auto grid h-full max-w-lg grid-cols-3">
        {links.map((link, i) => {
          const isActive = pathname === link.url;

          return (
            <Link
              key={i}
              className={cn(
                "group peer flex flex-col items-center text-xs font-medium opacity-70 transition-opacity first:ml-0",
                {
                  "text-primary": isActive,
                },
              )}
              href={link.url}
            >
              <link.logo className="peer-group-hover:opacity-100/1000 h-6 w-6" />
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MenuBottomMobile;
