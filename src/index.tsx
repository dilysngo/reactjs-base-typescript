import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import reportWebVitals from './reportWebVitals'
import Providers from './Providers'
import ResetCSS from './ResetCSS'
import GlobalStyle from './style/Global'

if ('ethereum' in window) (window.ethereum as any).autoRefreshOnNetworkChange = false

window.addEventListener('error', () => {
  localStorage?.removeItem('redux_localstorage_simple_lists')
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Providers>
      <ResetCSS />
      <GlobalStyle />
      <App />
    </Providers>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
