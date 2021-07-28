import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import LandingPage from "./pages/landingpage/landingpage";
import Desk from "./pages/maindesk/desk";

function App() {
  return (
    <Router>
    <ChakraProvider>
      <Switch>
     <Route exact path="/">
     <LandingPage />
     </Route>
     <Route exact path="/desk">
       <Desk/>
     </Route>
     </Switch>
     </ChakraProvider>
     </Router>
  );
}

export default App;
