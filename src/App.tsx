import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  background-color: #ffc374;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
`

const Main = styled.main`
  height: 100%;
`

function App() {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Container>
  )
}

export default App
