import { Formik, Form } from "formik";
import { Grid, Stack, Heading, } from "@chakra-ui/layout"
import { InputControl, SubmitButton } from "formik-chakra-ui";
import { useSignupUserMutation } from "../../store/api/authApi";
const Signup = () => {
    const [signupUser, { data, isLoading, isError, error, isSuccess }] = useSignupUserMutation()

    console.log(data);
    if (isLoading) return console.log(" ....isLoading");
    if (error) return console.log(error);
    if (isSuccess) return console.log("isSuccess");

    return (
        <Formik
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={(values) => {
                signupUser({ ...values })
              }}
        >
            <Form>
                <Grid h="100vh" placeItems="center">
                    <Stack p="4" boxShadow="xl" borderRadius="md">
                        <Heading color="teal" textAlign="center" fontSize="lg" fontWeight="semibold">Signup</Heading>
                        <InputControl name="name" label="Name" inputProps={{
                            type: "text",
                            placeholder: "Enter Name"
                        }} />
                        <InputControl name="email" label="Email" inputProps={{
                            type: "email",
                            placeholder: "Enter Email"
                        }} />
                        <InputControl name="password" label="Password" inputProps={{
                            type: "password",
                            placeholder: "Enter Password"
                        }} />

                        <SubmitButton isLoading={isLoading} >Signup</SubmitButton>
                    </Stack>
                </Grid>
            </Form>
        </Formik>
    );
};

export default Signup;


