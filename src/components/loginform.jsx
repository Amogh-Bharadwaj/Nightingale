import React from "react";
import {Formik,Form,Field} from "formik"

import 
{Flex,
    Stack,
    Box,
    Container,
    FormControl
} from "@chakra-ui/react"

 const LoginForm=()=> {

    function validateName(value) {
        let error
        if (!value) {
          error = "Name is required"
        } else if (value.toLowerCase() !== "naruto") {
          error = "Jeez! You're not a fan 😱"
        }
        return error
      }
    
  return (
      <Container maxWidth="container.md" 
      h="100%" 
      w="30%" 
      bgGradient="linear(rgba(102, 0, 51,0.7),rgba(102, 0, 51,0.6),rgba(102, 0, 51,0.5))" 
      borderRadius="5%" 
      boxShadow="5px 5px 5px 5px #1a0000"
      borderTop="2px solid rgba(255,255,255,0.5)"
      borderLeft="1px solid rgba(255,255,255,0.5)"
      filter="auto"
      blur="1px"
      >




      </Container>

  
    
  );
}

export default LoginForm;
