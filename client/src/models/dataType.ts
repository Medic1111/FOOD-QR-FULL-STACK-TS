export type GenInfo = {
  resName: string;
  resHours: string;
  resNumber: string;
  resAddress: string;
};

export type DishInfo = {
  dish: string;
  description: string;
  price: string;
};

export type CatInfo = {
  category: string;
  dishes: DishInfo[];
};

export type Menu = CatInfo[] | [];
