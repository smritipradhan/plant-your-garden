import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: uuid.v4(),
    url: require(`./../../assets/plants/plantOne.png`),
    name: "Jade Plant",
    price: "40.00",
    isFavourite: true,
  },
  {
    id: uuid.v4(),
    url: require(`./../../assets/plants/cactus.png`),
    name: "Cactus",
    price: "80.00",
    isFavourite: false,
  },
  {
    id: uuid.v4(),
    url: require(`./../../assets/plants/plantThree.png`),
    name: "Swiss cheese plant",
    price: "29.99",
    isFavourite: false,
  },
  {
    id: uuid.v4(),
    url: require(`./../../assets/plants/plantFour.png`),
    name: "Hanging Jade",
    price: "20.00",
    isFavourite: false,
  },
  {
    id: uuid.v4(),
    url: require(`./../../assets/plants/plantFive.png`),
    name: "Jade Plant",
    price: "39.99",
    isFavourite: false,
  },
  {
    id: uuid.v4(),
    url: require(`./../../assets/plants/plantSix.png`),
    name: "Jade Plant",
    price: "89.99",
    isFavourite: false,
  },
  {
    id: uuid.v4(),
    url: require(`./../../assets/plants/plantOne.png`),
    name: "Jade Plant",
    price: "99.99",
    isFavourite: false,
  },
  {
    id: uuid.v4(),
    url: require(`./../../assets/plants/plantTwo.png`),
    name: "Jade Plant",
    price: "40.00",
    isFavourite: false,
  },
  {
    id: uuid.v4(),
    url: require(`./../../assets/plants/plantThree.png`),
    name: "Jade Plant",
    price: "89.99",
    isFavourite: false,
  },
  {
    id: uuid.v4(),
    url: require(`./../../assets/plants/plantFour.png`),
    name: "Jade Plant",
    price: "40.00",
    isFavourite: false,
  },
];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setFilterTypeData(state, action) {
      state.filterTypeData = action?.payload;
    },
  },
});

export default jobFilterSlice.reducer;
export const filterActions = jobFilterSlice.actions;
