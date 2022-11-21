import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import instance, { handleHTTPResponse } from "../config/axios";
import { BlueGreenButton, FormContainer } from "../styles/Styled";

interface ILogin {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !inputValidation({
        email: input.email,
        password: input.password,
      })
    ) {
      try {
        setIsError(false)
        setErrorMessage("")
        let user = await instance.post("http://localhost:8081/login", {
          email: input.email,
          password: input.password,
        });
        if (user.data.role == "BUYER") {
          navigate("/", { replace: true });
        } else if (user.data.role == "ADMIN") {
          navigate("/home-admin", { replace: true });
        }
      } catch (error) {
        setIsError(true)
        if (error instanceof Error){
          setErrorMessage(error.message)
        }
      }
    }
  };

  const [inputErrors, setInputErrors] = useState({
    email: false,
    password: false,
  });

  const inputValidation = (payload: ILogin) => {
    let errorState = {
      email: false,
      password: false,
    };
    let errorTotal = false;

    if (payload.email === "") {
      errorState = { ...errorState, email: true };
      errorTotal = true;
    }
    if (payload.password === "") {
      errorState = { ...errorState, password: true };
      errorTotal = true;
    }

    setInputErrors(errorState);
    return errorTotal;
  };

  return (
    <>
    {isError?(<div className="alert alert-danger" role="alert">{errorMessage}</div>):(<></>)}
    <div className="mt-5 d-flex justify-content-center">
      <FormContainer className="card py-5 px-5">
        <div className="d-flex flex-column align-items-center">
          <div className="mt-5">
            <h1 className="fw-bold fs-1">Login</h1>
          </div>
          <form onSubmit={handleLogin}>
            <div className="row mt-3">
              <label htmlFor="email" className="form-label fw-bold">
                Email
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope-at"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                    <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                  </svg>
                </span>
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="email@example.com"
                  value={input.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            {inputErrors.email ? (
              <span className="text-danger">This Field is Required</span>
            ) : (
              <></>
            )}
            <div className="row mt-3">
              <label htmlFor="password" className="form-label fw-bold">
                Password
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-key"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </span>
                <input
                  name="password"
                  type="password"
                  id="password"
                  className="form-control"
                  value={input.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            {inputErrors.password ? (
              <span className="text-danger">This Field is Required</span>
            ) : (
              <></>
            )}
            <div className="row mt-4 px-2">
              <BlueGreenButton type="submit">Login</BlueGreenButton>
            </div>
          </form>
          <div className="row my-2">
            <p>
              You don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </FormContainer>
    </div>
    </>
  );
}

export default Login;
