import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import MissionPage from './Pages/Mission'
import ProgressPage from './Pages/ProgressPage'
import OurTeamPage from './Pages/OurTeam'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} ></Route>
          <Route path='/mission' element={<MissionPage />} ></Route>
          <Route path='/team' element={<OurTeamPage />} ></Route>
          <Route path='/progress' element={<ProgressPage />} ></Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
