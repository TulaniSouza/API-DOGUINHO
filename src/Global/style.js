import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color:linen;
    text-align:center;
  }
  Img{
  width: 40%;
  height: 45%;
  margin-left:30%;
  }
  button{
    cursor: pointer;
    margin-top:35px;
    height:10%;
    width:30%;
    align-items:center;
  }
  h1{
    color:rosybrown;
    margin-top:10px;

  }
`;
