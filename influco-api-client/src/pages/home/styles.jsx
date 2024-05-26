import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
  overflow: hidden;
  position: relative;
  background-color: white;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  font-weight: 100;
  /* Ekran boyutu 768px'den küçük olduğunda arkaplan resmini küçült */
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: none;
    background-color: black;
  }

  /* Diğer stiller buraya eklenebilir */
`;

export const FirstContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #1a243a;

  width: 195vh;
  border-radius: 2%;
  color: white;
  margin: 1rem;

  h1 {
    font-size: 3.9rem;
    text-align: center;
    padding-right: 10rem;
    padding-left: 10rem;
  }
  h3 {
    font-size: 2rem;
    text-align: center;
    width: 40rem;
    font-weight: 500;
  }
`;

export const GapContainer = styled.div`
  width: 100%;
  height: 10rem;
`;
export const SecondContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;

  width: 180vh;
  border-radius: 2%;
  color: white;
  margin: 1rem;
  margin-top: auto;
`;

export const InfoContainerV1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: black;
  padding: 5rem;
  margin-bottom: auto;

  h1 {
    text-align: left;
    font-size: 4rem;
  }
  h3 {
    text-align: left;
    font-weight: 400;
    font-size: 1.4rem;
    text-align: center;
  }
`;

export const InfoContainerV2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 2rem;
  margin: 1rem;
  background-color: white;
  border-radius: 10%;
  img {
    margin-right: 1rem;
  }
  h5 {
    color: black;
  }
  h2 {
    color: black;
  }
`;

export const InfoContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px; /* İstediğiniz boşluğu ayarlayabilirsiniz */
  justify-content: center;
  align-items: center;
  margin-bottom: auto;
`;

export const CommunityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: black;
  }

  h3 {
    color: black;
  }
`;

export const ThirdContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: white;

width: 180vh;
border-radius: 2%;
color: white;
margin: 1rem;

`