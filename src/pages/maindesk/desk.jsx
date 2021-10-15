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

    const [cipher,setCipher]=useState("AES")

    const [readArea,setReadArea] = useState("");

    //const messages = [['Alucard', 'PostgreSQL can store the representation of an “infinite” date, timestamp, or interval. Infinite dates are not available to Python', '10th Oct 2008'], ['Alucard', 'PostgreSQL can store the representation of an “infinite” date, timestamp, or interval. Infinite dates are not available to Python', '10th Oct 2008'], ['Alucard', 'PostgreSQL can store the representation of an “infinite” date, timestamp, or interval. Infinite dates are not available to Python', '10th Oct 2008']]
    const [messages,setMessages]=useState([])
   

    const getInbox=()=>{
      fetch(
        `http://127.0.0.1:5000/tail/get-inbox`,
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
       h="50vh"
       bgGradient="linear(-45deg,rgba(38, 18, 31,0.7),black)"
       textColor="white"
       >   
        
        <Flex
        direction="column"
        w="full"
        h="full"
        align="center"
        p={{base:2,md:7}}
        > 
            

            <Stack
             direction={{base:"column",md:"row"}}
             align={{md:"center"}}
             h="80%"
             fontFamily="monospace"
             w="full" 
            > 
                <Stack
                direction={{base:"row",md:"column"}}
                align={{md:"center"}}
                w={{base:"full",md:"23%"}}
                h="full"
                display={{base:"none",md:"block"}}
                pt={5}
                >
                    <Text
                      textAlign="center"
                      w="full"
                      color="rgb(166, 93, 117)"
                      fontSize={{base:"2xl",md:"3xl"}}>
                          Inbox
                    </Text>
                    <List spacing={5} fontSize={{md:"md"}} >
                        <ListItem>
                          <ListIcon as={ChevronRightIcon} color="white"/>
                          <Link variant="ghost" >All</Link> 
                        </ListItem>

                        <ListItem>
                          <ListIcon as={ChevronRightIcon} color="white"/>
                          <Link variant="ghost">Starred</Link> 
                        </ListItem>

                        <ListItem>
                          <ListIcon as={ChevronRightIcon} color="white"/>
                          <Link variant="ghost">Sent</Link> 
                        </ListItem>

                        <ListItem>
                          <ListIcon as={ChevronRightIcon} color="white"/>
                          <Link variant="ghost">Trash</Link> 
                        </ListItem>                        
                    </List>
                </Stack>

                <Box 
                 h="full"
                 w={{base:"full",md:"70%"}}
                 mt={5}
                 p={{base:0,md:10}}
                 fontFamily="monospace"
                 textColor="whiteAlpha.700"
                 bgColor="rgba(38, 18, 31,0.6)"
                 overflowY="scroll"
                 >

                   <InputGroup mb={4}>
                    <InputLeftElement
                      children={<SearchIcon color="white"/>}
                      pointerEvents="none"
                    />
                    <Input w={{base:"full",md:"100%"}} placeholder="Search alias.." />
                   </InputGroup>

                     <Table variant="simple" display={{base:"block",md:"block"}} >
                       <Thead>
                         <Tr>
                           <Th>Time</Th>
                           <Th>Alias</Th>
                           <Th>Read</Th>
                           <Th>Star</Th>
                           <Th>Delete</Th>
                         </Tr>
                       </Thead>
                       
                       <Tbody>
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
                            
                            <Td>
                             <Button
                                 size="sm"
                                 bgColor="yellow.700"
                                 _hover={{bgColor:"yellow.800"}}
                                 _focus={{bgColor:"yellow.700"}}
                              >
                                  <SunIcon color="white"/>
                              </Button>
                            </Td>
                                
                            <Td>
                              <Button
                                 size="sm"
                                 bgColor="red.700"
                                 _hover={{bgColor:"red.800"}}
                                 _focus={{bgColor:"red.700"}}
                                >
                                  <DeleteIcon color="white"/>
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
                   h="full"
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
       
      <Stack
       direction={{base:"column",md:"row"}}
       w="full"
       
       //align="center"
       fontFamily="monospace"
       
      >
        <VStack
          w={{base:"full",md:"25%"}}
          bgGradient="linear(rgba(0,0,0,0.6),black)"
          p={7}
        >
          <Text
            bgGradient="linear(rgb(2, 46, 59),rgb(15, 212, 153))"
            bgClip="text"
            fontSize="3xl"
            fontWeight="bold"
           >Ciphers</Text>
          
          <Box
          textColor="white"
          pt={5}
          >
          <List spacing={5}>
            <ListItem>
              <Text
               color="rgb(8, 171, 252)"
              >
                Symmetric Ciphers
              </Text>

               <Box
               pl={5}
              >
                <List spacing={2}>
                  <ListItem>
                    <ListIcon as={UnlockIcon} color="white.600" />
                      <Link 
                        variant="ghost"
                        onClick={()=>{setCipher("AES")}}
                      >
                        AES
                      </Link>
                  </ListItem>

                  <ListItem>
                    <ListIcon as={UnlockIcon} color="white.600" />
                      <Link 
                        variant="ghost"
                        onClick={()=>{setCipher("DES")}}
                      >
                          DES
                      </Link>
                  </ListItem>

                  <ListItem>
                    <ListIcon as={UnlockIcon} color="white.600" />
                      <Link 
                        variant="ghost"
                        onClick={()=>{setCipher("Triple DES")}}
                      >
                        Triple DES
                      </Link>
                  </ListItem>

                </List>
              </Box>
            </ListItem>

            <ListItem>
              <Text
               color="rgb(8, 171, 252)"
              >
                Asymmetric and Other Schemes
              </Text>
              


               <Box
               pl={5}
              >
                <List spacing={2}>
                  <ListItem>
                    <ListIcon as={UnlockIcon} color="white.600" />
                    <Link 
                        variant="ghost"
                        onClick={()=>{setCipher("RSA")}}
                      >
                        RSA
                      </Link>
                  </ListItem>

                  <ListItem>
                    <ListIcon as={UnlockIcon} color="white.600" />
                    <Link 
                        variant="ghost"
                        onClick={()=>{setCipher("Diffie-Hellman")}}
                      >
                        Diffie-Hellman
                      </Link>
                  </ListItem>

                  <ListItem>
                    <ListIcon as={UnlockIcon} color="white.600" />
                    <Link 
                        variant="ghost"
                        onClick={()=>{setCipher("ECC")}}
                      >
                        ECC
                      </Link>
                  </ListItem>

                
                </List>
              </Box>
            </ListItem>


            <ListItem>
              <Text
               color="rgb(8, 171, 252)"
              >
                Classics
              </Text>

               <Box
               pl={5}
              >
                <List spacing={2}>
                  <ListItem>
                    <ListIcon as={UnlockIcon} color="white.600" />
                    <Link 
                        variant="ghost"
                        onClick={()=>{setCipher("Caesar Cipher")}}
                      >
                        Caesar Cipher
                      </Link>
                  </ListItem>

                  <ListItem>
                    <ListIcon as={UnlockIcon} color="white.600" />
                    <Link 
                        variant="ghost"
                        onClick={()=>{setCipher("Vigenere Cipher")}}
                      >
                        Vigenere Cipher
                      </Link>
                  </ListItem>

                  <ListItem>
                    <ListIcon as={UnlockIcon} color="white.600" />
                    <Link 
                        variant="ghost"
                        onClick={()=>{setCipher("Playfair Cipher")}}
                      >
                        Playfair Cipher
                      </Link>
                  </ListItem>

                </List>
              </Box>
            </ListItem>



          </List>
          </Box>


        </VStack>

        <Box 
         w="full" 
         h="full"
         p={10}
         //bgColor="green"
         >
           <CipherForm cipher={cipher} />
        </Box>
      </Stack>

      

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

