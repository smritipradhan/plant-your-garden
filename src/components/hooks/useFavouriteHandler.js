import { useDispatch, useSelector } from "react-redux";
import { setOriginalProductData } from "../../store/productSlice";

const useFavouriteHandler = () => {
  const dispatch = useDispatch();
  const { originalProductData } = useSelector((state) => state.product);

  const handleFavourite = (_event, favouriteProduct) => {
    let updatedProduct = [...originalProductData];
    updatedProduct = updatedProduct.map((product) => {
      if (product.id === favouriteProduct.id) {
        return { ...product, isFavourite: !product.isFavourite };
      } else {
        return { ...product };
      }
    });

    dispatch(setOriginalProductData(updatedProduct));
  };

  return { handleFavourite };
};

export default useFavouriteHandler;
