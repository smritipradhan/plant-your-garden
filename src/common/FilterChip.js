import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FilterChip = ({ filterItem, index, handleFilterSelection }) => {
  const { title, isActive } = filterItem;

  return (
    <TouchableOpacity onPress={(e) => handleFilterSelection(e, title)}>
      <View style={isActive ? styles.activeContainer : styles.container}>
        <Text style={isActive ? styles.activeTitle : styles.title}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "#475E3E",
    borderWidth: 1,
    color: "#475E3E",
  },
  activeContainer: {
    padding: 10,
    backgroundColor: "#475E3E",
    borderRadius: 20,
  },
  title: {
    fontWeight: "500",
  },
  activeTitle: {
    color: "white",
    fontWeight: "500",
  },
});
export default FilterChip;
