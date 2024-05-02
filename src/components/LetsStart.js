import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const LetsStart = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("ProductList"); // Navigate to AnotherScreen
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.tinyLogo}
          source={require(`./../../assets/plants/plantThree.png`)}
        />
      </View>
      <View style={styles.createYourGardenText}>
        <Text style={styles.text}>Create Your</Text>
        <Text style={styles.text}>Own Garden!</Text>
      </View>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.letGetStarted}>
          <View style={styles.letsStartContainer}>
            <Text style={styles.letsStartButton}>Let's Start</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    backgroundColor: "#F0F4EF",
    paddingTop: 30,
    paddingBottom: 20,
    borderEndStartRadius: 999,
    borderEndEndRadius: 999,
  },
  tinyLogo: {
    width: null,
    height: 500,
    resizeMode: "contain",
    paddingVertical: 30,
  },
  createYourGardenText: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "600",
  },
  letGetStarted: {
    justifyContent: "center",
    alignItems: "center",
  },
  letsStartContainer: {
    borderRadius: 30,
    borderColor: "red",
    backgroundColor: "#475E3E",
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 50,
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

export default LetsStart;
