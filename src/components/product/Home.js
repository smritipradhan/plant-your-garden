import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import FilterChip from "../../common/FilterChip";
import ProductItemCard from "../../common/ProductItemCard";
import { filterConfig } from "../hooks/useProductFilter";
import uuid from "react-native-uuid";

const Home = () => {
  const [filterConfiguration, setFilterConfiguration] = useState(filterConfig);
  const [itemSearchInput, setItemSearchInput] = useState("");

  const [productData, setProductData] = useState([
    {
      id: uuid.v4(),
      url: require(`./../../../assets/plants/plantOne.png`),
      name: "Jade Plant",
      price: "40.00",
      isFavourite: true,
    },
    {
      id: uuid.v4(),
      url: require(`./../../../assets/plants/cactus.png`),
      name: "Cactus",
      price: "80.00",
      isFavourite: false,
    },
    {
      id: uuid.v4(),
      url: require(`./../../../assets/plants/plantThree.png`),
      name: "Swiss cheese plant",
      price: "29.99",
      isFavourite: false,
    },
    {
      id: uuid.v4(),
      url: require(`./../../../assets/plants/plantFour.png`),
      name: "Hanging Jade",
      price: "20.00",
      isFavourite: false,
    },
    {
      id: uuid.v4(),
      url: require(`./../../../assets/plants/plantFive.png`),
      name: "Jade Plant",
      price: "39.99",
      isFavourite: false,
    },
    {
      id: uuid.v4(),
      url: require(`./../../../assets/plants/plantSix.png`),
      name: "Jade Plant",
      price: "89.99",
      isFavourite: false,
    },
    {
      id: uuid.v4(),
      url: require(`./../../../assets/plants/plantOne.png`),
      name: "Jade Plant",
      price: "99.99",
      isFavourite: false,
    },
    {
      id: uuid.v4(),
      url: require(`./../../../assets/plants/plantTwo.png`),
      name: "Jade Plant",
      price: "40.00",
      isFavourite: false,
    },
    {
      id: uuid.v4(),
      url: require(`./../../../assets/plants/plantThree.png`),
      name: "Jade Plant",
      price: "89.99",
      isFavourite: false,
    },
    {
      id: uuid.v4(),
      url: require(`./../../../assets/plants/plantFour.png`),
      name: "Jade Plant",
      price: "40.00",
      isFavourite: false,
    },
  ]);
  const handleSearchInput = (text) => {
    setItemSearchInput(text);
  };
  const handleFilterSelection = (_e, title) => {
    let updatedFilterConfig = [...filterConfiguration];
    updatedFilterConfig = updatedFilterConfig.map((filterElement) => {
      if (filterElement.title === title) {
        return { ...filterElement, isActive: true };
      } else return { ...filterElement, isActive: false };
    });

    setFilterConfiguration(updatedFilterConfig);
  };

  const handleFavourite = (e, favouriteProduct) => {
    let updatedProduct = [...productData];
    updatedProduct = updatedProduct.map((product) => {
      if (product.id === favouriteProduct.id) {
        return { ...product, isFavourite: !product.isFavourite };
      } else {
        return { ...product };
      }
    });

    setProductData(updatedProduct);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchbar}>
        <Icon name="search" size={20} color="#475E3E" />
        <TextInput onChangeText={handleSearchInput} placeholder="Search" />
      </View>

      {/* Tab Component */}
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>Category</Text>
        <View style={styles.tabContainer}>
          {Array.isArray(filterConfiguration) &&
            filterConfiguration.length &&
            filterConfiguration.map((filterItem, index) => {
              return (
                <FilterChip
                  filterItem={filterItem}
                  index={index}
                  handleFilterSelection={handleFilterSelection}
                />
              );
            })}
        </View>
      </View>
      {/* Product List */}
      <ScrollView contentContainerStyle={styles.body}>
        {Array.isArray(productData) &&
          productData.length &&
          productData.map((product) => {
            return (
              <ProductItemCard
                product={product}
                handleFavourite={handleFavourite}
              />
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },

  header: {
    backgroundColor: "#6200EF",
    padding: 20,
  },

  headerText: {
    color: "white",
    fontSize: 20,
  },
  body: {
    flexDirection: "row",
    gap: 15,
    flexWrap: "wrap",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 60,
  },

  // Search Bar Styles
  searchbar: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },

  // Tab Styles
  categoryContainer: {
    marginTop: 15,
  },
  category: {
    fontSize: 20,
    fontWeight: "600",
  },
  tabContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
});
export default Home;
