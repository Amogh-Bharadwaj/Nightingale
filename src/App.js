
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Routes/ProtectedRoute.jsx";
import React,{useEffect,Component} from "react";
import LandingPage from "./pages/landingpage/landingpage";
import Desk from "./pages/maindesk/desk";

import AuthCheck from "./components/Auth/authcheck.jsx";
import { useState } from "react";


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