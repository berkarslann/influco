import styled, { keyframes } from "styled-components";
// Ana bileşen container'ı için animasyon
export const slideInAnimation = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// CreatePost container'ı için stil
export const PostGeneralContainer = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  width: 50%;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  animation: ${slideInAnimation} 0.3s ease forwards;
  margin: 1rem;
  border-radius: 2%;
`;

export const Description = styled.div`
width:100%;
font-size:1.6rem;

`
export const StyledExpandButton = styled.button`
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
margin-left:auto;
&:hover {
  cursor: pointer;
  transform: scale(1.1); /* Buton büyüklüğünü artırır */
  box-shadow: 0px 8px 16px rgba(255, 229, 76, 0.4); /* Altın rengi gölge efekti */
}
width: 5vw;
`;
export const PostForm = styled.form`
display: flex;
flex-direction: column;
`;

export const PostContainer = styled.div`
display: flex;
flex-direction: column;
`;
export const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: vertical; /* Text alanının yalnızca dikey boyutunu değiştirmesini sağlar */
  height: 2rem;
  font-family: "Raleway", sans-serif;
`;

export const SubmitButton = styled.button`
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
  margin-left:auto;
  &:hover {
    cursor: pointer;
    transform: scale(1.1); /* Buton büyüklüğünü artırır */
    box-shadow: 0px 8px 16px rgba(255, 229, 76, 0.4); /* Altın rengi gölge efekti */
  }
  width: 5vw;
`;

export const CommentContainer = styled.div`
text-align:right;
font-size:1.2rem;
background-color:white;
margin:4px;
h2,h6,h3{
  margin:0px;
}
`