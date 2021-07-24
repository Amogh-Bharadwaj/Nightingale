import React,{useState,useEffect} from "react";
import {EmailIcon,ViewIcon,LockIcon} from "@chakra-ui/icons";
import Nightingale from "../assets/Nightingale.gif"
import SignUpForm from "../components/signupform";
import LogInForm from "../components/loginform";
import "./login.css";
import 
{   Flex,
    Stack,
    Box,
    Container,
    FormControl,
    FormErrorMessage,
    Input,
    FormLabel,
    Text,
    Button,
    InputGroup,
    InputLeftElement,
    Link,
    VStack,
    Image,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    PopoverCloseButton,
    Portal,
    Heading
  
} from "@chakra-ui/react"

 const Login=()=> {
   
    const [authForm,setForm] = useState(<LogInForm/>)

    const InitialiseSignUp =()=>{
      setForm(<SignUpForm/>)
      setFormButton(signupButton)
    }

    const InitialiseLogIn = ()=>{
      setForm(<LogInForm/>)
      setFormButton(loginButton)
    }

    const signupButton=(<Button
    mx="2rem"
    height={{base:"2rem",md:"3rem"}}
    
    _hover={{bgColor:"none"}}
    bgGradient="linear(to-l, #0E1442 , #374087)"
    boxShadow="0px 0px 6px 6px black"
    borderTop="2px solid rgba(255,255,255,0.5)"
    borderLeft="1px solid rgba(255,255,255,0.5)"  
    borderRadius="2%"
    onClick={InitialiseLogIn}

   >
      <Text fontFamily="Tahoma" fontSize={{base:"xs",md:"md"}}>I have an account</Text>
   </Button>)
    
    const loginButton=(<Button
      mx="2rem"
      height={{base:"2rem",md:"3rem"}}
      
      _hover={{bgColor:"none"}}
      bgGradient="linear(to-l, #0E1442 , #374087)"
      boxShadow="0px 0px 6px 6px black"
      borderTop="2px solid rgba(255,255,255,0.5)"
      borderLeft="1px solid rgba(255,255,255,0.5)"  
      borderRadius="2%" 
      onClick={InitialiseSignUp}
     >
        <Text fontFamily="Tahoma" fontSize={{base:"xs",md:"md"}}>I'm new here</Text>
     </Button>)

    const [formButton,setFormButton] = useState(loginButton)

     
  return (
      <Flex
       direction="column"
       align="center"
       w="100%" 
       h="100vh" 
       bgGradient="linear(45deg,rgba(12, 25, 50 ,0.7),rgba(12, 25, 50 ,0.2))"
       bgSize="200% 200%"
      > 
     <Flex
      direction="row"
      w="full"
      h="full"
      align="center"
      justify="space-evenly"
     >
      
      <Box h={{base:"33rem",md:"35rem"}} w="45rem" textAlign="left"  >
        <Text  
           fontSize={{base:"md",sm:"lg",md:"xl",lg:"6xl"}} 
           fontFamily="Tahoma"      
           sx={{"animation":"Title 3s ease infinite","animationDirection":""}}
           bgClip="text" >
             NIGHTINGALE
        </Text>

        <Text 
           fontFamily="Tahoma" 
           fontSize="3xl" 
           pt="1rem" 
           color="#C0D7F1">
             Take end-to-end encryption and privacy into your own hands.
        </Text>

        <Text 
           fontFamily="Tahoma" 
           fontSize="2xl" 
           pt="1rem">
             Encrypt and decrypt your chats with the widest set of cryptographic tools you'll find in one place.
        </Text>
        <Image  src={Nightingale}  h={{md:"70%",lg:"50%"}} w={{md:"35%",lg:"50%"}} display={{base:"none",md:"flex"}} mx="25%" />
      </Box>

      <Flex
      align="centre"
      direction="column"
      my={{base:"5rem",md:"5rem"}}
      h={{base:"33rem",md:"35rem"}}
      w={{base:"15rem",sm:"25rem",lg:"30rem"}} 
      bgGradient="linear(to-r,rgba(12, 25, 50 ,0.7),rgba(12, 25, 50 ,0.2))" 
      borderRadius="5%" 
      boxShadow="4px 4px 4px 4px rgba(42, 47, 88,0.3)"
      borderTop="2px solid rgba(255,255,255,0.5)"
      borderLeft="1px solid rgba(255,255,255,0.5)"  
      >
       {authForm}

       {formButton}

       
      </Flex>
      </Flex>
     </Flex>
    
  );
}

export default Login;
