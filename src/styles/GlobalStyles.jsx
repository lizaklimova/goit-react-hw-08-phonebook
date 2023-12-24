import { createGlobalStyle } from "styled-components";
import bgImg from "images/body-bg.jpg";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-size: 16px;
  margin: 0;
  font-family: 'Josefin Sans', sans-serif;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  background: url(${bgImg}) no-repeat center/cover fixed;
 overflow-x: hidden;

}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  background-color: transparent;
  font-family: inherit;
  border: none;
  color: currentColor;
  cursor: pointer;

}


input {
  font-family: inherit;
    
}



img {
  display: block;
  max-width: 100%;
  height: auto;
}

svg {
  fill: currentColor;
}


  ::-webkit-scrollbar {
    width: 10px; 
  }


  ::-webkit-scrollbar-thumb {
    background-color:${({ theme }) => theme.colors.white};
    opacity:1;
    border-radius: 6px; 
  }


  ::-webkit-scrollbar-track {
    background: #5f5d5d;
     border-radius: 6px; 
    
  }
`;
