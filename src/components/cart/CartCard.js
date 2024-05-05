import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import useCartHandler from "../hooks/useCartHandler";

const CartCard = ({ cartItem }) => {
  const { addToCart, removeFromCart } = useCartHandler();

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.tinyLogo} source={cartItem.url} />
      </View>
      <View style={styles.cartDetails}>
        <View style={styles.nameCount}>
          <Text>{cartItem?.name}</Text>
          <View style={styles.addToCart}>
            <TouchableOpacity
              style={styles.icon}
              onPress={(e) => removeFromCart(e, cartItem)}
            >
              <Icon name="minus" size={10} color="#475E3E" />
            </TouchableOpacity>
            <Text style={styles.count}>{cartItem?.count}</Text>
            <TouchableOpacity
              style={styles.icon}
              onPress={(e) => addToCart(e, cartItem)}
            >
              <Icon name="plus" size={10} color="#475E3E" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.trashPrice}>
          <TouchableOpacity
            onPress={(e) => removeFromCart(e, cartItem, "delete")}
            style={styles.trashIcon}
          >
            <View>
              <Icon name="trash" size={25} color="#475E3E" />
            </View>
          </TouchableOpacity>

          <View>
            <Text>${cartItem?.price * cartItem?.count}</Text>
          </View>
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

  // Cart Details
  cartDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1,
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
  trashPrice: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  trashIcon: {
    padding: 5,
    backgroundColor: "#F0F4EF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    width: 40,
  },
});
export default CartCard;
