export type restaurant = {
  name: string;
  image: string;
  phone: string;
  open: string;
  close: string;
  location: location;
  verified: boolean;
  certificate: string;
  category: string[];
  menus: menus[];
};

type menus = {
  name: string;
  description: string;
  images: string[];
};

type location = {
  lat: number;
  lng: number;
};
