import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedActivePage } from "../store/productSlice";
import useBottomNavigationConfig from "./hooks/useBottomNavigationConfig";

const ProductList = () => {
  const dispatch = useDispatch();
  const { bottomNavigationConfig } = useBottomNavigationConfig();
  const { selectedActivePage } = useSelector((state) => state.product);

  const handleActiveNavigation = (_event, navigationItem) => {
    dispatch(setSelectedActivePage(navigationItem?.name));
  };

  const activeComponent = bottomNavigationConfig.filter((navigationItem) => {
    return navigationItem.name === selectedActivePage;
  })[0].component;

  return (
    <>
      {/* Active Page */}
      {activeComponent}

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        {bottomNavigationConfig.map((navigationItem, index) => {
          return (
            <TouchableOpacity
              onPress={(e) => handleActiveNavigation(e, navigationItem)}
              key={index}
            >
              <View
                style={styles.navigationButton}
                backgroundColor={
                  navigationItem.name === selectedActivePage
                    ? "#B5C9AD"
                    : "white"
                }
              >
                <Icon name={navigationItem.icon} size={25} color="#475E3E" />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  // Bottom Navigation
  navigationButton: {
    backgroundColor: "#B5C9AD",
    padding: 5,
    borderRadius: 20,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  bottomNavigation: {
    height: 70,
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderStartEndRadius: 30,
    borderStartStartRadius: 30,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 11,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 50,
    justifyContent: "space-between",
  },
});

export default ProductList;
