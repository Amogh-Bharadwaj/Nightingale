import React,{useState,useEffect} from "react";
import {EmailIcon,ViewIcon,LockIcon} from "@chakra-ui/icons";


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
    
  
} from "@chakra-ui/react"

const LogInForm=()=>{
  const [userAlias,setAlias] = useState("");
  const [userPassword,setPassword] = useState("");

  return(
       <form >
        <FormControl padding="2rem" >

          <VStack 
           spacing={4} 
           align="centre" 
           w="full">

          <Box w="full" >
            <Text 
             fontSize={{base:"sm",md:"2xl"}} 
             fontFamily="Tahoma" 
             textAlign="center"
             bgGradient={{base:"linear(to-l,white,white)",md:"linear(to-l, #0A114B,white)"}}
             bgClip="text"
             fontWeight="extrabold"
             >
              LOG IN
            </Text>
            </Box>

          <Box w="full">
          <FormLabel>
            <Text fontFamily="Tahoma" fontSize={{base:"xs",md:"md"}}>Secret Alias</Text>
          </FormLabel>

          <InputGroup>
          <InputLeftElement children= {<ViewIcon/>} />
          <Input 
            fontFamily="Tahoma"
            type="name" 
            bgColor="rgba(0,0,0,0.4)" 
            placeholder="You are?"/>
          </InputGroup>
          </Box>

          <Box w="full" pt="1rem">

          <FormLabel>
           
            <Text fontFamily="Tahoma" fontSize={{base:"xs",md:"md"}}>Password</Text>
           
          </FormLabel>

          <InputGroup>
          <InputLeftElement children= {<LockIcon/>} />
          <Input 
            fontFamily="Tahoma"
            type="password" 
            bgColor="rgba(0,0,0,0.4)" 
            placeholder="You know it"/>
          </InputGroup>
          </Box>

          
          <Box w="full" pt="5rem">
          <Button
           w="full"
           h={{base:"2rem",md:"3rem"}}
           _hover={{bgColor:"none"}}
           bgGradient="linear(to-l, rgba(102, 0, 51,0.5), red.600)"
           boxShadow="0px 0px 6px 6px black"
           borderTop="2px solid rgba(255,255,255,0.5)"
           borderLeft="1px solid rgba(255,255,255,0.5)"  
           borderRadius="2%" 
           type="submit"
          >
            <Text fontFamily="Tahoma" fontSize={{base:"xs",md:"md"}} >Go in</Text>
          </Button>
          </Box>

          </VStack>


        </FormControl>
        </form>

        
  
  )
}

export default LogInForm;