import Main from './pages/main'
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Main />} />
          {/* add other paths as needed for hackathon etc...
          <Route path='/newDemoPage' element={<NewDemoPage />} /> */}
        </Routes>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
