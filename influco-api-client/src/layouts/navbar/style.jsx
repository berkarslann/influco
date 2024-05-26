import styled, { keyframes } from "styled-components";


export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`
export const NavContainer = styled.div`
display: flex;
justify-content:  space-between;
align-items: center;
`
export const StyledButton = styled.button`
margin:1rem;
background-color:transparent;
border:none;
font-size:1.4rem;
color:white;

&:hover {
    cursor: pointer;
  }
`

export const StyledLoginButton = styled.button`
background-color: transparent;
border-radius: 10%;
height: 3rem;
color: white;
border: 2px solid white; /* border-width, border-style ve border-color birleştirildi */
outline: none;
transition: transform 0.3s ease, box-shadow 0.3s ease; /* Box-shadow için geçiş eklendi */
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Standart bir gölge efekti eklendi */
font-family: "Raleway", sans-serif;
font-weight:700;
margin:1rem;
&:hover {
  cursor: pointer;
  transform: scale(1.1); /* Buton büyüklüğünü artırır */
  box-shadow: 0px 8px 16px rgba(255, 229, 76, 0.4); /* Altın rengi gölge efekti */
}
width: 5vw;

`
export const StyledSignupButton = styled.button`
background-color: gold;
border-radius: 10%;
height: 3rem;
color: black;
border: 2px solid gold; /* border-width, border-style ve border-color birleştirildi */
outline: none;
transition: transform 0.3s ease, box-shadow 0.3s ease; /* Box-shadow için geçiş eklendi */
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Standart bir gölge efekti eklendi */
font-family: "Raleway", sans-serif;
font-weight:700;
margin:1rem;
&:hover {
  cursor: pointer;
  transform: scale(1.1); /* Buton büyüklüğünü artırır */
  box-shadow: 0px 8px 16px rgba(255, 229, 76, 0.4); /* Altın rengi gölge efekti */
}
width: 5vw;

`