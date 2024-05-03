import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import useProductNavigation from "../components/hooks/useProductNavigation";

const ProductItemCard = ({ product, handleFavourite }) => {
  const { url, name, price, isFavourite, id } = product;

  const navigation = useNavigation();
  const { handleProductDetailsNavigation } = useProductNavigation(navigation);

  const containerDynamicStyle = {
    backgroundColor: isFavourite ? "#B5C9AD" : "#879781",
  };

  return (
    <TouchableOpacity
      onPress={(e) => handleProductDetailsNavigation(e, id)}
      style={styles.container}
    >
      <View>
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
        <View style={styles.itemDetails}>
          <View>
            <Text style={styles.plantName}>{name}</Text>
            <View style={styles.plantPrice}>
              <Text>${price}</Text>
            </View>
          </View>
          <View style={styles.plusIcon}>
            <Icon name="plus" size={18} color="white" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
    flex: 1,
    minWidth: 150,
    justifyContent: "center",
    backgroundColor: "#B5C9AD",
  },
  tinyLogo: {
    width: null,
    height: 150,
    resizeMode: "contain",
  },
  itemDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  plantName: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: "500",
  },
  plantPrice: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
    backgroundColor: "white",
    borderRadius: 15,
    width: 80,
  },
  plusIcon: {
    backgroundColor: "#B5C9AD",
    padding: 5,
    borderRadius: 25,
  },
  heartIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ProductItemCard;
