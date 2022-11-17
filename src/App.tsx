import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeAdmin from './pages/Admin/HomeAdmin'
import Home from './pages/Buyer/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import ProtectedRoutesAdmin from './routes/ProtectedRoutesAdmin'
import ProtectedRoutesBuyers from './routes/ProtectedRoutesBuyers'
import UnprotectedRoutes from './routes/UnprotectedRoutes'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<UnprotectedRoutes />}>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Route>
        <Route element={<ProtectedRoutesBuyers />}>
          <Route path='/home' element={<Home />} />
        </Route>
        <Route element={<ProtectedRoutesAdmin />}>
          <Route path='/home-admin' element={<HomeAdmin />}/>
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
