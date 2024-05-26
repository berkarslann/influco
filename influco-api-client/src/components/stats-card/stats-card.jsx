import React, { useState } from "react";
import {
  MainContainer,
  Organizer,
  CardContainer,
  CardTextOrganizer,
  CardGeneralOrganizer,
  CardGeneralContainer,
} from "./styles";
import EventIcon from "../../assets/event.svg";
import VideoIcon from "../../assets/video.svg";
import RocketIcon from "../../assets/rocket.svg";
import FollowersIcon from "../../assets/followers.svg";
import { analyzeComments } from "../../redux/stats";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "react-lottie";
import animation from "../../assets/lottie.json";

export const StatsCard = ({ influencer }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const dispatch = useDispatch();
  const userStats = useSelector((state) => state.stats);

  const [isBig, setIsBig] = useState(false);

  const handleToggleSize = async (influencerId) => {
    setIsProcessing(true);

    console.log(userStats);
    setIsBig(!isBig);
    await dispatch(analyzeComments(influencerId));
    setIsProcessing(false); // İşlem devam ediyor ibaresini kaldır

    console.log(userStats);
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <MainContainer className={isBig ? "big" : ""}>
      {isBig ? (
        <>
          {isProcessing && (
            <div>
              <Lottie options={defaultOptions} height={200} width={200} />
              <p style={{ color: "black" }}>Processing...</p>
            </div>
          )}
          {!isProcessing && (
            <>
              <h3>
                {influencer.name} {influencer.surname}
              </h3>

              <CardGeneralContainer>
                <CardContainer>
                  <CardGeneralOrganizer>
                    <CardTextOrganizer>
                      <img
                        src={EventIcon}
                        alt="Events Icon"
                        style={{ width: "3rem" }}
                      />
                      <h2>{Object.keys(influencer.activities).length}</h2>

                      <h5>Events</h5>
                    </CardTextOrganizer>
                  </CardGeneralOrganizer>
                </CardContainer>

                <CardContainer>
                  <CardGeneralOrganizer>
                    <CardTextOrganizer>
                      <img
                        src={VideoIcon}
                        alt="Events Icon"
                        style={{ width: "3rem" }}
                      />
                      <h2>{Object.keys(influencer.series).length}</h2>

                      <h5>Series</h5>
                    </CardTextOrganizer>
                  </CardGeneralOrganizer>
                </CardContainer>
                <CardContainer>
                  <CardGeneralOrganizer>
                    <CardTextOrganizer>
                      <img
                        src={FollowersIcon}
                        alt="Events Icon"
                        style={{ width: "2.7rem" }}
                      />
                      <h2>{Object.keys(influencer.followers).length}</h2>

                      <h5>Subscribers</h5>
                    </CardTextOrganizer>
                  </CardGeneralOrganizer>
                </CardContainer>
                <CardContainer>
                  <CardGeneralOrganizer>
                    <CardTextOrganizer>
                      <img
                        src={RocketIcon}
                        alt="Events Icon"
                        style={{ width: "2.7rem" }}
                      />
                      <h2>{userStats.userStats}</h2>

                      <h5>Performance</h5>
                    </CardTextOrganizer>
                  </CardGeneralOrganizer>
                </CardContainer>
              </CardGeneralContainer>

              <button onClick={() => setIsBig(false)}>Minimize</button>
            </>
          )}
        </>
      ) : (
        <Organizer>
          <img
            src={`http://localhost:3000/${influencer.imageUrl}`}
            style={{ width: "20%", borderRadius: "50%", margin: "0.5rem" }}
          />
          <h3>
            {influencer.name} {influencer.surname}{" "}
          </h3>
          <button onClick={() => handleToggleSize(influencer._id)}>
            Show the stats
          </button>
        </Organizer>
      )}
    </MainContainer>
  );
};

export default StatsCard;
