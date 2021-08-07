
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Routes/ProtectedRoute.jsx";
import React from "react";
import LandingPage from "./pages/landingpage/landingpage";

import Desk from "./pages/maindesk/desk";

const App=()=> {

  return (
    <Router>
    <ChakraProvider>
      <Switch>
     <Route exact path="/" render={()=><LandingPage />} />
    
     <PrivateRoute component={Desk} path="/desk" exact />
      
     </Switch>
     </ChakraProvider>
     </Router>
  );

}

export default App;