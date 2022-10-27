import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
// import { ChakraProvider } from '@chakra-ui/react'
// import 'fonts/FiraCode-SemiBold.otf';
// import 'fonts/FiraCode-Bold.otf';
// import '/fonts/FiraCode-Regular.otf';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
         <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
