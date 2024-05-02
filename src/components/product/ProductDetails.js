import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const ProductDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.plantImageContainer}>
        <Image
          style={styles.tinyLogo}
          source={require(`./../../../assets/plants/plantFour.png`)}
        />
      </View>

      <View style={styles.bottomProductDetails}>
        <Text style={styles.productName}>String of Pearls</Text>
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
    height: 500,
    resizeMode: "contain",
    paddingVertical: 10,
  },
  plantImageContainer: {
    backgroundColor: "#B5C9AD",
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
});
export default ProductDetails;
