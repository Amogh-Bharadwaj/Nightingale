
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Routes/ProtectedRoute.jsx";
import React,{useEffect,Component} from "react";
import LandingPage from "./pages/landingpage/landingpage";
import Desk from "./pages/maindesk/desk";
import AliasContext from "./Contexts/AliasContext.jsx";
import AuthCheck from "./components/Auth/authcheck.jsx";
import { useState } from "react";


const Routing=()=> {

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

class App extends Component{

  constructor(props){
    super(props);
    this.state={alias:""}
  }

  getAlias=()=>{
    AuthCheck().then((pass)=>{
      if(pass!=null && pass[0]===1){this.setState({alias:pass[1]});}
      console.log(this.state.alias);
  })
  }

  componentDidMount(){
    this.getAlias();
  }
  
  render(){
    const aliasValue={
       alias:this.state.alias
    };
    return(
      <AliasContext.Provider value={aliasValue}>
        <Routing/>
      </AliasContext.Provider>
    )
  }
}

export default App;