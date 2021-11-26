import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
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
  const [databaseAliases,setDBAliases]=useState([])

  //States for errors
  const [emailErrorMessage,setEmailError]=useState("")
  const [aliasErrorMessage,setAliasError]=useState("")
  const [passwordErrorMessage,setPasswordError]=useState("")
  

  //History
  const history = useHistory();
 
  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  const getEmail=(e)=>{
      setEmailError("")
      let mailid = e.target.value;
      
      setEmailValidity(emailPattern.test(String(userEmail).toLowerCase()));
      setEmail(mailid); 
  }

  const getPassword=(e)=>{
    setPasswordError("")
    setPassword(e.target.value);
  }

  const getAlias=(e)=>{
    setAlias(e.target.value);
    
  }


  
  const handleSubmit=(e)=>{
    let error=false;
    e.preventDefault()
    setEmailValidity(emailPattern.test(String(userEmail).toLowerCase()));
    if(!emailValidity){setEmailError("[ Enter a proper email address! ]"); error=true;}

    if(userAlias.length==0){setAliasError("[ Enter an alias! ]");error=true;}

    if(userPassword.length==0){setPasswordError("[ Enter a password! ]");error=true;}
    if(error==true){console.log("Error is true");return;}

    let pass=true;
    
    console.log("Performing post request")
    fetch(`https://nightingale-project.herokuapp.com/tail/signup`,
    {
      method:"POST",
      body: JSON.stringify({
        email:userEmail,
        alias:userAlias,
        password:userPassword
      }),
      headers: {
        "Content-type":"application/json"
      },
    }
    ).then((response)=> response.json())
     .then((json)=>{
       console.log("Post response: ", json);
       if("mailError" in json){setEmailError("[ Email already exists! ]");pass=false;}
       if("aliasError" in json){setAliasError("[ Alias already exists! ]");pass=false;}
       if(pass==true){
         localStorage.setItem("jwt", json.jwt)
         console.log("JWT set in Signup")
         history.push("/desk",{"Alias":userAlias})}
      
     })
     
     
   
  }


  const fetchCredentialRecords=()=>{
    fetch(
      `https://nightingale-project.herokuapp.com/tail/user-details`,
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
        setDBAliases(json.aliases)
        console.log("Fetched")
      });
  }

  useEffect(() => {
    fetchCredentialRecords();
    if(databaseAliases!=null){
    if(databaseAliases.length>0){console.log("Aliases",databaseAliases)}
    if(databaseAliases.indexOf(userAlias)!=-1){setAliasError("[ Alias is taken! ]")}
    else{setAliasError("")}
    }
  },[userAlias]);

  return(
       <form onSubmit={handleSubmit}>
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
              CREATE AN ACCOUNT
            </Text>
            </Box>



          <Box w="full">
          <Flex direction="row">
          <FormLabel>
            <Text 
            fontFamily="monospace" 
            fontSize={{base:"xs",md:"md"}}
            color="white"
            >
              Email 
            </Text>
          </FormLabel>
          <Text 
            fontFamily="monospace" 
            fontSize={{base:"xs",md:"md"}}
            color="red.200"
            >
              {emailErrorMessage} 
            </Text>
          
          </Flex>

          <InputGroup>
          <InputLeftElement children= {<EmailIcon color="white"/>} />
          <Input 
            type="email" 
            isInvalid={(!emailValidity && userEmail.length>0)}
            fontFamily="monospace"
            bgColor="rgba(0,0,0,0.4)" 
            borderColor="rgba(255,255,255,0.2)"
            textColor="white"
            placeholder="Your email ID"
            onChange={getEmail}
            />
          </InputGroup>
          </Box>


          <Box w="full">
          <Flex direction="row">
          <FormLabel>
            <Text 
             fontFamily="monospace" 
             fontSize={{base:"xs",md:"md"}}
             color="white"
             >
               Secret Alias
            </Text>
          </FormLabel>
          <Text 
            fontFamily="monospace" 
            fontSize={{base:"xs",md:"md"}}
            color="red.200"
            >
              {aliasErrorMessage} 
            </Text>
          </Flex>

          <InputGroup>
          <InputLeftElement children= {<ViewIcon color="white"/>} />
          <Input 
            type="name" 
            bgColor="rgba(0,0,0,0.4)" 
            borderColor="rgba(255,255,255,0.2)"
            fontFamily="monospace"
            onChange={getAlias}
            textColor="white"
            placeholder="Who will you be known as?"/>
          </InputGroup>
          </Box>



          <Box w="full">
          <Flex direction="row">
          <FormLabel>
            <Text 
            fontFamily="monospace" 
            fontSize={{base:"xs",md:"md"}}
            color="white"
            >Password</Text>
          </FormLabel>
          <Text 
            fontFamily="monospace" 
            fontSize={{base:"xs",md:"md"}}
            color="red.200"
            >
              {passwordErrorMessage} 

            </Text>
            </Flex>

          <InputGroup>
          <InputLeftElement children= {<LockIcon color="white"/>} />
          <Input 
            type="password" 
            fontFamily="monospace"
            bgColor="rgba(0,0,0,0.4)" 
            borderColor="rgba(255,255,255,0.2)"
            onChange={getPassword}
            textColor="white"
            placeholder="Keep it strong"/>
          </InputGroup>
          </Box>

          

          <Button
           mt={{base:"1rem",md:"2rem"}}
           h={{base:"2rem",md:"3rem"}}
           _hover={{bgColor:"none"}}
           bgGradient="linear(to-l, rgba(102, 0, 51,0.9), red.600)"
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
             >Proceed
             </Text>
          </Button>

          

          </VStack>


        </FormControl>
        </form>
  )
  
}

export default SignUpForm;