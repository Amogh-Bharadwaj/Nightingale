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

const AES=()=>{
    const [bits,setBits] = useState(0);
    const [mode,setMode] = useState("ECB");
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
                    AES 
                </Text>
                <FormLabel pt={5}>
                    <Text 
                     fontSize="2xl"
                    >
                        Message:
                    </Text>
                </FormLabel>
                <Input
                w="50%" 
                h="5vw"
                my={5}
                fontSize="xl"
                placeholder="Message to encrypt..."/>

                <FormLabel pt={10}>
                    <Text
                     fontSize="2xl"
                    >
                      Mode of Encryption:
                    </Text>
                </FormLabel>
                <RadioGroup>
                    <Radio 
                     name="ECB"
                     px={5}
                    >
                        <Text
                         fontSize="lg"
                        >
                            ECB
                        </Text>
                    </Radio>

                    <Radio 
                     name="CBC"
                     px={5}
                     >
                        <Text
                         fontSize="lg"
                        >
                            CBC
                        </Text>
                    </Radio>

                    <Radio 
                     name="OFB"
                     px={5}
                     >
                        <Text
                         fontSize="lg"
                        >
                            OFB
                        </Text>
                    </Radio>

                    <Radio 
                     name="CTR"
                     px={5}
                     >
                        <Text
                         fontSize="lg"
                        >
                            CTR
                        </Text>
                    </Radio>
                </RadioGroup>

                <FormLabel pt={10}>
                   <Text
                    fontSize="2xl"
                   > 
                     Key Size (bits)
                   </Text>
                </FormLabel>

                <RadioGroup>
                    <Radio 
                     px={5}
                     value="128"
                    >
                        <Text
                         fontSize="lg"
                        >
                          128
                        </Text>
                    </Radio>

                    <Radio 
                     px={5}
                     value="256"
                    >
                        <Text
                         fontSize="lg"
                        >
                          256
                        </Text>
                    </Radio>

                    <Radio 
                     px={5}
                     value="512"
                    >
                        <Text
                         fontSize="lg"
                        >
                          512
                        </Text>
                    </Radio>

                </RadioGroup>

                <Button
                  my= {10}
                  py= {5}
                  _hover={{bgGradient:"linear(to-r,green,#0C723A)"}}
                  bgGradient="linear(to-r,#11CA64,#0C723A)"
                  w="25%"
                  >
                      <Text
                        fontSize="2xl">
                            Encrypt
                        </Text>
                  </Button>
                  

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
                <Textarea w="50%" h="5vw" />

              
            </FormControl>
        </form>
    )
}

export default AES;