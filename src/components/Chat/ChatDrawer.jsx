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
    useToast,
    Spinner
  
} from "@chakra-ui/react"


const ChatDrawer=(alias)=>{
    const [load,setLoad] = useState(true);
    const [chatDrawer,setChatDrawer] = useState(false);
    const [drawerIcon,setDrawerIcon] = useState( <ArrowLeftIcon 
        color="white"
        //border="2px solid white"
        boxSize={4}/>);

    const [msg,setMsg]= useState("");
    const [recAl, setRecAl]=useState("");

    const toast = useToast();
    
    const send=()=>{
        setLoad(true);
        fetch(
            `https://nightingale-project.herokuapp.com/tail/send`,
            {
              method: "POST",
              body: JSON.stringify({
                receiver:recAl,
                msg:msg
               
              }),
              headers: {
               "Content-type": "application/json",
               "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
            },
            }
          )
            .then((response) => response.json())
            .then((json) => {
              setLoad(false);
        
              setMsg("");
              setRecAl("");
              toast({
                title: 'Message sent.',
                description: "Inform your receiver!",
                status: 'success',
                duration: 5000,
                isClosable: true,
              })
            
            })

    }

    const handleChange=(e)=>{
        setMsg(e.target.value);
    }

    const handleAlias=(e)=>{
        setRecAl(e.target.value);
    }

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
        h={{base:"60%",md:"60%",lg:"70%"}}
       
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
             fontFamily="monospace"
             textColor="rgba(255,255,255,0.5)"
             h="full"
             w={{base:"50vw",md:"30vw"}}
             >
    
             <Text
               as="h3"
               fontSize={{base:"2xl",md:"4xl"}}
               color="rgba(255,255,255,0.5)"
               textAlign="center"
             >
                 MESSENGER
            </Text> 
    
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
                fontFamily="monospace"
                textColor="white" 
                onChange={handleAlias}
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
                fontFamily="monospace"
                textColor="white"
                
                onChange={handleChange}
                />
            </Box>
    
            <Button
             w="full"
             _hover={{bgGradient:"radial(rgb(5, 29, 15),rgba(23, 102, 64,0.95))",border:"none",transform:"scale(1.02)"}}
             _focus={{border:"none"}}
             bgColor="rgba(23, 102, 64,1)"
             boxShadow="0 0 2px 2px rgba(0,0,0,0.5)"
             onClick={send}
             >
                 <Text
                 fontSize="2xl"
                 color="rgba(255,255,255,0.7)"
                 >
                     SEND
                 </Text>
             </Button>

             <Center>
                 <Spinner size="lg" color="blue" />
             </Center>
            
            </VStack>
            </FormControl>
            </form>
       
    
        </Flex>
    
    )
}

export default ChatDrawer;