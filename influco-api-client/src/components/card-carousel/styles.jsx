import styled, { keyframes } from "styled-components";

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
`;

export const InfluencerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  width: 25rem;
  height: 32rem;
  border-radius: 10%;
  margin: 1rem;
  color: white;
  transition: background-color 0.3s ease; /* Geçiş efekti ekleme */

  &:hover {
    background-color: #5f5f5f;
    cursor: pointer;
    border: 1px solid gold;
  }
`;

export const InfluencerCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const StyledProfileButton = styled.button`
  background-color: transparent;
  border-radius: 10%;
  height: 3rem;
  color: white;
  border: 2px solid white; /* border-width, border-style ve border-color birleştirildi */
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
`;
