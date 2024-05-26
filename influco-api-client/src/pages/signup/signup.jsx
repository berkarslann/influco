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
import logo from "../../assets/logo-removed.png";
import React, { useState } from "react";
import { StyledButtonV1 } from "../control-panel/styles";
import showpic1 from "../../assets/showpic1.png";
const SignupPage = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonType) => {
    setActiveButton(buttonType);
  };
  return (
    <MainContainer>
      <RightSideSection>
        <LoginContainer>
          <StyledDivV1>
            <img src={logo} style={{ width: "10vw" }} />
          </StyledDivV1>

          <h1>Create an Account</h1>
          <StyledDivV2>
            <h3>What will you register as?</h3>
            <StyledDivV1>
              <StyledInputButton
                isActive={activeButton === "influencer"}
                onClick={() => handleClick("influencer")}
              >
                <img src={logo} style={{ width: "10vw" }} alt="influencer" />
                <h1>Content Creator</h1>
              </StyledInputButton>
              <StyledInputButton
                isActive={activeButton === "user"}
                onClick={() => handleClick("user")}
              >
                <img src={logo} style={{ width: "10vw" }} alt="User" />
                <h1>User</h1>
              </StyledInputButton>
              <StyledInputButton
                isActive={activeButton === "brand"}
                onClick={() => handleClick("brand")}
              >
                <img src={logo} style={{ width: "10vw" }} alt="Brand" />
                <h1>Brand</h1>
              </StyledInputButton>
            </StyledDivV1>
          </StyledDivV2>

          <LoginForm>
            <StyledDivV2 style={{ margin: "3rem" }}>
              {activeButton === "user" || activeButton === "influencer" ? (
                <>
                  <label>Name Surname</label>
                  <StyledInput
                    type="text"
                    placeholder="Name Surname"
                  ></StyledInput>
                  
                </>
              ) : (
                <>
                <label>Brand Name</label>
                <StyledInput
                  type="text"
                  placeholder="Name Surname"
                ></StyledInput>
                
              </>
              )}
              <label>E-mail</label>
              <StyledInput type="email" placeholder="E-mail"></StyledInput>
              <label>Password</label>
              <StyledInput type="password" placeholder="Password"></StyledInput>
              <StyledButtonV1>Sign Up</StyledButtonV1>
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

export default SignupPage;
