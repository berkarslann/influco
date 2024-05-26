import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-style: normal;
  overflow: hidden;
  position: relative;
  background-color: #242525;
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
  color:#d3cfc6;
  /* Diğer stiller buraya eklenebilir */
`;



export const Navigation = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
width: 100vw;
color: white;
margin-bottom:auto;
`;

export const FirstSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const SerieInfoContainer = styled.div`
  button {
    background-color: #44bdce;
    border-radius: 10%;
    height: 3rem;
    color: white;
    border: none;
    outline: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Box-shadow için geçiş eklendi */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Standart bir gölge efekti eklendi */
  }

  button:hover {
    cursor: pointer;
    transform: scale(1.1); /* Buton büyüklüğünü artırır */
    box-shadow: 0px 8px 16px rgba(255, 229, 76, 0.4); /* Altın rengi gölge efekti */
  }
  width:50vw;
`
  
;


export const SerieInfoImg = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:50vw;
`

export const SerieInfoCard = styled.div``

export const SecondSection = styled.div`
background-color: #272827;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:100vw
`

export const SerieVideoWrapper = styled.div`

`

export const SerieVideoContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
background-color: #242525;
border-radius:5%;
padding:1rem;
`

export const SerieVideoContainerWrapper = styled.div`
width:50vw;
`




