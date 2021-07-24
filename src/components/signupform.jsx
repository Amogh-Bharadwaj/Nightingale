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

const SignUpForm=()=>{
  const [userEmail,setEmail] = useState("");
  const [userPassword,setPassword] = useState("");
  const [userAlias,setAlias] = useState("");
  const [emailValidity,setEmailValidity] = useState(false);

  const getEmail=(e)=>{
      let mailid = e.target.value;
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      setEmailValidity(re.test(String(userEmail).toLowerCase()));
      setEmail(mailid); 
  }

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
              CREATE AN ACCOUNT
            </Text>
            </Box>

          <Box w="full">
          <FormLabel><Text fontFamily="Tahoma" fontSize={{base:"xs",md:"md"}}>Email Address</Text></FormLabel>
          <InputGroup>
          <InputLeftElement children= {<EmailIcon/>} />
          <Input 
            type="email" 
            isInvalid={(!emailValidity && userEmail.length>0)}
            fontFamily="Tahoma"
            bgColor="rgba(0,0,0,0.4)" 
            placeholder="Your email ID"
            onChange={getEmail}
            />
          </InputGroup>
          
          </Box>

          <Box w="full">
          <FormLabel>
            <Text fontFamily="Tahoma" fontSize={{base:"xs",md:"md"}}>Secret Alias</Text>
          </FormLabel>

          <InputGroup>
          <InputLeftElement children= {<ViewIcon/>} />
          <Input 
            type="name" 
            bgColor="rgba(0,0,0,0.4)" 
            fontFamily="Tahoma"
            placeholder="Who will you be known as?"/>
          </InputGroup>
          </Box>

          <Box w="full">

          <FormLabel>
           
            <Text fontFamily="Tahoma" fontSize={{base:"xs",md:"md"}}>Password</Text>
           
          </FormLabel>

          <InputGroup>
          <InputLeftElement children= {<LockIcon/>} />
          <Input 
            type="password" 
            fontFamily="Tahoma"
            bgColor="rgba(0,0,0,0.4)" 
            placeholder="Keep it strong"/>
          </InputGroup>
          </Box>

          

          <Button
           mt={{base:"1rem",md:"2rem"}}
           h={{base:"2rem",md:"3rem"}}
           _hover={{bgColor:"none"}}
           bgGradient="linear(to-l, rgba(102, 0, 51,0.5), red.600)"
           boxShadow="0px 0px 6px 6px black"
           borderTop="2px solid rgba(255,255,255,0.5)"
           borderLeft="1px solid rgba(255,255,255,0.5)"  
           borderRadius="2%" 
           type="submit"
          >
            <Text fontFamily="Tahoma" fontSize={{base:"xs",md:"md"}}>Proceed</Text>
          </Button>

          

          </VStack>


        </FormControl>
        </form>

        
  
  )
}

export default SignUpForm;