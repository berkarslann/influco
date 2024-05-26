import {
  MainContainer,
  Navigation,
  FirstSection,
  SerieInfoContainer,
  SerieInfoImg,
  SerieInfoCard,
  SecondSection,
  SerieVideoWrapper,
  SerieVideoContainer,
  SerieVideoContainerWrapper,
} from "./style";
import logoremoved from "../../assets/logo-removed.png";
import { useDispatch, useSelector } from "react-redux";
import { getSingleSerie } from "../../redux/serie";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { logout } from "../../redux/auth";
import { getCurrentUser } from "../../redux/auth";
const SeriePage = () => {
  const { serieId } = useParams();
  const dispatch = useDispatch();
  const serie = useSelector((state) => state.serie);
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(getSingleSerie(serieId));
  }, [dispatch, serieId]);

  return (
    <MainContainer>
      <FirstSection>
        <Navigation>
          <img
            src={logoremoved}
            alt="Logo"
            style={{ width: "8%", marginRight: "1rem" }}
          />
          {auth.currentUser ? (
            <h3
              onClick={() => {
                dispatch(logout(), navigate("/"));
              }}
              style={{ cursor: "pointer" }}
            >
              Çıkış Yap
            </h3>
          ) : (
            <h3
              onClick={() => {
                navigate("/login");
              }}
              style={{ cursor: "pointer" }}
            >
              Giriş Yap
            </h3>
          )}
        </Navigation>
        <SerieInfoContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1>{serie.name}</h1>
            {auth.currentUser ? (
              <button>Kaydolun</button>
            ) : (
              // Giriş yapma işlemleri burada gerçekleştirilebilir
              <button>Giriş Yapın ve Kaydolun</button>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <img
              src={`http://localhost:3000/${serie.influencer.imageUrl}`}
              alt="Logo"
              style={{
                width: "8%",
                margin: "1rem",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            />

            <h5>{serie.influencer.name} tarafından</h5>
          </div>

          <SerieInfoImg>
            <img
              src={`http://localhost:3000/${serie.imageUrl}`}
              alt="Resim Açıklaması"
            />
          </SerieInfoImg>
       

          <SerieInfoCard>
            <h1>Bu seri hakkında</h1>
            <h2 style={{ width: "50vw" }}>{serie.shortDescription}</h2>
          </SerieInfoCard>
        </SerieInfoContainer>
      </FirstSection>

      <SecondSection>
        <h1>Videolar</h1>
        <h2 style={{ color: "gold" }}>Toplam {serie.videos.length} bölüm</h2>
        <h3>Bölümler</h3>

        <SerieVideoWrapper>
          {serie.videos?.map((video, index) => (
            <SerieVideoContainerWrapper key={index}>
              <h3>Bölüm {index + 1}</h3>
              <SerieVideoContainer>
                {auth.currentUser ? (
                  <video controls width="500" style={{ marginRight: "1rem" }}>
                    <source
                      src={`http://localhost:3000/${video.videoUrl}`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div
                    style={{
                      position: "relative",
                      width: "500px",
                      marginRight: "1rem",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        color: "#fff",
                        padding: "1rem",
                      }}
                    >
                      Videoları görüntülemek için giriş yapmalısınız.
                    </div>
                  </div>
                )}
                <div>
                  <h2>{video.title}</h2>
                  <h3>{video.description}</h3>
                </div>
              </SerieVideoContainer>
            </SerieVideoContainerWrapper>
          ))}
        </SerieVideoWrapper>
      </SecondSection>
    </MainContainer>
  );
};

export default SeriePage;
