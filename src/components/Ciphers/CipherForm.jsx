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
    const [Key,setKey] = useState("");
    const [result,setResult] = useState("");
    
    const handleMsg=(e)=>{
        console.log(e.target.value)
        setMSG(e.target.value)
    }

    const handleKey=(e{
        console.log(e.target.value)
        setKey(e.target.value)
    }
    const cipherEncrypt=(cipher)=>{
        fetch(
            `https://nightingale-project.herokuapp.com/ciphers/AES`,
            {
              method: "POST",
              body: JSON.stringify({
                message:msg,
                key:Key
                option:"encrypt",
              }),
              headers: {
               "Content-type": "application/json",
            },
            }
          )
            .then((response) => response.json())
            .then((json) => {
              console.log("Encryption results: ",json);
              let ciphertext = json["Ciphertext"];
              let key = json["Key"];
              let res = "Ciphertext: "+ciphertext+"\n\nKey: "+key;
              console.log("res: ",res)
              setResult(res)
              console.log("result: ",result)
            })
    }

    const cipherDecrypt=(cipher)=>{
        fetch(
            `https://nightingale-project.herokuapp.com/ciphers/AES`,
            {
              method: "POST",
              body: JSON.stringify({
                message:msg,
                key:
                option:"decrypt",
              }),
              headers: {
               "Content-type": "application/json",
            },
            }
          )
            .then((response) => response.json())
            .then((json) => {
              console.log("Decryption results: ",json);
              let plaintext = json["Plaintext"];
              
              let res = "Plaintext: "+plaintext;
              console.log("res: ",res)
              setResult(res)
              console.log("result: ",result)
            })
    }
    
    
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
                onChange={handleMsg}
                placeholder="Message to encrypt..."/>

                <FormLabel pt={5}>
                    <Text 
                     fontSize={{base:"xl",md:"2xl"}}
                    >
                        Key:
                    </Text>
                </FormLabel>

                <Input
                w={{base:"90%",md:"50%"}} 
                h={{base:"30vw",md:"6vw",lg:"5vw"}}
                my={5}
                fontSize="xl"
                onChange={handleKey}
                placeholder="Relevant only if decrypting"/>

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
                  onClick={cipherEncrypt}
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
                  onClick={cipherDecrypt}
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
                <Textarea w={{base:"90%",md:"70%"}} h={{base:"5vh",md:"20vh"}} textColor="white" value={result}/>

              
            </FormControl>
        </form>
    )
}

export default CipherForm;