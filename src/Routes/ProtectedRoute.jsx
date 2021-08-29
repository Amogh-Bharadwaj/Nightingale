import React,{useState,useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthCheck from '../components/Auth/authcheck';

import { Spinner, Center, Text,Flex } from "@chakra-ui/react";
import { useEffect } from 'react';

const PrivateRoute =  ({component: Component, ...rest}) => {
    
   
    const [check,setCheck] = useState(-1);
    AuthCheck().then((pass)=>{setCheck(pass[0]);console.log("Auth check inside promise:",pass);})
    console.log("Auth check inside private route:",check);
   
    const renderRoute = (props) => {
        if (check===-1) {
            return (
                <Center 
                h="100vh" 
                bgGradient="linear(black,rgba(23, 47, 66,1))"
                >   
                <Flex 
                 direction="column"
                 w="full"
                 align="center"
                 >
                    <Spinner 
                      size="xl" 
                      color="white" />

                    <Text 
                     mt={5}
                     color="white"
                     fontFamily="monospace" 
                     fontSize="2xl">
                         Setting you up...
                    </Text>

                 </Flex>
                    
                </Center>
            );
        } else if (check===1 ) {
            console.log("found user");
            return (<Component {...props} />);
        } else {
            console.log("redirecting to landing page");
            return <Redirect to="/" />;
        }
    };


    return (
        <Route {...rest} render={renderRoute} />
    );
    
};

export default PrivateRoute;
