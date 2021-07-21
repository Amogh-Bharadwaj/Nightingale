import React,{useState,useEffect} from "react";
import {EmailIcon,ViewIcon,LockIcon} from "@chakra-ui/icons";
import Nightingale from "../assets/NightLogo.png"
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
    Image
  
} from "@chakra-ui/react"

 const Login=()=> {

  const [userEmail,setEmail] = useState("");
  const [userPassword,setPassword] = useState("");
  const [emailValidity,setEmailValidity] = useState(false);

  const getEmail=(e)=>{
      let mailid = e.target.value;
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      setEmailValidity(re.test(String(userEmail).toLowerCase()));
      setEmail(mailid); 
  }
    
  return (
      <Flex
       direction="column"
       align="center"
       w="100%" 
       h="100vh" 
       bgGradient="linear(45deg, #30343C,black)"
       sx={{"animationName":"loginbg","animationDuration": "10s", "animationDelay":"ease","animationIterationCount":"infinite"}}
       bgSize="200% 200%"
        
       
      > 

     <Flex
      direction="row"
      w="full"
      h="full"
      align="center"
      justify="space-around"
     >
      <Flex
      align="centre"
      direction="column"
      my={{base:"5rem",md:"5rem"}}
      h={{base:"30rem",md:"35rem"}}
      w={{base:"15rem",sm:"25rem",lg:"30rem"}} 
      bgGradient="linear(to-r,rgba(12, 25, 50 ,0.7),rgba(12, 25, 50 ,0.2))" 
      borderRadius="5%" 
      boxShadow="4px 4px 4px 4px rgba(42, 47, 88,0.3)"
      borderTop="2px solid rgba(255,255,255,0.5)"
      borderLeft="1px solid rgba(255,255,255,0.5)"  
      >
       <form >
        <FormControl padding="2rem" >

          <VStack 
           spacing={4} 
           align="centre" 
           w="full">

          <Box w="full">
          <FormLabel><Text fontFamily="Tahoma" fontSize={{base:"xs",md:"md"}}>Email Address</Text></FormLabel>
          <InputGroup>
          <InputLeftElement children= {<EmailIcon/>} />
          <Input 
            type="email" 
            isInvalid={(!emailValidity && userEmail.length>0)}
            
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
            bgColor="rgba(0,0,0,0.4)" 
            placeholder="Keep it strong"/>
          </InputGroup>
          </Box>

          

          <Button
           mt={{base:"1rem",md:"2rem"}}
           h={{base:"2rem",md:"3rem"}}
           _hover={{bgColor:"none"}}
           bgGradient="linear(to-l, rgba(102, 0, 51,0.5), red.600)"
           boxShadow="5px 5px 5px 5px black"
           borderTop="2px solid rgba(255,255,255,0.5)"
           borderLeft="1px solid rgba(255,255,255,0.5)"  
           borderRadius="2%" 
           type="submit"
          >
            <Text fontFamily="Tahoma" fontSize={{base:"xs",md:"md"}}>Go in</Text>
          </Button>

          <Button
           mt={{base:"1rem",md:"2rem"}}
           h={{base:"2rem",md:"3rem"}}
           _hover={{bgColor:"none"}}
           bgGradient="linear(to-l, #0E1442 , #374087)"
           boxShadow="5px 5px 5px 5px black"
           borderTop="2px solid rgba(255,255,255,0.5)"
           borderLeft="1px solid rgba(255,255,255,0.5)"  
           borderRadius="2%" 
           type="submit"
          >
             <Text fontFamily="Tahoma" fontSize={{base:"xs",md:"md"}}>I have an account</Text>
          </Button>

          </VStack>


        </FormControl>
        </form>

        <Text 
           p={{base:"1rem",md:"2rem"}}
           fontFamily="Tahoma" 
           fontSize={{base:"xs",md:"md"}}
           >
            Your data is safe. <Link color="teal.500"> Learn more. </Link>
        </Text>
      </Flex>

      <Image  src={Nightingale}  h={{md:"70%",lg:"90%"}} w={{md:"35%",lg:"40%"}} display={{base:"none",md:"flex"}}/>
      </Flex>
     </Flex>
    
  );
}

export default Login;
