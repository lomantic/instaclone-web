import { gql, useMutation } from "@apollo/client";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { logUserIn } from "../apollo";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import FormBox from "../components/auth/FormBox";
import FormError from "../components/auth/FormError";
import Input from "../components/auth/Inputs";
import Separator from "../components/auth/Separator";
import SubmitButton from "../components/auth/SubmitButton";
import PageTitle from "../components/PageTitle";

import routes from "./routes";

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

function Login() {
  interface FormData {
    username: string;
    password: string;
    result?: string;
  }
  const {
    register,
    /*watch,*/ handleSubmit,
    formState: { errors, isValid },
    //getValues,
    setError,
    clearErrors,
  } = useForm<FormData>({ mode: "onChange" });
  //console.log(watch());
  const onCompleted = (data: any) => {
    const {
      login: { ok, error, token },
    } = data;
    if (!ok) {
      setError("result", {
        message: error,
      });
    }
    if (token) {
      logUserIn(token);
    }
  };

  const [login, { loading }] = useMutation(LOGIN_MUTATION, { onCompleted });

  const onsubmitValid: SubmitHandler<FormData> = (data) => {
    //console.log(data);
    if (loading) {
      return;
    }
    const { username, password } = data; //getValues() 는 data 필요없음
    login({
      variables: { username, password },
    });
  };
  const onsubmitInValid: SubmitErrorHandler<FormData> = (data) => {
    //console.log(data);
  };
  const clearLoginError = () => {
    clearErrors("result");
  };
  return (
    <AuthLayout>
      <PageTitle title="Login" />
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form onSubmit={handleSubmit(onsubmitValid, onsubmitInValid)}>
          <Input
            {...register("username", {
              required: "username is required",
              minLength: {
                value: 5,
                message: "Username should be longer than 5",
              },
              //pattern: /[a-zA-Z]
              //error
              //validate: (currentValue:any) => currentValue.includes("Lomantic"),
            })}
            onChange={clearLoginError}
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
            value={loading ? "Loading... " : "Log in"}
            disabled={!isValid || loading}
          />
          <FormError message={errors?.result?.message} />
        </form>
        <Separator />

        <span>Log in with Facebook</span>
      </FormBox>
      <BottomBox
        cta="Don't have an account?"
        linkText="Sign up"
        link={routes.signUp}
      />
    </AuthLayout>
  );
}
export default Login;
