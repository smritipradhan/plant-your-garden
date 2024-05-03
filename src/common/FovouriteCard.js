import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import useProductNavigation from "../components/hooks/useProductNavigation";

const FovouriteCard = ({ product, handleFavourite }) => {
  const navigation = useNavigation();
  const { handleProductDetailsNavigation } = useProductNavigation(navigation);
  const { url, name, price, id } = product;

  return (
    <TouchableOpacity
      onPress={(e) => handleProductDetailsNavigation(e, id)}
      style={styles.container}
    >
      <View style={styles.favouriteCardContainer}>
        <View>
          <Image style={styles.tinyLogo} source={url} />
        </View>
        <View>
          <View style={styles.nameDelete}>
            <Text style={styles.plantName}>{name}</Text>
            <TouchableOpacity onPress={(e) => handleFavourite(e, product)}>
              <Icon name="trash" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.price}>${price}</Text>
          </View>
          <TouchableOpacity style={styles.addToCartContainer}>
            <Icon name="shopping-cart" size={20} color="black" />
            <Text style={styles.addToCart}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#C9D9CD",
    height: 120,
    borderColor: "black",
  },
  favouriteCardContainer: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
  },
  tinyLogo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  nameDelete: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  plantName: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    fontWeight: "500",
  },
  price: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: "500",
  },
  addToCartContainer: {
    marginTop: 5,
    borderRadius: 50,
    flexDirection: "row",
    backgroundColor: "white",
    width: 120,
    padding: 5,
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCart: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FovouriteCard;
