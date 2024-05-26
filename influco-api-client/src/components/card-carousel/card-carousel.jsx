import React, { useState } from "react";
import {
  ThirdContainer,
  InfluencerCard,
  InfluencerCardContainer,
  StyledProfileButton,
} from "./styles"; // Stil dosyasını dahil ettiğiniz varsayıyorum
import { useDispatch, useSelector } from "react-redux";
import { getAllInfluencer } from "../../redux/influencer";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CardCarousel = () => {
  const influencer = useSelector((state) => state.influencer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllInfluencer());
  }, [dispatch]);

  console.log(influencer.influencers);

  return (
    <ThirdContainer style={{ backgroundColor: "#1c1c1c" }}>
      <h1>
        Meet the <span style={{color:'gold'}}>Content Creators</span>
      </h1>
      <InfluencerCardContainer>
        {influencer.influencers.map((influencer, index) => (
          <Link
            to={`/influencer/${influencer._id}`}
            key={index}
            style={{ textDecoration: "none" }}
          >
            <InfluencerCard>
              <img
                src={`http://localhost:3000/${influencer.imageUrl}`}
                alt="Logo"
                style={{
                  borderRadius: "50%",
                  width: "50%",
                  marginRight: "1rem",
                  border: "12px solid",
                }}
              />
              <h2>
                {influencer.name} {influencer.surname}
              </h2>
              <StyledProfileButton>Profili Gör</StyledProfileButton>
            </InfluencerCard>
          </Link>
        ))}
      </InfluencerCardContainer>
    </ThirdContainer>
  );
};

export default CardCarousel;
