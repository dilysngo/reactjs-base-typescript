import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle` 
  * {
    font-family: Digitalt;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
  } 
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Scrollbar */
  ::-webkit-scrollbar { 
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary}; 
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #FFF1C1; 
    border-radius: 10px;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    color:#fff; 
    line-height: 1;
    font-size: 16px;
    
    @media (max-width: 576px) {
      width: 100% !important; 
    } 

    & > iframe {
      display: none; 
    }

    img {
      height: auto;
      max-width: 100%;

      image-rendering: -moz-crisp-edges;
      image-rendering: -o-crisp-edges;
      image-rendering: -webkit-optimize-contrast;
      image-rendering: crisp-edges;
      -ms-interpolation-mode: nearest-neighbor;
    }
  }

  .Toastify__toast-body {
    font-family: 'Helvetica';
  }
 
  .ant-modal-content {
    background-color: unset;
    background-image: url(/images/backgrounds/modal.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;

    .ant-modal-close {
      top: 14px;
      right: 20px;
      ${({ theme }) => theme.mediaQueries.sm} {
        top: 20px;
        right: 20px;
      }
      img {
        width: 26px;
        ${({ theme }) => theme.mediaQueries.sm} {
          width: 36px;
        }
      }
    }
    .ant-modal-header {
      background-color: unset;
      border-bottom: unset;
      padding-top: 32px;
      padding-left: 34px;
 
      .ant-modal-title {
        color: #FFFF1D; 
        font-weight: 500;
        font-size: 20px;
        line-height: 22px;
        letter-spacing: 0.04em;
        text-shadow: 1px 7px 4px rgba(111, 27, 47, 0.35), 0px -1px 0px #B64034;
        ${({ theme }) => theme.mediaQueries.sm} {
          font-size: 32px;
          line-height: 100%;
        }
      }
    }
    .ant-modal-body {
      padding: 0 32px 0;
    }
  } 
  
`

export default GlobalStyle
