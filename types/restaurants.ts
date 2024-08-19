export type restaurant = {
  name: string;
  image: string;
  phone: string;
  open: string;
  close: string;
  category: string[];
  menus: menus[];
};

type menus = {
  name: string;
  description: string;
  images: string[];
};
