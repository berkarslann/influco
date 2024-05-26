import {
  MainContainer,
  SideSection,
  SideButton,
  ButtonWrapper,
  LeftSideSection,
  StyledButtonV1,
} from "./styles";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { GiPartyPopper } from "react-icons/gi";
import { MdQueryStats } from "react-icons/md";
import React, { useState, useEffect } from "react";
import logo from "../../assets/logo-removed.png";
import SerieAdding from "../../components/serie-adding/serie-adding";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/auth";
import SerieShow from "../../components/serie-show/serie-show";
import { logout } from "../../redux/auth";
import { Link, useNavigate } from "react-router-dom";
import ActivityShow from "../../components/activity-show/activity-show";
const ControlPanelPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSection, setShowSection] = useState("series");
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  console.log(auth.currentUser);
  return (
    <MainContainer>
      <SideSection>
        <Link
          to={"/"}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            style={{
              width: "50%",
            }}
          />
        </Link>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <img
            src={`http://localhost:3000/${auth.currentUser.imageUrl}`}
            style={{ width: "20%", borderRadius: "50%", margin: "0.5rem" }}
          />

          <h4>
            {auth.currentUser.name} {auth.currentUser.surname}
          </h4>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginLeft: "1rem",
          }}
        ></div>
        <h3 style={{ marginRight: "auto" }}>Panel</h3>
        <hr style={{ width: "100%" }} />
        <ButtonWrapper>
          <SideButton
            onClick={() => {
              setShowSection("series");
            }}
          >
            <AiOutlineVideoCameraAdd
              style={{ width: "2rem", height: "2rem" }}
            />
            <h3>Series</h3>
          </SideButton>
         

          {auth.currentUser.userType === "influencer" && (
            <SideButton
              onClick={() => {
                setShowSection("stats");
              }}
            ></SideButton>
          )}
        </ButtonWrapper>
        <h3 style={{ marginRight: "auto" }}>Account</h3>
        <hr style={{ width: "100%" }} />
        <ButtonWrapper>
          <SideButton
            onClick={() => {
              dispatch(logout(), navigate("/"));
            }}
          >
            <CiLogout style={{ width: "2rem", height: "2rem" }} />
            <h3>Logout </h3>
          </SideButton>
        </ButtonWrapper>
      </SideSection>

      {showSection === "series" && (
        <LeftSideSection>
          <h1 style={{ color: "#c4beb4", marginTop: "4rem" }}>SERIES</h1>
          {auth.currentUser.userType === "user" ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginBottom: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginBottom: "auto",
                  color: "#c4beb4",
                }}
              >
                <h2>Following Series</h2>
                <SerieShow></SerieShow>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginBottom: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginBottom: "auto",
                  color: "#c4beb4",
                }}
              >
                <h2>Create a Serie</h2>
                <h4>Create series for your users to follow.</h4>
                <StyledButtonV1 onClick={toggleDropdown}>
                  {showDropdown ? "Show the series" : "Create a serie"}
                </StyledButtonV1>{" "}
              </div>
              {showDropdown ? (
                <div style={{ width: "65rem" }}>
                  <SerieAdding />
                </div>
              ) : (
                <>
                  <h2 style={{ color: "#c4beb4" }}>Your series</h2>
                  <SerieShow></SerieShow>
                </>
              )}
            </div>
          )}
        </LeftSideSection>
      )}

      {showSection === "activities" && (
        <LeftSideSection>
          <h1 style={{ color: "#c4beb4", marginTop: "4rem" }}>ACTIVITIES</h1>
          {auth.currentUser.userType === "user" ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginBottom: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginBottom: "auto",
                  color: "#c4beb4",
                }}
              >
                <h2>The activities you've joined.</h2>
                <ActivityShow></ActivityShow>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginBottom: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginBottom: "auto",
                  color: "#c4beb4",
                }}
              >
                <h2>Aktivite istekleri</h2>
                <h4>Markalardan gelen aktivite istekleri burada gözükür.</h4>
              </div>
              {showDropdown ? (
                <div style={{ width: "65rem" }}>
                  <SerieAdding />
                </div>
              ) : (
                <>
                  <div className="row row-cols-3 g-3"></div>
                </>
              )}
            </div>
          )}
        </LeftSideSection>
      )}
    </MainContainer>
  );
};

export default ControlPanelPage;
