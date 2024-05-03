import React from "react";
import { SafeAreaView, Text, ScrollView, StyleSheet } from "react-native";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state.product);
  console.log({ cart });
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.category}>Cart</Text>
      <ScrollView contentContainerStyle={styles.body}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
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
  },
});

export default Cart;
