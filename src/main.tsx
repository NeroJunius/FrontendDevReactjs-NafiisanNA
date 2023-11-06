import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const customTheme = {
  colors: {
    primary: "#FF5733",
    secondary: "#3498DB",
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Poppins, sans-serif",
  },
};

const extendedTheme = extendTheme(customTheme);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={extendedTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
