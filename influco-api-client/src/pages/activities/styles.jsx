import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-style: normal;
  overflow: hidden;
  position: relative;
  background-color: #fafafa;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  background-color: #fafafa;

  width: 197vh;
  border-radius: 2%;
  color: white;
  margin: 1rem;

  h1 {
    font-size: 3.9rem;
    text-align: center;
    padding-right: 10rem;
    padding-left: 10rem;
   
  }
  h3{
    font-size: 2rem;
    text-align: center;
    width:40rem;
    font-weight:400;
  }
`;