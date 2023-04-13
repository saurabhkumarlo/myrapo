import { Formik, Form } from "formik";
import { Grid, Stack, Heading, Flex, Text } from "@chakra-ui/layout";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import { useResetPasswordMutation } from "../../store/api/authApi";
import { useParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
const ChangePassword = () => {
  const [resetPassword, { data, isError, isLoading, isSuccess, error }] =
    useResetPasswordMutation();
  console.log(data,"data");

  const { token } = useParams();
  console.log(token,"token");

  const toast = useToast();
  if (isError) {
    toast({
      title: (error as any).data.message,
      status: "error",
      duration: 3000,
    });
  }

  // console.log(data);

  if (isSuccess) {
    toast({
      title: "Password change successfully",
      status: "success",
      duration: 3000,
    });
  }

  return (
    <Formik
      initialValues={{ password: "", confirmPassowrd: "" }}
      onSubmit={(values) => {
        if (token) resetPassword({ ...values, token });
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
              Reset Password
            </Heading>
            <InputControl
              name="password"
              label="Password"
              inputProps={{
                type: "password",
                placeholder: "Enter Password",
              }}
            />
            <InputControl
              name="confirmPassowrd"
              label="confirmPassowrd"
              inputProps={{
                type: "password",
                placeholder: "Enter confirmPassowrd",
              }}
            />

            <SubmitButton isLoading={isLoading}>Change Password</SubmitButton>
          </Stack>
        </Grid>
      </Form>
    </Formik>
  );
};

export default ChangePassword;
