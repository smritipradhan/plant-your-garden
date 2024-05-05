import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state.product);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculatTotalAmount = () => {
    let total = cart.reduce(
      (total, item) => total + item.count * item.price,
      0
    );
    total = Math.round(total);
    setTotalAmount(total);
  };

  useEffect(() => {
    calculatTotalAmount();
  }, [cart]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.category}>Cart</Text>
      <ScrollView style={styles.body}>
        {Array.isArray(cart) && cart.length !== 0 ? (
          cart.map((cartItem, index) => {
            return <CartCard cartItem={cartItem} key={index} />;
          })
        ) : (
          <>
            <Text>No Data</Text>
          </>
        )}
      </ScrollView>
      {cart.length !== 0 ? (
        <View style={styles.itemCheckoutPrice}>
          <View style={styles.itemTotal}>
            <Text>Total</Text>
            <Text>${totalAmount}</Text>
          </View>
          <View style={styles.itemTotal}>
            <Text>Discount</Text>
            <Text>-$10</Text>
          </View>
          <View style={styles.itemTotal}>
            <Text>Subtotal</Text>
            <Text>$70</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.letGetStarted}>
              <View style={styles.letsStartContainer}>
                <Text style={styles.letsStartButton}>Checkout</Text>
                <Icon
                  name="chevron-right"
                  size={15}
                  color="white"
                  style={styles.chevronRightIcon}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 20,
  },
  category: {
    fontSize: 20,
    fontWeight: "600",
  },
  body: {
    marginTop: 16,
    flexDirection: "column",
    gap: 10,
    paddingBottom: 100,
    overflowY: "scroll",
    maxHeight: 500,
  },

  // Item Total

  itemCheckoutPrice: {
    borderTopColor: "grey",
    borderTopWidth: 0.5,
  },

  itemTotal: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  // Checkout Button
  letsStartContainer: {
    borderRadius: 20,
    borderColor: "red",
    backgroundColor: "#6D7C68",
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 10,
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  letsStartButton: {
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

export default Cart;
