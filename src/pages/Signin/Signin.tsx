import { Formik, Form } from "formik";
import { Grid, Stack, Heading, Flex, Text } from "@chakra-ui/layout";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import { useSigninUserMutation } from "../../store/api/authApi";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const toast = useToast()
  const navigate = useNavigate()

  const [signinUser, { data, isLoading, isError, error }] = useSigninUserMutation()
  console.log(data);
  if (isLoading) return console.log(" ....isLoading");
  if (isError) {
    toast({
      title: (error as any).data.message,
      status: "error",
      duration: 3000
    })
  }


  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        signinUser({ ...values })
      }}
    >
      <Form>
        <Grid h="100vh" placeItems="center">
          <Stack p="4" boxShadow="xl" borderRadius="md">
            <Heading
              color="teal"
              textAlign="center"
              fontSize="lg"
              fontWeight="semibold"
            >
              Signin
            </Heading>
            <InputControl
              name="email"
              label="Email"
              inputProps={{
                type: "email",
                placeholder: "Enter Email",
              }}
            />
            <InputControl
              name="password"
              label="Password"
              inputProps={{
                type: "password",
                placeholder: "Enter Password",
              }}
            />

            <Flex justify="flex-end">
              <Text color="teal" cursor="pointer" onClick={() => navigate("/send-verify-mail")}>Forgot Password</Text>
            </Flex>
            <SubmitButton>Signin</SubmitButton>
          </Stack>
        </Grid>
      </Form>
    </Formik>
  );
};

export default Signin;
