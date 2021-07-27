import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react"
import LandingPage from "./pages/landingpage"
import theme from "./theme/index"
function App() {
  return (
    <Router>
    <ChakraProvider theme={theme}>
      <Switch>
     <Route exact path="/">
     <LandingPage />
     </Route>
     <Route exact path="/desk">
       
     </Route>
     </Switch>
     </ChakraProvider>
     </Router>
  );
}

export default App;
