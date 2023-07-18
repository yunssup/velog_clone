import React from 'react'
import ReactDOM from 'react-dom/client'
import styled from 'styled-components'
import Header from '../components/header.jsx'
import App from './App.jsx'
import './index.css'

const Entire = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  border-color: ${({ theme }) => theme.borderColor};
`;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Entire>
      {/* <Header /> */}
      <App />
    </Entire>
  </React.StrictMode>,
)
