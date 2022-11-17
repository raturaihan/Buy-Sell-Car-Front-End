import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeAdmin from './pages/Admin/HomeAdmin'
import Home from './pages/Buyer/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/home-admin' element={<HomeAdmin />}/>
      </Routes>
    </div>
  )
}

export default App
