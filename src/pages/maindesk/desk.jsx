import React,{useState,useContext, useEffect} from "react"
import Nightingale from "../../assets/Nightingale.gif"
import ChatDrawer from "../../components/Chat/ChatDrawer";
import CipherForm from "../../components/Ciphers/CipherForm";
import {
    ArrowBackIcon,
    InfoIcon,
    EditIcon,
    SearchIcon,
    ChevronRightIcon,
    ViewIcon,
    SunIcon,
    DeleteIcon,
    UnlockIcon
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
    Spinner,
    Textarea,
    Divider,
    List,
    ListIcon,
    ListItem,
    Link,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    HStack,
} from "@chakra-ui/react"
import { useHistory } from "react-router-dom"

const Desk=(props)=>{
    const history = useHistory();
    const alias = props.location.state.Alias;

    const [readArea,setReadArea] = useState("");

    //const messages = [['Alucard', 'PostgreSQL can store the representation of an “infinite” date, timestamp, or interval. Infinite dates are not available to Python', '10th Oct 2008'], ['Alucard', 'PostgreSQL can store the representation of an “infinite” date, timestamp, or interval. Infinite dates are not available to Python', '10th Oct 2008'], ['Alucard', 'PostgreSQL can store the representation of an “infinite” date, timestamp, or interval. Infinite dates are not available to Python', '10th Oct 2008']]
    const [messages,setMessages]=useState([])
   
    const logOut=()=>{
      localStorage.clear();
      history.push("/");
    }
    const getInbox=()=>{
      fetch(
        `https://nightingale-project.herokuapp.com/tail/get-inbox`,
        {
          method: "POST",
          body: JSON.stringify({
            alias:alias,
           
          }),
          headers: {
           "Content-type": "application/json",
        },
        }
      )
        .then((response) => response.json())
        .then((json) => {
          console.log("message results: ",json);
          setMessages(json.Messages)
        })
    }
   
    useEffect(()=>{
      getInbox();
    },[])
  if(messages.length>0){
   return(
    
<Flex
  direction="column"
  align="center"
  bgGradient="linear(45deg,black,#172334)"
  w="100vw"
> 

    <ChatDrawer alias={alias} />
    <Button
      pos="absolute"
      variant={{base:"ghost",md:"solid"}}
      zIndex={1}
      mr={5}
      mt={5}
      top="0%"
      right="0%"
      w="5%"
      h={{base:"20vw",md:"5vw"}}
      _hover={{bgGradient:"linear(rgba(156, 45, 65,0.5),rgba(222, 102, 124,1))"}}
      _focus={{bgGradient:"linear(rgba(156, 45, 65,0.5),rgba(222, 102, 124,1))"}}
      _selected={{bgGradient:"linear(rgba(156, 45, 65,0.5),rgba(222, 102, 124,1))"}}
      bgGradient={{md:"linear(rgba(156, 45, 65,1),rgba(222, 102, 124,1))"}}
      justify="center"
      onClick={logOut}
    >
                <VStack >
                    <ArrowBackIcon boxSize="1.5em" color="black"/>
                      <Text 
                        fontSize="xs"
                        display={{base:"none",md:"block"}}
                      >
                         Log out
                      </Text>
                </VStack>
    </Button>



   <Flex
   align="center"
   direction="column"
   w="full"
   mt={10}
   > 
         <Image 
          justifySelf="center"
          src={Nightingale}
          h="30%"
          w={{base:"25%",md:"6%"}}
          />
        

          <Text 
           //mt={2}
           textAlign="center"
           fontSize={{base:"3xl",md:"4xl",lg:"5xl"}}
           color="white"
           fontFamily="monospace"
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
            fontSize={{base:"2xl",md:"4xl"}}
            color="white"
            fontFamily="monospace"
            bgGradient="linear(rgba(131, 197, 247,1),rgba(57, 126, 179,0.7))"
            bgClip="text"
          > 
              Welcome, {alias}.
          </Text>
   
  
  
   </Flex>
   
   <Stack
       direction={{base:"column",md:"row"}}
       mt={20}
       w="full"
       h={{md:"50vh"}}
       bgGradient="linear(-45deg,rgba(38, 18, 31,0.7),black)"
       textColor="white"
       >   
        
        <Flex
        direction="column"
        w="full"
        align="center"
        p={{base:2,md:7}}
        > 
            

            <Stack
             direction={{base:"column",md:"row"}}
             align={{md:"center"}}
             h={{base:"auto",md:"80%"}}
             fontFamily="monospace"
             w="100vw" 
            > 
               

                <Box 
                 h={{base:"70vh",md:"full"}}
                 w={{base:"full",md:"70vw"}}
                 mt={5}
                 p={{base:0,md:5}}
                 fontFamily="monospace"
                 textColor="whiteAlpha.700"
                 bgColor="rgba(38, 18, 31,0.6)"
                 overflowY="scroll"
                 >

              

                     <Table 
                       variant="simple" 
                       display={{base:"block",md:"inline-table"}} 
                       w="full"
                     >
                       <Thead w="full">
                         <Tr>
                           <Th>Time</Th>
                           <Th>Alias</Th>
                           <Th>Read</Th>
                         </Tr>
                       </Thead>
                       
                       <Tbody w="full">
                         {messages.map((msg)=>{
                         return(<Tr>
                           <Td>{msg[2]}</Td>
                           <Td>{msg[0]}</Td>
                           <Td>
                              <Button
                                 size="sm"
                                 bgColor="green.700"
                                 _hover={{bgColor:"green.800"}}
                                 _focus={{bgColor:"green.700"}}
                                 onClick={()=>{setReadArea(msg[1])}}
                              >
                                  <ViewIcon color="white"/>
                              </Button>
                           </Td>
                            
                           
                         </Tr>)
                        } 
                         )}
                       </Tbody>
                     </Table>
 
                 </Box>
                 <Box
                   mt={5}
                   w={{base:"full",md:"30%"}}
                   h={{base:"50vh",md:"full"}}
                   textColor="whiteAlpha.500"
                   bgGradient="linear(rgba(115, 30, 58,0.9),rgba(38, 18, 31,0.9))"
                   >
                     <Text
                     mt={5}
                      fontSize="2xl"
                      textAlign="center"
                      fontWeight="bold"
                     >
                        Reading Desk
                     </Text>

                     <Text
                     mt={5}
                      fontSize="lg"
                      textAlign="center"
                      fontWeight="bold"
                     >
                        {readArea}
                     </Text>


                      
                   </Box>
            </Stack> 

            </Flex> 
     </Stack>
    

        <Box 
         w="full" 
         p={10}
         //bgColor="green"
         >
           <CipherForm cipher={"AES"} />
        </Box>
      

      

</Flex> 
    )
                      }
    else{
      return(
        <Center 
                h="100vh" 
                bgGradient="linear(black,rgba(23, 47, 66,1))"
                >   
                <Flex 
                 direction="column"
                 w="full"
                 align="center"
                 >
                    <Spinner 
                      size="xl" 
                      color="white" />

                    <Text 
                     mt={5}
                     color="white"
                     fontFamily="monospace" 
                     fontSize="2xl">
                         Loading your inbox...
                    </Text>

                 </Flex>
                    
                </Center>
      )
    }
}

export default Desk;


