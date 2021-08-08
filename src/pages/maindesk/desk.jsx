import React,{useState,useContext} from "react"
import Nightingale from "../../assets/Nightingale.gif"
import AliasContext from "../../Contexts/AliasContext"
import {
    ArrowBackIcon,
    InfoIcon,
    EditIcon
} from "@chakra-ui/icons"
import {
    Flex,
    Box,
    Container,
    Button,
    Text,
    Center,
    Stack,
    Image,
    Heading,
    VStack,
    FormControl,
    FormLabel,
    InputGroup,
    InputLeftElement,
    Input,
    Textarea,
    Divider
} from "@chakra-ui/react"
import { useHistory } from "react-router-dom"

const Desk=()=>{
    const history = useHistory();
    const aliasprop=useContext(AliasContext);
    const alias = aliasprop.alias;


   return(
    <Flex
    direction="column"
    align="center"
    h="100vh" 
    bgGradient="linear(black,rgba(23, 47, 66,1))"
    
   > 

   <Box
   w="full"
   >

     <Flex
        w="full"
        direction="column"
        align="center"
        pt={3}
        >
        <Image 
         
         justifySelf="center"
         src={Nightingale}
         boxSize="6%"
         />
        </Flex>

   <Text 
     
     mt={2}
    textAlign="center"
    fontSize="5xl"
    color="white"
    fontFamily="Tahoma"
    bgGradient="linear(rgba(55, 128, 212,1),rgba(28, 230, 179,0.7))"
    bgClip="text"
    > 
      NIGHTINGALE
   </Text>

   <Divider
     w="50vw"
     opacity={0.2}
     mx="auto"
     my={3}
    />

   <Text 
    textAlign="center"
    fontSize="4xl"
    color="white"
    fontFamily="Tahoma"
    bgGradient="linear(rgba(131, 197, 247,1),rgba(57, 126, 179,0.7))"
    bgClip="text"
    > 
      Welcome, {alias}.
   </Text>
   </Box>
   
  
   <Flex
   direction="row"
   mt={20}
   align="center"
   justify="center"
   fontWeight="extrabold"
   fontFamily="Tahoma"
   mx="auto">
       <Button
         
         w="12vw" 
         h="16vw" 
         _hover={{bgGradient:"linear(rgba(39, 202, 242,1),rgba(60, 136, 230,0.8))" ,transform:"scale(1.1)",transition:"transform 0.4s ease-in-out;"}}
         bgGradient="linear(rgba(39, 202, 242,0.7),rgba(60, 136, 230,0.8))" 
         borderRadius="4%"
         onClick={()=>{history.push({pathname:"/space",state:{"Alias":alias}})}}
         mx={10}>
             <VStack>
             <EditIcon boxSize="5em"/>
             <Text 
               fontSize="2xl"
             >
                  Workspace
              </Text>
             </VStack>
         </Button>
       
         <Center 
         w="12vw" 
         h="16vw" 
         _hover={{bgGradient:"linear(rgba(171, 135, 7,1),rgba(212, 186, 95,0.8))" ,transform:"scale(1.1)",transition:"transform 0.4s ease-in-out;"}}
         bgGradient="linear(rgba(171, 135, 7,0.7),rgba(212, 186, 95,0.8))" 
         borderRadius="4%"
         mx={10}>
             <VStack>
             <InfoIcon boxSize="5em"/>
             <Text 
               fontSize="2xl"
              >
                  Help
              </Text>
             </VStack>
         </Center>
         <Center 
         w="12vw" 
         h="16vw" 
         _hover={{bgGradient:"linear(rgba(156, 45, 65,1),rgba(222, 102, 124,0.8))",transform:"scale(1.1)",transition:"transform 0.4s ease-in-out;"}}
         bgGradient="linear(rgba(156, 45, 65,0.7),rgba(222, 102, 124,0.8))" 
         borderRadius="4%"
         mx={10}>

             <VStack >
             <ArrowBackIcon boxSize="5em"/>
             <Text 
               fontSize="2xl"
              >
                  Logout
              </Text>
             </VStack>
         </Center>

   </Flex>

  
   
  
   


   </Flex>
    )
}

export default Desk;

