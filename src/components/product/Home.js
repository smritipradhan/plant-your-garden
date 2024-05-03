import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import FilterChip from "../../common/FilterChip";
import ProductItemCard from "../../common/ProductItemCard";
import { setOriginalProductData } from "../../store/productSlice";
import useFavouriteHandler from "../hooks/useFavouriteHandler";
import { filterConfig } from "../hooks/useProductFilter";
import { setSelectedActivePage } from "../../store/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { handleFavourite } = useFavouriteHandler();
  const [filterConfiguration, setFilterConfiguration] = useState(filterConfig);
  const [itemSearchInput, setItemSearchInput] = useState("");

  const { originalProductData } = useSelector((state) => state.product);

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

    dispatch(setOriginalProductData(updatedFilterConfig));
  };

  const handleProfileClickNavigation = () => {
    dispatch(setSelectedActivePage("profile"));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* User Details */}
      <View>
        <View style={styles.useDetailsContainer}>
          <TouchableOpacity onPress={handleProfileClickNavigation}>
            <Image
              source={require("./../../../assets/profile.jpeg")}
              style={styles.profile}
            />
          </TouchableOpacity>

          <View style={styles.profileNotification}>
            <View>
              <Text style={styles.welcome}>Welcome </Text>
              <Text style={styles.nameOfUser}>Smriti !</Text>
            </View>
            <View style={styles.bellIconContainer}>
              <Icon
                name="bell-o"
                size={20}
                color="black"
                style={styles.bellIcon}
              />
              <View style={styles.noticationIcon}></View>
            </View>
          </View>
        </View>
      </View>

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
                  key={index}
                />
              );
            })}
        </View>
      </View>
      {/* Product List */}
      <ScrollView contentContainerStyle={styles.body}>
        {Array.isArray(originalProductData) &&
          originalProductData.length &&
          originalProductData.map((product, index) => {
            return (
              <ProductItemCard
                product={product}
                handleFavourite={handleFavourite}
                key={index}
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

  // User Details

  useDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileNotification: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignItems: "center",
  },

  profile: {
    marginVertical: 10,
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  bellIconContainer: {
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    backgroundColor: "#DEE8DC",
    padding: 10,
  },

  noticationIcon: {
    height: 10,
    width: 10,
    backgroundColor: "red",
    position: "absolute",
    right: 10,
    top: 10,
    borderRadius: 50,
  },
  welcome: {
    color: "#677080",
  },
  nameOfUser: {
    fontSize: 20,
    letterSpacing: 1,
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
