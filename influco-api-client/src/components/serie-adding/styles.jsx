import styled, { keyframes } from "styled-components";



export const StyledInput = styled.input`
  background-color: transparent;
  height:2vh;
  width:20vw;
  border:1px solid white;

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
  margin: 1rem;
`;

export const StyledTextArea = styled.textarea`
background-color: transparent;
width:20vw;
`;


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
export const StyledButtonV2 = styled.button`

  background-color: red;
  border-radius: 10%;
  height: 1.8rem;
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