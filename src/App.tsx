import Main from './pages/main'
import { Routes, Route } from 'react-router-dom'
import './index.css'

import { Container, Content } from './App.style'

import Header from './components/header'
import Footer from './components/footer'
import Navigation from './components/navigation'

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Navigation />
        <Routes>
          <Route path='/' element={<Main />} />
          {/* add other paths as needed for hackathon etc...
            <Route path='/newDemoPage' element={<NewDemoPage />} /> */}
          { /* https://reactrouter.com/en/main/router-components/browser-router */}
        </Routes>
      </Content>
      <Footer />
    </Container>
  )
}

export default App
