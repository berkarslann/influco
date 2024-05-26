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
  flex-direction: row;
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

export const SideSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20vw;
  height: 100vh;
  margin-right: auto;
  padding: 0.4rem;
  color:#c4beb4;
  border-right: 1px solid;
  background-color: #272827;
  position: fixed;
  top: 0; /* Adjust top position if necessary */
  left: 0; /* Position on the right side of the screen */

  h4{
    &:hover {
      cursor: pointer;
      transform: scale(1.1); /* Buton büyüklüğünü artırır */
     color: gold; /* Altın rengi gölge efekti */
    }
  }
  
`;
export const SideButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:20vw;
  background-color: transparent;
  border: none;
  &:hover {
    background-color: #2b2d2d;
    cursor: pointer;
  }
  color:#c4beb4;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: auto;
`;

export const LeftSideSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-left:auto;
width:80%;
height:100vh;
overflow:auto;
`

export const StyledButtonV1 = styled.button`

  background-color: #44bdce;
  border-radius: 10%;
  height: 3rem;
  color: white;
  border: none;
  outline: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Box-shadow için geçiş eklendi */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Standart bir gölge efekti eklendi */


&:hover {
  cursor: pointer;
  transform: scale(1.1); /* Buton büyüklüğünü artırır */
  box-shadow: 0px 8px 16px rgba(255, 229, 76, 0.4); /* Altın rengi gölge efekti */
}
`