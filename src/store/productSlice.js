import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

const initialState = {
  originalProductData: [
    {
      id: uuid.v4(),
      url: require(`./../../assets/plants/plantOne.png`),
      name: "Jade Plant",
      price: "40.00",
      isFavourite: true,
      description:
        "The String of Pearls is a geopolitical hypothesis proposed by United States political researchers in 2004. The term refers to the network of Chinese military and commercial facilities and relationships",
    },
    {
      id: uuid.v4(),
      url: require(`./../../assets/plants/cactus.png`),
      name: "Cactus",
      price: "80.00",
      isFavourite: false,
      description:
        "The String of Pearls is a geopolitical hypothesis proposed by United States political researchers in 2004. The term refers to the network of Chinese military and commercial facilities and relationships",
    },
    {
      id: uuid.v4(),
      url: require(`./../../assets/plants/plantThree.png`),
      name: "Swiss cheese plant",
      price: "29.99",
      isFavourite: false,
      description:
        "The String of Pearls is a geopolitical hypothesis proposed by United States political researchers in 2004. The term refers to the network of Chinese military and commercial facilities and relationships",
    },
    {
      id: uuid.v4(),
      url: require(`./../../assets/plants/plantFour.png`),
      name: "Hanging Jade",
      price: "20.00",
      isFavourite: false,
      description:
        "The String of Pearls is a geopolitical hypothesis proposed by United States political researchers in 2004. The term refers to the network of Chinese military and commercial facilities and relationships",
    },
    {
      id: uuid.v4(),
      url: require(`./../../assets/plants/plantFive.png`),
      name: "Philodendron",
      price: "39.99",
      isFavourite: false,
      description:
        "The String of Pearls is a geopolitical hypothesis proposed by United States political researchers in 2004. The term refers to the network of Chinese military and commercial facilities and relationships",
    },
    {
      id: uuid.v4(),
      url: require(`./../../assets/plants/plantSix.png`),
      name: "Monstera",
      price: "89.99",
      isFavourite: false,
      description:
        "The String of Pearls is a geopolitical hypothesis proposed by United States political researchers in 2004. The term refers to the network of Chinese military and commercial facilities and relationships",
    },
    {
      id: uuid.v4(),
      url: require(`./../../assets/plants/plantOne.png`),
      name: "Jade Plant",
      price: "99.99",
      isFavourite: false,
      description:
        "The String of Pearls is a geopolitical hypothesis proposed by United States political researchers in 2004. The term refers to the network of Chinese military and commercial facilities and relationships",
    },
    {
      id: uuid.v4(),
      url: require(`./../../assets/plants/plantThree.png`),
      name: "Swiss cheese plant",
      price: "89.99",
      isFavourite: false,
      description:
        "The String of Pearls is a geopolitical hypothesis proposed by United States political researchers in 2004. The term refers to the network of Chinese military and commercial facilities and relationships",
    },
    {
      id: uuid.v4(),
      url: require(`./../../assets/plants/plantFour.png`),
      name: "String of Pearls",
      price: "40.00",
      isFavourite: false,
      description:
        "The String of Pearls is a geopolitical hypothesis proposed by United States political researchers in 2004. The term refers to the network of Chinese military and commercial facilities and relationships",
    },
  ],
  filteredProducts: [
    {
      id: uuid.v4(),
      url: require(`./../../assets/plants/plantOne.png`),
      name: "Jade Plant",
      price: "40.00",
      isFavourite: true,
      description:
        "The String of Pearls is a geopolitical hypothesis proposed by United States political researchers in 2004. The term refers to the network of Chinese military and commercial facilities and relationships",
    },
    {
      id: uuid.v4(),
      url: require(`./../../assets/plants/cactus.png`),
      name: "Cactus",
      price: "80.00",
      isFavourite: false,
      description:
        "The String of Pearls is a geopolitical hypothesis proposed by United States political researchers in 2004. The term refers to the network of Chinese military and commercial facilities and relationships",
    },
    {
      id: uuid.v4(),
      url: require(`./../../assets/plants/plantThree.png`),
      name: "Swiss cheese plant",
      price: "29.99",
      isFavourite: false,
      description:
        "The String of Pearls is a geopolitical hypothesis proposed by United States political researchers in 2004. The term refers to the network of Chinese military and commercial facilities and relationships",
    },
    {
      id: uuid.v4(),
      url: require(`./../../assets/plants/plantFour.png`),
      name: "Hanging Jade",
      price: "20.00",
      isFavourite: false,
      description:
        "The String of Pearls is a geopolitical hypothesis proposed by United States political researchers in 2004. The term refers to the network of Chinese military and commercial facilities and relationships",
    },
    {
      id: uuid.v4(),
      url: require(`./../../assets/plants/plantFive.png`),
      name: "Philodendron",
      price: "39.99",
      isFavourite: false,
      description:
        "The String of Pearls is a geopolitical hypothesis proposed by United States political researchers in 2004. The term refers to the network of Chinese military and commercial facilities and relationships",
    },
    {
      id: uuid.v4(),
      url: require(`./../../assets/plants/plantSix.png`),
      name: "Monstera",
      price: "89.99",
      isFavourite: false,
      description:
        "The String of Pearls is a geopolitical hypothesis proposed by United States political researchers in 2004. The term refers to the network of Chinese military and commercial facilities and relationships",
    },
    {
      id: uuid.v4(),
      url: require(`./../../assets/plants/plantOne.png`),
      name: "Jade Plant",
      price: "99.99",
      isFavourite: false,
      description:
        "The String of Pearls is a geopolitical hypothesis proposed by United States political researchers in 2004. The term refers to the network of Chinese military and commercial facilities and relationships",
    },
    {
      id: uuid.v4(),
      url: require(`./../../assets/plants/plantThree.png`),
      name: "Swiss cheese plant",
      price: "89.99",
      isFavourite: false,
      description:
        "The String of Pearls is a geopolitical hypothesis proposed by United States political researchers in 2004. The term refers to the network of Chinese military and commercial facilities and relationships",
    },
    {
      id: uuid.v4(),
      url: require(`./../../assets/plants/plantFour.png`),
      name: "String of Pearls",
      price: "40.00",
      isFavourite: false,
      description:
        "The String of Pearls is a geopolitical hypothesis proposed by United States political researchers in 2004. The term refers to the network of Chinese military and commercial facilities and relationships",
    },
  ],
  cart: [],
  selectedPlantId: "",
  selectedPlantData: {},
  selectedActivePage: "home",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setOriginalProductData(state, action) {
      state.originalProductData = action?.payload;
      state.filteredProducts = action?.payload;
    },
    setCart(state, action) {
      state.cart = action?.payload;
    },
    setSelectedPlant(state, action) {
      state.selectedPlantId = action?.payload;
    },
    setSelectedPlantData(state, action) {
      state.selectedPlantData = action?.payload;
    },
    setSelectedActivePage(state, action) {
      state.selectedActivePage = action?.payload;
    },
  },
});

export default productSlice.reducer;
export const {
  setOriginalProductData,
  setCart,
  setSelectedPlant,
  setSelectedPlantData,
  setSelectedActivePage,
} = productSlice.actions;
