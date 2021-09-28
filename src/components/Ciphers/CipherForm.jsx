import React,{useState,useEffect} from "react";
import{
    Flex,
    Box,
    Container,
    Text,
    FormControl,
    FormLabel,
    Input,
    RadioGroup,
    Radio,
    Textarea,
    Button
} from "@chakra-ui/react";

const CipherForm=({cipher})=>{
    
    const [msg,setMSG] = useState("");
    const [result,setResult] = useState("");

    return(
        <form>
            <FormControl textColor="white">
                <Text 
                  mt={5}
                  mb={10}
                  textAlign="center"
                  fontSize="5xl"
                >
                    {cipher}
                </Text>
                <FormLabel pt={5}>
                    <Text 
                     fontSize={{base:"xl",md:"2xl"}}
                    >
                        Message:
                    </Text>
                </FormLabel>
                <Input
                w={{base:"90%",md:"50%"}} 
                h={{base:"30vw",md:"6vw",lg:"5vw"}}
                my={5}
                fontSize="xl"
                placeholder="Message to encrypt..."/>

               <Flex 
               direction="row"
               align="flex-start"
               my= {10}
               >
                   <Button
                   mr={5}
                  _hover={{bgGradient:"linear(green.800,green.600)"}}
                  bgGradient="linear(green.700,#0C723A)"
                  boxShadow="0px 7px black"
                  w={{md:"25%"}}
                  >
                      <Text
                        fontSize={{base:"lg",md:"2xl"}}>
                            Encrypt
                        </Text>
                  </Button>

                  <Button
                  _hover={{bgGradient:"linear(red.800,red.700)"}}
                  bgGradient="linear(red.700,#4d0000)"
                  boxShadow="0px 7px black"
                  w={{md:"25%"}}
                  >
                      <Text
                         fontSize={{base:"lg",md:"2xl"}}>
                        
                            Decrypt
                        </Text>
                  </Button>
               
               </Flex> 
                

                  

                <FormLabel 
                  pt={10}
                  pb={5}
                >
                     <Text
                      fontSize="2xl"
                     >
                         Result
                     </Text>
                     
                </FormLabel>
                <Textarea w={{base:"90%",md:"50%"}} h="5vw" />

              
            </FormControl>
        </form>
    )
}

export default CipherForm;