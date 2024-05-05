import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../store/productSlice";
import useCartHandler from "../hooks/useCartHandler";

const ProductDetails = () => {
  const { addToCart, removeFromCart } = useCartHandler();
  const { cart, selectedPlantData } = useSelector((state) => state.product);
  const { name, description, price, url } = selectedPlantData;
  const selectedPlantcount =
    cart.find((item) => selectedPlantData.id === item.id)?.count || 0;

  return (
    <View style={styles.container}>
      <View style={styles.plantImageContainer}>
        <Image style={styles.tinyLogo} source={url} />
      </View>

      <View style={styles.bottomProductDetails}>
        <Text style={styles.productName}>{name}</Text>
        <View style={styles.priceAddToCart}>
          <View style={styles.priceView}>
            <Text style={styles.price}>${price}</Text>
            <Icon name="star" size={16} color="#F5CA31" />
          </View>

          <View style={styles.addToCart}>
            <TouchableOpacity
              style={styles.icon}
              onPress={(e) => removeFromCart(e, selectedPlantData)}
            >
              <Icon name="minus" size={16} color="#475E3E" />
            </TouchableOpacity>
            <Text style={styles.count}>{selectedPlantcount}</Text>
            <TouchableOpacity
              style={styles.icon}
              onPress={(e) => addToCart(e, selectedPlantData)}
            >
              <Icon name="plus" size={16} color="#475E3E" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.aboutPlantHeader}>About Plant</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <TouchableOpacity onPress={(e) => addToCart(e, selectedPlantData)}>
          <View style={styles.addToCartContainer}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
            <Icon
              name="shopping-cart"
              size={15}
              color="white"
              style={styles.chevronRightIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  tinyLogo: {
    width: null,
    height: 400,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  plantImageContainer: {
    backgroundColor: "#CEE0CA",
    height: 900,
    width: "100%",
  },
  bottomProductDetails: {
    height: 400,
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderStartEndRadius: 30,
    borderStartStartRadius: 30,
    backgroundColor: "white",
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 11,
    padding: 20,
  },
  productName: {
    fontSize: 25,
    fontWeight: "500",
  },
  priceAddToCart: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceView: {
    justifyContent: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: "500",
  },
  addToCart: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#F0F4EF",
    padding: 8,
    borderRadius: 20,
  },
  icon: {
    backgroundColor: "#CEE0CA",
    padding: 10,
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  count: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 8,
    fontSize: 20,
  },

  aboutPlantHeader: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 20,
    letterSpacing: 1,
  },
  description: {
    marginTop: 10,
    letterSpacing: 0.2,
  },

  addToCartContainer: {
    borderRadius: 30,
    borderColor: "red",
    backgroundColor: "#475E3E",
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 20,
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartText: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
  },
  chevronRightIcon: {
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
});
export default ProductDetails;
