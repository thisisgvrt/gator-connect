import styled from "styled-components";
import "../css/style.css";

export const MainContainer = styled.div`
  width: 100%;
  flex: 1;
  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.1);
  }
  .hashtag{
    font-size: 1.3rem;
    font-weight:bold;
    font-style: italic;
    /* font-family: "Helvetica" */
}
  }
  img {
    width: 15%;
  }
  h2 {
    font-size: 1.2rem;
    font-weight: bold;
  }
  p {
    font-weight: bold;
  
    
  }
  .time {
    font-weight: normal;
    /* font-stretch: 10px; */
    font-size: 14px;
    
  }
  .messages {
    display: flex;
    align-items: center;
    margin: 2px 0;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  input {
    width: 100%;
    height: 40px;
    padding: 0px 10px;
    font-size: 1rem;
    background-color: #f3f3f3;
    border: 0;
    border-radius: 4px;

    transition: all 250ms ease-in-out;
  }

  input:focus {
    outline: none;
  }
  .btn {
    font-weight: bold;
    font-size: 15px;
    padding: 0px 10px;
    border: 0;
    background-color: yellow;
    color: black;
    border-radius: 3px;
  }
`;
