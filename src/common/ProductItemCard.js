import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import useProductNavigation from "../components/hooks/useProductNavigation";
import useCartHandler from "../components/hooks/useCartHandler";

const ProductItemCard = ({ product, handleFavourite }) => {
  const { url, name, price, isFavourite, id } = product;
  const { addToCart } = useCartHandler();

  const navigation = useNavigation();
  const { handleProductDetailsNavigation } = useProductNavigation(navigation);

  const containerDynamicStyle = {
    backgroundColor: isFavourite ? "#CEE0CA" : "#879781",
  };

  return (
    <TouchableOpacity
      onPress={(e) => handleProductDetailsNavigation(e, id)}
      style={styles.container}
    >
      <View style={styles.topPart}>
        <View style={styles.heartImage}>
          <TouchableOpacity onPress={(e) => handleFavourite(e, product)}>
            <View style={[styles.heartIconContainer, containerDynamicStyle]}>
              <Icon
                name="heart"
                size={15}
                color={isFavourite ? "red" : "white"}
              />
            </View>
          </TouchableOpacity>
          <Image style={styles.tinyLogo} source={url} />
        </View>
        <View style={styles.itemDetails}>
          <View>
            <Text
              style={styles.plantName}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {name}
            </Text>
            <View style={styles.addToCartPrice}>
              <View style={styles.plantPrice}>
                <Text>${price}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={(e) => {
          addToCart(e, product);
        }}
      >
        <View style={styles.addToCart}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
          <Icon name="shopping-cart" size={20} color="#576850" />
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    flex: 1,
    minWidth: 150,
    maxWidth: 170,
    justifyContent: "center",
    backgroundColor: "#CEE0CA",
    borderColor: "#839D7C",
    borderWidth: 1,
  },
  topPart: {
    paddingTop: 8,
  },
  heartImage: {
    paddingHorizontal: 8,
  },
  tinyLogo: {
    width: null,
    height: 110,
    resizeMode: "contain",
  },
  itemDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#DEEFDA",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  plantName: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: "500",
    maxWidth: 130,
  },

  addToCartPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  plantPrice: {
    marginTop: 4,
  },
  plusIcon: {
    // backgroundColor: "#879781",
    padding: 5,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  heartIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  // Bottom
  // Add to Cart
  addToCart: {
    padding: 8,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    borderTopColor: "#B5C9AD",
    borderTopWidth: 1,
    borderBottomStartEndRadius: 10,
    // backgroundColor: "#DEEFDA",
  },
  addToCartText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#3F423E",
    letterSpacing: 1,
  },
});
export default ProductItemCard;
