import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --highlight: #d2ceda;
    --background: #110d2b;
    --white: #eeeeee;

    --container: 1400px;

    --small: 16px;
    --medium: 48px;
    --large: 80px;

  }
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    html, body, #__next {
        height: 100%;
        background: var(--background);
        color: var(--white);
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    p,
    a {
        font-size: 32px;
        line-height: var(--medium);
    }
    a {
        color: var(--highlight);
    }

`

export default GlobalStyles
