import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        font-family: "Noto Sans KR", sans-serif;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
        background-color: #f2f2f2;
    }
`

export default GlobalStyle;