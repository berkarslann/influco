// styles.js
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 600px;
  height: 150px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 16px;
  transition: all 0.3s ease;

  &.big {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 1200px;
    height: 400px;
  }

  button {
    background-color: gold;
    border-radius: 10%;
    height: 3rem;
    color: black;
    border: 2px solid gold; /* border-width, border-style ve border-color birleştirildi */
    outline: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Box-shadow için geçiş eklendi */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Standart bir gölge efekti eklendi */
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    margin: 1rem;
    &:hover {
      cursor: pointer;
      transform: scale(1.1); /* Buton büyüklüğünü artırır */
      box-shadow: 0px 8px 16px rgba(255, 229, 76, 0.4); /* Altın rengi gölge efekti */
    }
    width: 5vw;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: black;
  }
  margin: 1rem;
`;

export const Organizer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardGeneralOrganizer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`;
export const CardTextOrganizer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  margin-right:10px;
  h2,
  h5 {
    color: black;
    margin: 0px;
  }
`;

export const CardContainer = styled.div`
  background-color: white;
  height: 8rem;
  width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Yeni: Gölge ekledik */
  margin: 1rem;
  border: 3px solid gold; /* Yeni: Kenarlık rengi gold */
  &:hover {
    background-color:gold;
    transition: all 0.4s ease;
    
    cursor: pointer;
    transform: scale(1.1); /* Buton büyüklüğünü artırır */
    box-shadow: 0px 8px 16px rgba(255, 229, 76, 0.4); /* Altın rengi gölge efekti */
  }
`;

export const CardGeneralContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const EventImage = styled.img`
  width: 4rem;
  background-color: black;
`;