import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedPlant,
  setSelectedPlantData,
} from "../../store/productSlice";

const useProductNavigation = (navigation) => {
  const dispatch = useDispatch();
  const { originalProductData } = useSelector((state) => state.product);

  // Function to handle Navigation
  const handleProductDetailsNavigation = (_event, id) => {
    const selectedPlantData =
      originalProductData.filter((product) => product.id === id)?.[0] ?? {};
    dispatch(setSelectedPlant(id));
    dispatch(setSelectedPlantData(selectedPlantData));

    navigation.navigate("ProductDetails");
  };

  return { handleProductDetailsNavigation };
};

export default useProductNavigation;
