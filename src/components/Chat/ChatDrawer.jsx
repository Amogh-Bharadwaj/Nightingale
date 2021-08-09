import React,{useState} from "react";
import {
    ViewIcon,
    ArrowRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ArrowLeftIcon
} from "@chakra-ui/icons";

import Nightingale from "../../assets/Nightingale.gif"
import {
    Flex,
    Box,
    Button,
    Text,
    Image,
    Heading,
    VStack,
    FormControl,
    FormLabel,
    InputGroup,
    InputLeftElement,
    Input,
    Textarea,
  
} from "@chakra-ui/react"


const ChatDrawer=()=>{

    const [chatDrawer,setChatDrawer] = useState(false);
    const [drawerIcon,setDrawerIcon] = useState( <ArrowLeftIcon 
        color="white"
        //border="2px solid white"
        boxSize={4}/>);
    

    const ToggleChat=()=>{
        setChatDrawer(!chatDrawer);
        if(!chatDrawer){setDrawerIcon(<ArrowRightIcon 
            color="white"
            boxSize={4}/>);}
        else{
            setDrawerIcon(<ArrowLeftIcon 
                color="white"
                //border="2px solid white"
                boxSize={4}/>);
        }
    }

    return(
        <Flex
        pos="fixed"
        zIndex={10}
        bgColor="green"
        bottom="0%"
        right="0%"
        bgColor="rgba(24, 31, 41,1)"
        boxShadow="4px 4px 4px 4px rgba(42, 47, 88,0.3)"
        borderTop="3px solid rgba(28, 29, 31,1)"
        borderLeft="1px solid rgba(255,255,255,0.2)"
        borderRadius="1%"
        h="70%"
       
        >
          <Button
          _hover={{bgColor:"rgba(63, 67, 77,0.9)"}}
          h="100%"
          w="1vw"
          border="2px solid black"
          bgColor="rgba(28, 29, 31,1)"
          _focus={{boxShadow:"none"}}
          _selected={{bgColor:"none"}}
          _active={{bg:"none"}}
          onClick={ToggleChat}
          >
             {drawerIcon}
          </Button>
         
          
            <form>
            <FormControl 
              p={5} 
              h="full">
    
            <VStack
             spacing={4}
             display={chatDrawer?"block":"none"}
             align="center"
             fontFamily="Tahoma"
             textColor="rgba(255,255,255,0.5)"
             h="full"
             w="30vw"
             >
    
             <Heading 
               as="h3"
               
               color="rgba(255,255,255,0.5)"
               textAlign="center"
             >
                 MESSENGER
            </Heading> 
    
            <Box w="full">
            <FormLabel>
                <Text
                fontSize="lg">
                    Receiver Alias:
                </Text>
            </FormLabel>
    
            <InputGroup>
              <InputLeftElement children= {<ChevronRightIcon color="white"/>}/>
              <Input 
                _focus={{bg:"rgba(0,0,0,0.4)",border:"none"}}
                _hover={{border:"none"}}
                border="none"
                type="name" 
                bgColor="rgba(0,0,0,0.4)" 
                borderColor="rgba(255,255,255,0.2)"
                fontFamily="Tahoma"
                textColor="white" 
                />
            </InputGroup>
            </Box>
    
            <Box 
             w="full"
             h="35%"
             paddingBottom={10}
             >
            <FormLabel>
                <Text
                fontSize="lg">
                    Message:
                </Text>
            </FormLabel>
    
           
              <Textarea
                 h="full"
                 resize="none"
                _focus={{bg:"rgba(0,0,0,0.4)",border:"none"}}
                _hover={{border:"none"}}
                border="none"
                type="name" 
                bgColor="rgba(0,0,0,0.4)" 
                borderColor="rgba(255,255,255,0.2)"
                fontFamily="Tahoma"
                textColor="white"
                />
            </Box>
    
            <Button
             w="full"
             _hover={{bgGradient:"radial(rgb(5, 29, 15),rgba(23, 102, 64,0.95))",border:"none",transform:"scale(1.02)"}}
             _focus={{border:"none"}}
             bgColor="rgba(23, 102, 64,1)"
             boxShadow="0 0 2px 2px rgba(0,0,0,0.5)"
             >
                 <Text
                 fontSize="2xl"
                 color="rgba(255,255,255,0.7)"
                 >
                     SEND
                 </Text>
             </Button>
             
             <Flex
            w="full"
            direction="column"
            align="center"
            >
            <Image 
             
             justifySelf="center"
             src={Nightingale}
             boxSize="20%"
             />
            </Flex>
            </VStack>
            </FormControl>
            </form>
       
    
        </Flex>
    
    )
}

export default ChatDrawer;