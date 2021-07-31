
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React from "react";
import LandingPage from "./pages/landingpage/landingpage";

import Desk from "./pages/maindesk/desk";

const App=()=> {

  return (
    <Router>
    <ChakraProvider>
      <Switch>
     <Route exact path="/" render={()=><LandingPage />} />
    
     <Route exact path="/desk" render={()=> <Desk/>} /> 
      
     </Switch>
     </ChakraProvider>
     </Router>
  );

}

export default App;