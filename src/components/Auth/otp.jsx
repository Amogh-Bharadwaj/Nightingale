import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
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

const OTPForm=({email,alias,password})=>{

    //State for user entry
    const [userOTP,setOTP] = useState("");
    
    //State for form error
    const [otpErrorMessage,setOTPError] = useState("");

    const history= useHistory();

    const getOTP=(e)=>{
        
        setOTP(e.target.value)
    }

    const handleOTPSubmit=(e)=>{
        e.preventDefault()
        let otpError=false;
        let otpCheck= /[^0-9]/
        if((userOTP.length!=6)||(otpCheck.test(userOTP)==true)){setOTPError("Invalid OTP!");otpError=true;}
        if(otpError==true){return;}

        fetch(
          `http://127.0.0.1:5000/tail/signup/otp`,
          {
            method: "POST",
            body: JSON.stringify({
              email:email,
              alias:alias,
              password:password,
              otp:userOTP
            }),
            headers: {
             "Content-type": "application/json",
          },
          }
        )
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            if("otpError" in json){
              setOTPError("Incorrect OTP! Please check again")
            }
            else {localStorage.setItem("jwt", json.jwt)
            console.log("JWT set in OTP Signup")}
            history.push("/desk",{"Alias":alias});

          });


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
             fontFamily="monospace" 
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
                fontFamily="monospace" 
                color="white"
                >
                    We've sent an OTP number to your email address. Please enter it below. 

                </Text>
            </Box>

                
            <Box w="full">
          <InputGroup>
          <InputLeftElement children= {<CheckCircleIcon color="white"/>} />
          <Input 
            type="text" 
            isInvalid={userOTP.length<6 && userOTP.length>0}
            fontFamily="monospace"
            bgColor="rgba(0,0,0,0.4)" 
            textColor="white"
            placeholder="Enter your OTP"
            borderColor="rgba(255,255,255,0.2)"
            onChange={getOTP}
            />
          </InputGroup>
          <Text 
                 fontFamily="monospace" 
                 fontSize={{base:"xs",md:"md"}}
                 color="red.200"
                >
              {otpErrorMessage} 
               </Text>
          </Box>
          <Button
            mx="2rem"
            height={{base:"2rem",md:"3rem"}}
            _hover={{bgColor:"none"}}
            bgGradient="linear(to-l, #0A7E27 , #054876)"
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
              Enter
               </Text>

          </Button>
         
          </VStack>
          </FormControl>
        </form>
    )

}

export default OTPForm;