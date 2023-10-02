

import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from "../src/pages/Home/HomePage"
import { CharactersDetails } from './components/CharactersDetails/CharactersDetails'
import { MapsPage } from './pages/Maps/MapsPage'
import { WeaponsPage } from './pages/Weapons/WeaponsPage'
import { MapsDetails } from './components/MapsDetails/MapsDetails'
import { WeaponDetails } from './components/WeaponDetails/WeaponDetails'
import { WeaponSkinsDetails } from './components/WeaponSkinsDetails/WeaponSkinsDetails'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/character/:uuid' element={<CharactersDetails/>}/>
      <Route path='/maps' element={<MapsPage/>}/>
      <Route path='/maps/:uuid' element={<MapsDetails/>}/>
      <Route path='/weapons' element={<WeaponsPage/>}/>
      <Route path='/weapons/:uuid' element={<WeaponDetails/>}/>
      <Route path='/weapons/skin/:uuid' element={<WeaponSkinsDetails/>}/>
    </Routes>
  )
}

export default App
