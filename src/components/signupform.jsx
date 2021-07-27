import React,{useState,useEffect} from "react";
import {EmailIcon,ViewIcon,LockIcon} from "@chakra-ui/icons";


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
    Link,
    VStack,
    Tag,
    TagLabel,
    TagLeftIcon
    
} from "@chakra-ui/react"

const SignUpForm=()=>{


  //User entries
  const [userEmail,setEmail] = useState("");
  const [userPassword,setPassword] = useState("");
  const [userAlias,setAlias] = useState("");

  //States for validation
  const [emailValidity,setEmailValidity] = useState(false);
  const [databaseEmails,setDBEmails]=useState([])
  const [databaseAliases,setDBAliases]=useState([])

  //States for errors
  const [emailErrorMessage,setEmailError]=useState("Email address already exists")
  const [aliasErrorMessage,setAliasError]=useState("Alias is taken")



  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  const getEmail=(e)=>{
      let mailid = e.target.value;
      
      setEmailValidity(emailPattern.test(String(userEmail).toLowerCase()));
      setEmail(mailid); 
  }

  const getPassword=(e)=>{
    setPassword(e.target.value);
  }

  const getAlias=(e)=>{
    setAlias(e.target.value);
  }
  
  const handleSubmit=(e)=>{

    setEmailValidity(emailPattern.test(String(userEmail).toLowerCase()));
    if(!emailValidity){setEmailError("Enter a proper email address!")}
    
    fetch(`http://127.0.0.1:5000/tail/user-details`,
    {
      method:"POST".
      headers: {
        "Content-type":""
      }
    }
    )

    


  }
  const fetchCredentialRecords=()=>{
    fetch(
      `http://127.0.0.1:5000/tail/user-details`,
      {
        method: "GET",
        headers: {
         "Content-type": "application/json",
      },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDBEmails(json.emails)
        setDBAliases(json.aliases)
        console.log("Fetched")
      });
  }

  useEffect(() => {
    fetchCredentialRecords();
    if(databaseEmails.length>0)console.log("Emails",databaseEmails)
    if(databaseAliases.length>0)console.log("Aliases",databaseAliases)
  },[]);

  return(
       <form >
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
              CREATE AN ACCOUNT
            </Text>
            </Box>



          <Box w="full">
          <Flex direction="row">
          <FormLabel>
            <Text 
            fontFamily="Tahoma" 
            fontSize={{base:"xs",md:"md"}}>
              Email 
            </Text>
          </FormLabel>
          <Text 
            fontFamily="Tahoma" 
            fontSize={{base:"xs",md:"md"}}
            color="red.200"
            >
             [ {emailErrorMessage} ]

            </Text>
          
          </Flex>

          <InputGroup>
          <InputLeftElement children= {<EmailIcon/>} />
          <Input 
            type="email" 
            isInvalid={(!emailValidity && userEmail.length>0)}
            fontFamily="Tahoma"
            bgColor="rgba(0,0,0,0.4)" 
            placeholder="Your email ID"
            onChange={getEmail}
            />
          </InputGroup>
          </Box>


          <Box w="full">
          <Flex direction="row">
          <FormLabel>
            <Text 
             fontFamily="Tahoma" 
             fontSize={{base:"xs",md:"md"}}>
               Secret Alias
            </Text>
          </FormLabel>
          <Text 
            fontFamily="Tahoma" 
            fontSize={{base:"xs",md:"md"}}
            color="red.200"
            >
             [ {aliasErrorMessage} ]

            </Text>
          </Flex>

          <InputGroup>
          <InputLeftElement children= {<ViewIcon/>} />
          <Input 
            type="name" 
            bgColor="rgba(0,0,0,0.4)" 
            fontFamily="Tahoma"
            onChange={getAlias}
            placeholder="Who will you be known as?"/>
          </InputGroup>
          </Box>



          <Box w="full">
          <FormLabel>
            <Text fontFamily="Tahoma" fontSize={{base:"xs",md:"md"}}>Password</Text>
          </FormLabel>

          <InputGroup>
          <InputLeftElement children= {<LockIcon/>} />
          <Input 
            type="password" 
            fontFamily="Tahoma"
            bgColor="rgba(0,0,0,0.4)" 
            onChange={getPassword}
            placeholder="Keep it strong"/>
          </InputGroup>
          </Box>

          

          <Button
           mt={{base:"1rem",md:"2rem"}}
           h={{base:"2rem",md:"3rem"}}
           _hover={{bgColor:"none"}}
           bgGradient="linear(to-l, rgba(102, 0, 51,0.5), red.600)"
           boxShadow="0px 0px 6px 6px black"
           borderTop="2px solid rgba(255,255,255,0.5)"
           borderLeft="1px solid rgba(255,255,255,0.5)"  
           borderRadius="2%" 
           type="submit"
          >
            <Text fontFamily="Tahoma" fontSize={{base:"xs",md:"md"}}>Proceed</Text>
          </Button>

          

          </VStack>


        </FormControl>
        </form>

        
  
  )
}

export default SignUpForm;