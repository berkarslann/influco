import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
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

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color:white;
  text-align:left;
`;

export const RightSideSection = styled.div`
  margin-right: auto;
  width: 50%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const LeftSideSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
  margin-left: auto;
  width: 50%;
  height: 100vh;
  background-color: #342b13;
  overflow: hidden;
`;

export const StyledDivV1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  
`;

export const StyledDivV2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`;

export const LoginForm = styled.form`

`

export const StyledInputButton = styled.button`
  border-radius: 10%;
  background-color: transparent;
  border: 3px solid black;
  color: white;
  border: none;
  outline: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Box-shadow için geçiş eklendi */
  box-shadow: ${(props) => (props.isActive ? '0px 8px 16px rgba(255, 229, 76, 0.4)' : '0px 4px 8px rgba(0, 0, 0, 0.2)')}; /* Standart bir gölge efekti eklendi */

  &:hover {
    cursor: pointer;
    cursor: pointer;
    transform: scale(1.1); /* Buton büyüklüğünü artırır */
    box-shadow: 0px 8px 16px rgba(255, 229, 76, 0.4); /* Altın rengi gölge efekti */
  }
`;

export const StyledInput = styled.input`

padding: 6px 12px;
background: rgb(31, 32, 35);
border: 1px solid rgb(60, 63, 68);
border-radius: 4px;
font-size: 13px;
color: rgb(247, 248, 248);
height: 40px;
width:10vw;
margin:1rem;
appearance: none;
transition: border 0.15s ease 0s;
&:active{
    outline: none;
    box-shadow: none;
    border-color: rgb(100, 153, 255);
}

`