import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LetsStart from "./src/components/LetsStart";
import ProductList from "./src/components/ProductLandingPage";
import ProductDetails from "./src/components/product/ProductDetails";
import { Provider } from "react-redux";
import store from "./src/store/store";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LetsStart"
            component={LetsStart}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductList"
            component={ProductList}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
