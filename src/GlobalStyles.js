import { createGlobalStyle } from "styled-components";
import background from "./assets/images/vancouver-background.jpg";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Sans-Serif;
    color: var(--font);
}
body{
    background-image: url(${background});
    background-position: top center;
    background-attachment:scroll;
    background-size: cover;
    height: 80vh;
    width: 100%;
}
:root{
    --grey : #BCB4B4;
    --font: white;
    --clear: hsl(0 0% 100% / 0.18)
}
`;

export default GlobalStyles;
