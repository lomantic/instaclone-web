import { gql, useMutation } from "@apollo/client";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import FormBox from "../components/auth/FormBox";
import FormError from "../components/auth/FormError";
import Input from "../components/auth/Inputs";

import SubmitButton from "../components/auth/SubmitButton";
import PageTitle from "../components/PageTitle";
import { FatLink } from "../components/sharedStyles";
import routes from "./routes";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

function SignUp() {
  const history = useHistory();

  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    result?: string;
  }
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "onChange" });

  const onCompleted = (data: any) => {
    // gql 결과를 여기로 받음
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      setError("result", {
        message: error,
      });
      return;
    }
    history.push(routes.home);
  };

  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });

  const onsubmitValid: SubmitHandler<FormData> = (data) => {
    //console.log(data);
    if (loading) {
      return;
    }
    createAccount({
      variables: {
        ...data,
      },
    });
  };

  return (
    <AuthLayout>
      <PageTitle title="Sign Up" />
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />

          <SubTitle>Sign up to see photos and video from your friends</SubTitle>
        </HeaderContainer>
        <form onSubmit={handleSubmit(onsubmitValid)}>
          <Input
            {...register("firstName", { required: "first name is required" })}
            type="text"
            placeholder="First Name"
          />
          <FormError message={errors?.firstName?.message} />
          <Input
            {...register("lastName", { required: "last name is required" })}
            type="text"
            placeholder="Last Name"
          />
          <FormError message={errors?.lastName?.message} />
          <Input
            {...register("email", { required: "email is required" })}
            type="text"
            placeholder="Email"
          />
          <FormError message={errors?.email?.message} />
          <Input
            {...register("username", {
              required: "username is required",
              minLength: {
                value: 5,
                message: "Username should be longer than 5",
              },
            })}
            type="text"
            placeholder="Username"
          />
          <FormError message={errors?.username?.message} />
          <Input
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 5,
                message: "Password should be longer than 5",
              },
            })}
            type="password"
            placeholder="Password"
          />
          <FormError message={errors?.password?.message} />
          <SubmitButton
            type="submit"
            value={loading ? "Loading... " : "Sign up"}
            disabled={!isValid || loading}
          />
        </form>
      </FormBox>
      <BottomBox cta="Have an account?" linkText="Login" link={routes.home} />
    </AuthLayout>
  );
}
export default SignUp;
