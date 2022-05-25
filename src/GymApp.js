import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "./router/AppRouter";
import { store } from "./store/store";
import { ChakraProvider } from "@chakra-ui/react";
export const GymApp = () => {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <AppRouter></AppRouter>
      </Provider>
    </ChakraProvider>
  );
};
