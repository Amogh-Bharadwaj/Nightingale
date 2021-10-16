import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
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
  //States for user entries
  const [userAlias,setAlias] = useState("");
  const [userPassword,setPassword] = useState("");

  //States for errors
  const [aliasErrorMessage,setAliasError]=useState("");
  const [passwordErrorMessage,setPasswordError]=useState("");

  const history = useHistory();

  const getPassword=(e)=>{
    setPasswordError("")
    setPassword(e.target.value);
  }

  const getAlias=(e)=>{
    setAlias(e.target.value);
  }

  const handleLoginSubmit=(e)=>{
    e.preventDefault()
    let error=false;
    if(userAlias.length==0){setAliasError("[ Enter an alias! ]");error=true;}

    if(userPassword.length==0){setPasswordError("[ Enter a password! ]");error=true;}
    if(error==true){console.log("Error is true");return;}
    fetch(
      `https://nightingale-project.herokuapp.com/tail/login`,
      {
        method: "POST",
        body: JSON.stringify({
          user_alias:userAlias,
          user_password:userPassword,
        }),
        headers: {
         "Content-type": "application/json",
      },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if("aliasError" in json){
          setAliasError(json.aliasError);
         
        }
        else if("passwordError" in json){
          setPasswordError(json.passwordError)
          
        }
        else {localStorage.setItem("jwt", json.jwt);
        console.log("JWT set");
        if(localStorage.getItem("jwt"))history.push({pathname:"/desk",state:{"Alias":userAlias}});
        }
      })
  }

  return(
       <form onSubmit={handleLoginSubmit}>
        <FormControl padding="2rem" >

          <VStack 
           spacing={4} 
           align="centre" 
           w="full">

          <Box w="full" >
            <Text 
             fontSize={{base:"sm",md:"2xl"}} 
             fontFamily="monospace" 
             textAlign="center"
             bgGradient={{base:"linear(to-l,white,white)",md:"linear(to-l, #0A114B,white)"}}
             bgClip="text"
             
             fontWeight="extrabold"
             >
              LOG IN
            </Text>
            </Box>

          <Box w="full">
            <Flex direction="row">
          <FormLabel>
            <Text 
            fontFamily="monospace" 
            fontSize={{base:"xs",md:"md"}}
            color="white"
            >
              Secret Alias
            </Text>
          </FormLabel>
          <Text 
            fontFamily="monospace" 
            fontSize={{base:"xs",md:"md"}}
            color="red.200"
            >
              {aliasErrorMessage} 
            </Text>
            </Flex>

          <InputGroup>
          <InputLeftElement children= {<ViewIcon color="white"/>} />
          <Input 
            fontFamily="monospace"
            type="name" 
            textColor="white"
            borderColor="rgba(255,255,255,0.2)"
            bgColor="rgba(0,0,0,0.4)" 
            onChange={getAlias}
            placeholder="You are?"/>
          </InputGroup>
          </Box>

          <Box w="full" pt="1rem">
          <Flex direction="row">
          <FormLabel>
           
            <Text 
            fontFamily="monospace" 
            fontSize={{base:"xs",md:"md"}} 
            color="white">
              Password
            </Text>
           
          </FormLabel>
          <Text 
            fontFamily="monospace" 
            fontSize={{base:"xs",md:"md"}}
            color="red.200"
            >
              {passwordErrorMessage} 

            </Text>
            </Flex>

          <InputGroup>
          <InputLeftElement children= {<LockIcon color="white"/>} />
          <Input 
            fontFamily="monospace"
            type="password" 
            textColor="white"
            borderColor="rgba(255,255,255,0.2)"
            bgColor="rgba(0,0,0,0.4)" 
            onChange={getPassword}
            placeholder="You know it"/>
          </InputGroup>
          </Box>

          
          <Box w="full" pt={{md:"5rem"}}>
          <Button
           w="full"
           h={{base:"2rem",md:"3rem"}}
           _hover={{bgColor:"none"}}
           bgGradient="linear(to-l, rgba(102, 0, 51,0.9), red.600)"
           boxShadow="0px 0px 6px 6px black"
           borderTop="2px solid rgba(255,255,255,0.5)"
           borderLeft="1px solid rgba(255,255,255,0.5)"  
           borderRadius="2%" 
           type="submit"
          >
            <Text 
            fontFamily="monospace" 
            fontSize={{base:"xs",md:"md"}} 
            color="white"
            >
              Go in
            </Text>
          </Button>
          </Box>

          </VStack>


        </FormControl>
        </form>

        
  
  )
}



export default LogInForm;