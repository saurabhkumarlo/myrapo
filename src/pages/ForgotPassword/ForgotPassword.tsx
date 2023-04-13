import { Formik, Form } from "formik";
import { Grid, Stack, Heading, Flex, Text } from "@chakra-ui/layout";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import { useSendEmailMutation } from "../../store/api/authApi";
const ForgotPassword = () => {
  const [sendEmail, { data, isError, isLoading }] = useSendEmailMutation()
  console.log(data);
  if (isError) return console.log(isError);


  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values) => {
        sendEmail({ ...values });
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
              Forgot Password
            </Heading>
            <InputControl
              name="email"
              label="Email"
              inputProps={{
                type: "email",
                placeholder: "Enter Email",
              }}
            />

            <SubmitButton isLoading={isLoading}>Send Email</SubmitButton>
          </Stack>
        </Grid>
      </Form>
    </Formik>
  );
};

export default ForgotPassword;
