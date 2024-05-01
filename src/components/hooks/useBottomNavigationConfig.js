import React, { useMemo } from "react";
import Home from "./../product/Home.js";
import Cart from "./../cart/Cart.js";
import Profile from "./../profile/Profile.js";
import Favourite from "./../favourite/Favourite.js";

const useBottomNavigationConfig = () => {
  const bottomNavigationConfig = useMemo(() => {
    const config = [
      {
        name: "home",
        icon: "home",
        component: <Home />,
      },
      {
        name: "favourite",
        icon: "heart",
        component: <Home />,
        component: <Favourite />,
      },
      {
        name: "cart",
        icon: "shopping-cart",
        component: <Cart />,
      },
      {
        name: "profile",
        icon: "user",
        component: <Profile />,
      },
    ];
    return config;
  });

  return { bottomNavigationConfig };
};

export default useBottomNavigationConfig;
