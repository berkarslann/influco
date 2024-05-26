import {
  MainContainer,
  LoginContainer,
  RightSideSection,
  LeftSideSection,
  StyledDivV1,
  LoginForm,
  StyledInputButton,
  StyledDivV2,
  StyledInput,
} from "./styles";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo-removed.png";
import React, { useState } from "react";
import { StyledButtonV1 } from "../control-panel/styles";
import showpic1 from "../../assets/showpic1.png";
import { loginUser } from "../../redux/auth";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../redux/auth";
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
    userType: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(form);
  };

  const handleClick = (buttonType, userType) => {
    setActiveButton(buttonType);
    setForm((prevForm) => ({
      ...prevForm,
      userType: userType,
    }));
  };

  const loginRequest = async (e) => {
    try {
      e.preventDefault();
      const response = await dispatch(loginUser(form));
      localStorage.setItem("accessToken", response.payload.accessToken);
      if (response.payload.userType === "brand") {
        navigate("/brand-panel");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainContainer>
      <RightSideSection>
        <LoginContainer>
          <StyledDivV1>
            <img src={logo} style={{ width: "10vw" }} />
          </StyledDivV1>

          <h1>Login</h1>
          <StyledDivV2>
            <h3>What will you log in as?</h3>
            <StyledDivV1>
              <StyledInputButton
                isActive={activeButton === "influencer"}
                onClick={() => handleClick("influencer", "influencer")}
              >
                <img src={logo} style={{ width: "10vw" }} alt="Influencer" />
                <h1>Content Creator</h1>
              </StyledInputButton>
              <StyledInputButton
                isActive={activeButton === "user"}
                onClick={() => handleClick("user", "user")}
              >
                <img src={logo} style={{ width: "10vw" }} alt="User" />
                <h1>User</h1>
              </StyledInputButton>
              <StyledInputButton
                isActive={activeButton === "brand"}
                onClick={() => handleClick("brand", "brand")}
              >
                <img src={logo} style={{ width: "10vw" }} alt="Brand" />
                <h1>Brand</h1>
              </StyledInputButton>
            </StyledDivV1>
          </StyledDivV2>

          <LoginForm onSubmit={loginRequest}>
            <StyledDivV2 style={{ margin: "3rem" }}>
              <label>E-mail</label>
              <StyledInput name="email" onChange={handleChange}></StyledInput>
              <label>Password</label>
              <StyledInput
                name="password"
                onChange={handleChange}
                type="password"
              ></StyledInput>
              <StyledButtonV1>Login</StyledButtonV1>
            </StyledDivV2>
          </LoginForm>
        </LoginContainer>
      </RightSideSection>

      <LeftSideSection>
        <img src={showpic1} style={{ width: "80%" }} alt="Brand" />
      </LeftSideSection>
    </MainContainer>
  );
};

export default LoginPage;
