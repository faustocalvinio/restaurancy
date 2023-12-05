export interface Restaurant {
  id: string;
  name: string;
  image: string;
  description: string;
  score: number;
  ratings: number;
  address: string;
}

export interface RestaurantAsProp {
  restaurant: {
    id: string;
    name: string;
    image: string;
    description: string;
    score: number;
    ratings: number;
    address: string;
  };
}
