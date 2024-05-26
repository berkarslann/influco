import logo from "../../assets/logo-removed.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ButtonContainer, NavContainer, StyledButton } from "./style";
import { getCurrentUser, logout } from "../../redux/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { StyledLoginButton, StyledSignupButton } from "./style";
const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const logoutRequest = () => {
    try {
      dispatch(logout());
      window.location.reload(); // Sayfayı yenile
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <NavContainer>
      <img src={logo} style={{ width: "10%" }} />
      <ButtonContainer>
        {auth.currentUser ? (
          <>
            <StyledButton>Homepage</StyledButton>
       
            <Link to="/control-panel">
              <StyledButton>Profile</StyledButton>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <StyledLoginButton>Login</StyledLoginButton>
            </Link>
            <Link to="/signup">
              <StyledSignupButton>Signup</StyledSignupButton>
            </Link>
          </>
        )}

        {auth.currentUser && (
          <StyledButton
            onClick={() => {
              dispatch(logout(), navigate("/"));
            }}
          >
            Logout
          </StyledButton>
        )}
      </ButtonContainer>
    </NavContainer>
  );
};

export default Navbar;
