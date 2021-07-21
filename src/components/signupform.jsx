import React from "react";

import {Formik,Form,Field} from "formik"
import 
{Flex,
    Stack,
    Box,
    Container,
    FormControl
} from "@chakra-ui/react"

 const SignUpForm=()=> {
    function validateName(value) {
        let error
        if (!value) {
          error = "Name is required"
        } else if (value.toLowerCase() !== "naruto") {
          error = "Jeez! You're not a fan 😱"
        }
        return error
      }
  return (
      <Container maxWidth="container.md" 
      h="100%" 
      w="30%" 
      bgGradient="linear(rgba(102, 0, 51,0.7),rgba(102, 0, 51,0.6),rgba(102, 0, 51,0.5))" 
      borderRadius="5%" 
      boxShadow="5px 5px 5px 5px #1a0000"
      borderTop="2px solid rgba(255,255,255,0.5)"
      borderLeft="1px solid rgba(255,255,255,0.5)"
      filter="auto"
      blur="1px"
      >
            <Formik
      initialValues={{ name: "Sasuke" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Field name="name" validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="name">First name</FormLabel>
                <Input {...field} id="name" placeholder="name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
      </Container>

  
    
  );
}

export default SignUpForm;
