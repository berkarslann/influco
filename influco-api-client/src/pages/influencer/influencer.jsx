import {
  MainContainer,
  OrtoContainer,
  ProfileInfoContainer,
  ProfileTextInfoContainer,
  SerieContainerWrapper,
  SerieContainer,
  Navigation,
  StyledBlueButton,
  StyledRedButton,
} from "./styles";
import logo from "../../assets/logo.png";
import logoremoved from "../../assets/logo-removed.png";
import { useDispatch, useSelector } from "react-redux";
import { getInfluencer } from "../../redux/influencer";
import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  StyledLoginButton,
  StyledSignupButton,
} from "../../layouts/navbar/style";
import auth, { logout } from "../../redux/auth";
import { useNavigate } from "react-router-dom";
import CreatePost from "../../components/create-post/create-post";
import ShowPosts from "../../components/show-posts/show-posts";

import { getCurrentUser } from "../../redux/auth";

const InfluencerPage = () => {
  const { influencerId } = useParams();
  const dispatch = useDispatch();
  const influencer = useSelector((state) => state.influencer);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getInfluencer(influencerId));
    dispatch(getCurrentUser());
  }, [dispatch, influencerId]);
  console.log(influencer.series);
  console.log(influencer.posts);

  const auth = useSelector((state) => state.auth);
  console.log("suraya bak bi", auth.currentUser);

  const postFollow = async (e) => {
    e.preventDefault();
    const postData = {
      userId: auth.currentUser._id,
    };
    try {
      const response = await fetch(
        `http://localhost:3000/feed/influencer/${influencerId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      window.location.reload();

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainContainer>
      <OrtoContainer>
        <Navigation>
          <Link to="/">
            <img
              src={logoremoved}
              alt="Logo"
              style={{ width: "20%", marginRight: "1rem" }}
            />
          </Link>
          {auth.currentUser ? (
            <StyledLoginButton
              onClick={() => {
                dispatch(logout());
                navigate("/");
              }}
            >
              Çıkış Yap
            </StyledLoginButton>
          ) : (
            <>
              <div>
                <StyledLoginButton onClick={() => navigate("/login")}>
                  Giriş Yap
                </StyledLoginButton>
                <StyledSignupButton onClick={() => navigate("/register")}>
                  Kaydol
                </StyledSignupButton>
              </div>
            </>
          )}
        </Navigation>

        <ProfileInfoContainer>
          <img
            src={`http://localhost:3000/${influencer.imageUrl}`}
            alt="Logo"
            style={{
              borderRadius: "50%",
              width: "15%",
              marginRight: "1rem",
              border: "12px solid beige",
            }}
          />
          <ProfileTextInfoContainer>
            <h1>
              {influencer.name} {influencer.surname}{" "}
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <h3 style={{ marginRight: "3rem" }}>
                {" "}
                {influencer.followers} Takipçi
              </h3>
              <h3> {influencer.post} Gönderi</h3>
            </div>

            <h4 style={{ width: "20vw" }}>{influencer.shortDescription}</h4>
            {auth.currentUser &&
            auth.currentUser.following &&
            auth.currentUser.following.includes(influencerId) ? (
              <>
                <p>Abonesiniz</p>
                <StyledRedButton onClick={(e) => postFollow(e)}>
                  Abonelikten Çık
                </StyledRedButton>
              </>
            ) : (
              <StyledBlueButton onClick={(e) => postFollow(e)}>
                Abone Ol
              </StyledBlueButton>
            )}
          </ProfileTextInfoContainer>
        </ProfileInfoContainer>

        <SerieContainerWrapper>
          <h1 style={{ color: "white", fontSize: "4rem" }}>Seriler</h1>

          {influencer.series.map((serie, index) => (
            <Link to={`/serie/${serie._id}`}>
              <SerieContainer key={index}>
                <img
                  src={`http://localhost:3000/${serie.imageUrl}`}
                  alt="Logo"
                  style={{ width: "30vw", marginRight: "1rem" }}
                />
                <h3>{serie.name}</h3>
              </SerieContainer>
            </Link>
          ))}
        </SerieContainerWrapper>

        <h1 style={{ color: "white" }}>Community Tunnel</h1>
        {auth.currentUser && auth.currentUser._id === influencerId && (
          <CreatePost />
        )}

        <ShowPosts posts={influencer.posts} img={influencer.imageUrl} />
      </OrtoContainer>
    </MainContainer>
  );
};

export default InfluencerPage;
