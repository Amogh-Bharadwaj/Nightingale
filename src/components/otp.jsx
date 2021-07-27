import React,{useState,useEffect} from "react";
import {CheckCircleIcon} from "@chakra-ui/icons"
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
    VStack,
} from "@chakra-ui/react"

const OTPForm=()=>{

    //State for user entry
    const [userOTP,setOTP] = useState("");

    //State for error
    const [otpErrorMessage,setOTPError] = useState("");

    const getOTP=(e)=>{
        setOTP(e.target.value)
    }

    const handleOTPSubmit=(e)=>{
    
        console.log("OTP submitted")


    }

    return(
        <form onSubmit={handleOTPSubmit}>
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
              OTP VERIFICATION
            </Text>
            </Box>


            <Box 
              w="full"
              py="2rem"
              >
                <Text
                fontSize={{base:"sm",md:"md"}} 
                fontFamily="Tahoma" 

                >
                    We've sent an OTP number to your email address. Please enter it below. 

                </Text>
            </Box>

                
            <Box w="full">
    
               <Text 
                 fontFamily="Tahoma" 
                 fontSize={{base:"xs",md:"md"}}
                 color="red.200"
                >
              {otpErrorMessage} 
               </Text>
             
          <InputGroup>
          <InputLeftElement children= {<CheckCircleIcon/>} />
          <Input 
            type="text" 
            isInvalid={userOTP.length<6 && userOTP.length>0}
            fontFamily="Tahoma"
            bgColor="rgba(0,0,0,0.4)" 
            placeholder="Enter your OTP"
            onChange={getOTP}
            />
          </InputGroup>
          </Box>
          <Button
            mx="2rem"
            height={{base:"2rem",md:"3rem"}}
            _hover={{bgColor:"none"}}
            bgGradient="linear(to-l, #0A7E27 , #054876)"
            boxShadow="0px 0px 6px 6px black"
            borderTop="2px solid rgba(255,255,255,0.5)"
            borderLeft="1px solid rgba(255,255,255,0.5)"  
            borderRadius="2%">
            Enter

          </Button>
          <Button
            mx="2rem"
            height={{base:"2rem",md:"3rem"}}
            _hover={{bgColor:"none"}}
            bgGradient="linear(to-l, #1CB0AF , #052876)"
            boxShadow="0px 0px 6px 6px black"
            borderTop="2px solid rgba(255,255,255,0.5)"
            borderLeft="1px solid rgba(255,255,255,0.5)"  
            borderRadius="2%">
            Resend OTP

          </Button>
          </VStack>
          </FormControl>
        </form>
    )

}

export default OTPForm;