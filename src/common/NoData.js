import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const NoDataScreen = ({ iconName, message }) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={50} style={styles.icon} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  icon: {
    color: "#888",
    marginBottom: 10,
  },
  message: {
    fontSize: 20,
    color: "#888",
  },
});

export default NoDataScreen;
