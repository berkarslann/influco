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
} from "./styles";
import showroom from "../../assets/showroom2.png";
import influencer1 from "../../assets/influencer1.jpeg";
import influencer2 from "../../assets/influencer2.jpeg";
import influencer3 from "../../assets/influencer3.webp";
import influencer4 from "../../assets/influencer4.webp";
import showstats from "../../assets/showstats.png";

import Navbar from "../../layouts/navbar/navbar";
import { StyledSignupButton } from "../../layouts/navbar/style";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardCarousel from "../../components/card-carousel/card-carousel";
const HomePage = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <MainContainer>
      <FirstContainer>
        <Navbar />
        <h1 style={{ color: "white" }}>
          The Enchanted World of Events, Content Creators, and Series. A
          Platform Filled with Experience, Creativity, and Connections!
        </h1>
        <h3 style={{ color: "white" }}>
          Join creative collaborations with Influco, make connections, and
          participate in events
        </h3>
        {auth.currentUser ? (
          <Link to="/explore">
            <StyledSignupButton to="/signup">Explore</StyledSignupButton>
          </Link>
        ) : (
          <Link to="/signup">
            <StyledSignupButton to="/signup">Signup</StyledSignupButton>
          </Link>
        )}

        <img src={showroom} style={{ width: "50%" }} />

        <GapContainer />

        <SecondContainer>
          <InfoContainerV1>
            <h1>All in One: Easily Discover, Engage! </h1>
            <h3>
              Influco provides strong support at every stage, from planning
              events to creating series and establishing brand collaborations.
              Maximize your creativity, enhance your brand value, and stand out
              with the opportunities offered by Influco
            </h3>
          </InfoContainerV1>
          <InfoContainerWrapper>
            <InfoContainerV2>
              <img src={influencer1} style={{ width: "40%" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h2>Impressive Series</h2>
                <h5>
                  Influco's unique series feature offers content creators and
                  brands a brand new experience. Telling your own unique
                  stories, growing your audience, and collaborating with brands
                  is now more impressive and easier than ever! The series
                  creation process is designed with a simple and user-friendly
                  interface. You can customize, schedule, and engage with your
                  audience. Create your own digital world with just a few
                  clicks.
                </h5>
              </div>
            </InfoContainerV2>
            <InfoContainerV2>
              <img src={influencer2} style={{ width: "40%" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h2>Fun Events</h2>
                <h5>
                  Influco offers a plethora of enjoyable events, providing
                  content creators and brands with an exciting avenue to engage
                  their audiences. Whether it's interactive workshops, lively
                  seminars, or entertaining competitions, our platform fosters a
                  vibrant atmosphere where creativity thrives. Join us in
                  crafting unforgettable experiences, expanding your reach, and
                  forging meaningful connections. With our user-friendly
                  interface, organizing and participating in these fun-filled
                  events has never been easier. Come, be a part of the
                  excitement!
                </h5>
              </div>
            </InfoContainerV2>
            <InfoContainerV2>
              <img src={influencer4} style={{ width: "40%" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h2>Spot-On Collaborations!</h2>
                <h5>
                  Influco facilitates perfect collaborations, offering content
                  creators and brands seamless opportunities to join forces.
                  From aligning with like-minded creators to partnering with
                  industry-leading brands, our platform empowers you to discover
                  and cultivate ideal partnerships. Together, we can unlock new
                  levels of creativity, reach broader audiences, and achieve
                  mutual success. With our intuitive interface, navigating and
                  nurturing these fruitful collaborations is effortless. Dive
                  into the world of impactful partnerships with Influco!
                </h5>
              </div>
            </InfoContainerV2>
            <InfoContainerV2>
              <img src={influencer3} style={{ width: "40%" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h2>Next-Generation Social Media</h2>
                <h5>
                  Next-Generation Social Media represents a paradigm shift in
                  how we connect, share, and engage online. It transcends
                  traditional platforms by fostering genuine interactions,
                  empowering diverse voices, and prioritizing user privacy and
                  well-being. With innovative features, intuitive interfaces,
                  and a commitment to inclusivity, Next-Generation Social Media
                  platforms redefine the digital landscape. Join us in shaping
                  the future of online communities, where authenticity and
                  meaningful connections thrive.
                </h5>
              </div>
            </InfoContainerV2>
          </InfoContainerWrapper>
        </SecondContainer>
        <GapContainer />

        <SecondContainer style={{ backgroundColor: "#1a243a" }}>
          <h1 style={{ fontSize: "3rem" }}>
            Manage your collaborations with Influco's artificial intelligence.
          </h1>
          <img src={showstats} style={{ width: "60%" }} />

          <InfoContainerWrapper></InfoContainerWrapper>
        </SecondContainer>
        <GapContainer />

        <CardCarousel />
      </FirstContainer>
    </MainContainer>
  );
};

export default HomePage;
