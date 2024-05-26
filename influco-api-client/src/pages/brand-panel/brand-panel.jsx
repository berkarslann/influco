import {
  MainContainer,
  FirstContainer,
  GapContainer,
  SecondContainer,
  InfoContainerV1,
  InfoContainerV2,
  InfoContainerWrapper,
  CommunityContainer,
  ThirdContainer,
  InfluencerContainer,
} from "./styles";
import showroom from "../../assets/showroom.png";
import influencer1 from "../../assets/influencer1.jpeg";
import influencer2 from "../../assets/influencer2.jpeg";
import Navbar from "../../layouts/navbar/navbar";
import { StyledSignupButton } from "../../layouts/navbar/style";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import StatsCard from "../../components/stats-card/stats-card";
import { getAllInfluencer } from "../../redux/influencer";
const BrandPanelPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllInfluencer());
  }, [dispatch]);
  const influencers = useSelector((state) => state.influencer);
  console.log("buradaki", influencers);
  const influencersArray = influencers.influencers; // influencers dizisi

  return (
    <MainContainer>
      <FirstContainer>
        <Navbar />
        <h1 style={{ color: "white" }}>
          Explore the potential of content creators.
        </h1>
        <h3 style={{ color: "white" }}>
          Establish creative collaborations, organize events, and enhance your
          brand awareness with Influco.
        </h3>

        <GapContainer />
        <InfluencerContainer>
          <h2>Here are the content creators you can collaborate with.</h2>
          <h3>You can analyze their performance by saying 'Show the stats'</h3>
          <div>
            {influencersArray.map((influencer, index) => (
              <StatsCard key={index} influencer={influencer} />
            ))}
          </div>
        </InfluencerContainer>
      </FirstContainer>
    </MainContainer>
  );
};

export default BrandPanelPage;
