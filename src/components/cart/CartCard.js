import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const CartCard = ({ cartItem }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.tinyLogo} source={cartItem.url} />
      </View>
      <View style={styles.nameCount}>
        <Text>{cartItem?.name}</Text>
        <View style={styles.addToCart}>
          <TouchableOpacity style={styles.icon}>
            <Icon name="minus" size={10} color="#475E3E" />
          </TouchableOpacity>
          <Text style={styles.count}>1</Text>
          <TouchableOpacity style={styles.icon}>
            <Icon name="plus" size={10} color="#475E3E" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    padding: 10,
    backgroundColor: "#C9D9CD",
    flexDirection: "row",
    borderRadius: 10,
  },
  tinyLogo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },

  nameCount: {
    justifyContent: "space-between",
    paddingVertical: 8,
  },

  addToCart: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#F0F4EF",
    padding: 5,
    borderRadius: 20,
    width: 90,
  },
  icon: {
    backgroundColor: "#B5C9AD",
    height: 25,
    width: 25,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  count: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 4,
    fontSize: 18,
  },
});
export default CartCard;
