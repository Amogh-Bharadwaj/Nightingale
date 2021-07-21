import { ChakraProvider } from "@chakra-ui/react";
import React from "react"
import Login from "./pages/login"
import theme from "./theme/index"
function App() {
  return (
    <ChakraProvider theme={theme}>
     <Login />
     </ChakraProvider>
  );
}

export default App;
