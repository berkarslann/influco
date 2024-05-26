import React, { useState } from "react";
import { MainContainer, SerieCard } from "./styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SerieShow = () => {
  const auth = useSelector((state) => state.auth);
  const series = auth.currentUser && auth.currentUser.userType === 'influencer' ? auth.currentUser.series : auth.currentUser.subseries || [];
  console.log('series',series)
  return (
    <MainContainer>
      {series.map((serie, index) => (
        <SerieCard key={index}>
          <Link to={`/serie/${serie._id}`} style={{textDecorationLine:'none', color:'#c4beb4'}}>
            <img
              src={`http://localhost:3000/${serie.imageUrl}`}
              alt="Logo"
              style={{
                width: "30vw",
                height: "20vh",
              }}
            />
            <h4 style={{ textAlign: "left" }}>{serie.name}</h4>
          </Link>
        </SerieCard>
      ))}
    </MainContainer>
  );
};

export default SerieShow;
