import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --white: hsl(0, 0%, 100%);
    --light-gray: hsl(212, 45%, 89%);
    --grayish-blue: hsl(220, 15%, 55%);
    --dark-blue: hsl(218, 44%, 22%);
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Outfit", sans-serif;
}

body {
    height: 100vh;
    width: 100%;
    background-color: var(--light-gray);
    display: grid;
    place-items: center;
}

#root {
    display: grid;
    place-items: center;
}

h1 {
    color: var(--slate-900);
    font-size: 24px;
    line-height: 36px;
    user-select: none;
}

h2 {
    color: var(--white);
}

p {
    font-size: 16px;
    color: var(--slate-300);
    text-align: center;
}

.underline {
    text-decoration: underline;
}

.line {
    width: 100%;
    height: 1px;
    background-color: var(--slate-700);
}
`;

export default GlobalStyles;
