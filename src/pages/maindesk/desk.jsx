import React,{useState,useContext} from "react"
import Nightingale from "../../assets/Nightingale.gif"
import AliasContext from "../../Contexts/AliasContext"
import ChatDrawer from "../../components/Chat/ChatDrawer";
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
    Textarea,
    Divider,
    List,
    ListIcon,
    ListItem,
    Link
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
  bgGradient="linear(black,rgba(23, 47, 66,1))"
> 

    <ChatDrawer/>
    <Button
      pos="absolute"
      mr={5}
      mt={5}
      top="0%"
      right="0%"
      w="5%"
      h="5vw"
      _hover={{bgGradient:"linear(rgba(156, 45, 65,0.5),rgba(222, 102, 124,1))"}}
      _focus={{bgGradient:"linear(rgba(156, 45, 65,0.5),rgba(222, 102, 124,1))"}}
      _selected={{bgGradient:"linear(rgba(156, 45, 65,0.5),rgba(222, 102, 124,1))"}}
      bgGradient="linear(rgba(156, 45, 65,1),rgba(222, 102, 124,1))" 
      justify="center"
    >
                <VStack >
                    <ArrowBackIcon boxSize="1.5em"/>
                      <Text 
                        fontSize="sm"
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
          w="6%"
          />
        

          <Text 
           //mt={2}
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
   
  
  
   </Flex>
   
   <Flex
       mt={20}
       w="full"
       direction="row"
       h="60vh"
       bgGradient="linear(-45deg,rgba(38, 18, 31,0.7),black)"
       textColor="white"
       >   
        
        <Flex
        direction="column"
        w="full"
        h="full"
        align="center"
        p={7}
        > 
            <Flex
            dir="row"
            h="20%"
            w="full"
            fontFamily="Tahoma"
           
            >   
              <Text
                textAlign="center"
                w="20%"
                color="rgb(166, 93, 117)"
                fontSize="3xl">
                My Inbox
              </Text>

              <InputGroup >
               <InputLeftElement
                 pointerEvents="none"
                 children={<SearchIcon color="white"/>}
               />
                   <Input 
                     type="text" 
                      w="50%"
                      placeholder="Search for an alias.."
                      />
              </InputGroup>
            </Flex> 

            <Flex
             direction="row"
             align="center"
             h="80%"
             fontFamily="Tahoma"
             w="full" 
            > 
                <VStack
                align="center"
                w="20%"
                h="full"
                pt={5}
                >
                    <List spacing={5}>
                        <ListItem>
                          <ListIcon as={ChevronRightIcon} color="white"/>
                          <Link variant="ghost">All</Link> 
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
                </VStack>

                <Box 
                 h="full"
                 w="70%"
                 mt={5}
                 p={10}
                 fontFamily="Tahoma"
                 textColor="whiteAlpha.700"
                 bgColor="rgba(38, 18, 31,0.6)">

                  <Box
                   w="20%"
                   h="100%"
                   rounded="5%"
                   bgGradient="linear(rgb(6, 8, 7),rgb(14, 29, 41))"
                   boxShadow="0px 0px 1px 1px white"
                   >
                     <VStack
                       spacing={5}
                       align="center"
                       p={4}
                     >
                       <Text
                         align="center"
                         fontSize="sm"
                        >
                          FROM: ALICE
                        </Text>

                        <Button
                          mt={5}
                          _hover={{bgColor:"green.800"}}
                          size="sm"
                          bgColor="green.700"
                          ><ViewIcon color="white"/></Button>

                         <Button
                          _hover={{bgColor:"yellow.800"}}
                          size="sm"
                          bgColor="yellow.500"
                          ><SunIcon color="white"/></Button>

                        <Button
                          size="sm"
                          _hover={{bgColor:"red.800"}}
                          bgColor="red.500"
                          ><DeleteIcon color="white"/></Button>

                     </VStack>
                   </Box>
                 
                 </Box>
                 <Box
                   mt={5}
                   w="30%"
                   h="full"
                   textColor="whiteAlpha.500"
                   bgGradient="linear(rgba(115, 30, 58,0.9),rgba(38, 18, 31,0.9))"
                   >
                     <Text
                      fontSize="2xl"
                      textAlign="center"
                      fontWeight="bold"
                     >
                        Reading Area
                     </Text>
                      
                   </Box>
            </Flex> 

            </Flex> 
     </Flex>
       
      <Flex
       direction="row"
       w="full"
       
       align="center"
       fontFamily="Tahoma"
       
      >
        <VStack
          w="18%"
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
                    <Link variant="ghost">AES</Link>
                  </ListItem>

                  <ListItem>
                    <ListIcon as={UnlockIcon} color="white.600" />
                    <Link variant="ghost">DES</Link>
                  </ListItem>

                  <ListItem>
                    <ListIcon as={UnlockIcon} color="white.600" />
                    <Link variant="ghost">Triple DES</Link>
                  </ListItem>

                  <ListItem>
                    <ListIcon as={UnlockIcon} color="white.600" />
                    <Link variant="ghost">Blowfish</Link>
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
                    <Link variant="ghost">RSA</Link>
                  </ListItem>

                  <ListItem>
                    <ListIcon as={UnlockIcon} color="white.600" />
                    <Link variant="ghost">Diffie-Hellman</Link>
                  </ListItem>

                  <ListItem>
                    <ListIcon as={UnlockIcon} color="white.600" />
                    <Link variant="ghost">ECC</Link>
                  </ListItem>

                  <ListItem>
                    <ListIcon as={UnlockIcon} color="white.600" />
                    <Link variant="ghost">Shamir's Scheme</Link>
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
                    <Link variant="ghost">Caesar</Link>
                  </ListItem>

                  <ListItem>
                    <ListIcon as={UnlockIcon} color="white.600" />
                    <Link variant="ghost">Vigenere</Link>
                  </ListItem>

                  <ListItem>
                    <ListIcon as={UnlockIcon} color="white.600" />
                    <Link variant="ghost">Playfair</Link>
                  </ListItem>

                </List>
              </Box>
            </ListItem>

            <ListItem>
              <Text
               color="rgb(8, 171, 252)"
              >
                Hashes
              </Text>

               <Box
               pl={5}
              >
                <List spacing={2}>
                  <ListItem>
                    <ListIcon as={UnlockIcon} color="white.600" />
                    <Link variant="ghost">MD5</Link>
                  </ListItem>

                  <ListItem>
                    <ListIcon as={UnlockIcon} color="white.600" />
                    <Link variant="ghost">SHA Family</Link>
                  </ListItem>

                  <ListItem>
                    <ListIcon as={UnlockIcon} color="white.600" />
                    <Link variant="ghost">Blake Family</Link>
                  </ListItem>

                </List>
              </Box>
            </ListItem>


          </List>
          </Box>


        </VStack>
      </Flex>

      

</Flex> 
    )
}

export default Desk;

