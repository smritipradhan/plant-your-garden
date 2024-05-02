import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import FovouriteCard from "../../common/FovouriteCard";
import useFavouriteHandler from "../hooks/useFavouriteHandler";

const Favourite = () => {
  const { originalProductData } = useSelector((state) => state.product);
  const { handleFavourite } = useFavouriteHandler();

  const favouriteProducts = originalProductData.filter(
    (item) => item.isFavourite
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.category}>Favourites</Text>
      <ScrollView contentContainerStyle={styles.body}>
        {Array?.isArray(favouriteProducts) && favouriteProducts?.length ? (
          favouriteProducts?.map((product, index) => {
            return (
              <FovouriteCard
                product={product}
                handleFavourite={handleFavourite}
                key={index}
              />
            );
          })
        ) : (
          <Text>No Data</Text>
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
    marginTop: 20,
    flexDirection: "column",
    gap: 15,
    paddingBottom: 60,
  },
});

export default Favourite;
