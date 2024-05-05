import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../store/productSlice";

const useCartHandler = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.product);

  const addToCart = (_event, selectedPlantData) => {
    let updatedCart = [...cart];

    const exist = updatedCart.find(
      (plant) => plant?.id === selectedPlantData?.id
    );

    // If Cart already has plant, add count to existing
    if (exist) {
      updatedCart = updatedCart.map((plant) => {
        if (plant?.id === selectedPlantData?.id) {
          return { ...plant, count: plant?.count + 1 };
        } else {
          return plant;
        }
      });
    }
    // Else decrease the count
    else {
      plantData = { ...selectedPlantData, count: 1 };
      updatedCart.push(plantData);
    }

    dispatch(setCart(updatedCart));
  };

  const removeFromCart = (_event, selectedPlantData, type = "decreament") => {
    let updatedCart = [...cart];

    if (selectedPlantData?.count === 1 || type === "delete") {
      updatedCart = updatedCart?.filter(
        (item) => item.id !== selectedPlantData.id
      );
    } else {
      updatedCart = updatedCart.map((plant) => {
        if (plant.id === selectedPlantData?.id && plant.count > 0) {
          return { ...plant, count: plant?.count - 1 };
        } else {
          return { ...plant };
        }
      });
    }

    dispatch(setCart(updatedCart));
  };

  const deleteFromCart = (_event, selectedPlantData) => {};

  return { addToCart, removeFromCart, deleteFromCart };
};

export default useCartHandler;
