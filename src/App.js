import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import React,{Component} from "react";
import LandingPage from "./pages/landingpage/landingpage";
import Desk from "./pages/maindesk/desk";

class App extends Component {
  /*constructor(props){
    super(props);
    this.state={
      auth:false,
    };
  }

  isLoggedIn=()=>{
    fetch("http://127.0.0.1:5000/tail/logged-in", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then((response)=>response.json())
    .then((json)=>{
      if(json.authPass==="true"){
        this.setState({auth:true});
      }
    });
    console.log("Authorized:",this.state.auth)
    return this.state.auth;
  }
  
 componentDidMount(){
   this.isLoggedIn();
 }*/



 render(){

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
}

export default App;
