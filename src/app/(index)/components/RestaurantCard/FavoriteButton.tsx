"use client";

import {useState} from "react";

import {type RestaurantAsProp} from "@/interfaces/types";

export default function FavoriteButton({restaurant}: RestaurantAsProp) {
  const [isFavourite, setIsFavourite] = useState(
    window.localStorage.getItem("favorites")?.includes(restaurant.id),
  );

  function setFavouriteRestaurant() {
    window.localStorage.setItem("favorites", `[${restaurant.id}]`);
    setIsFavourite(true);
  }

  return (
    <button
      className={`text-xl text-red-500 ${isFavourite ? "opacity-100" : "opacity-20"}`}
      type="button"
      onClick={setFavouriteRestaurant}
    >
      ♥
    </button>
  );
}
