import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {
  Route,
  Routes,
} from 'react-router-dom'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import './style.scss'
import { Layout, RequireAuth, Wrapper } from './components'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Wrapper />}>
        {/* public routes  */}
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>

        {/* Protext Routes  */}
        <Route element={<RequireAuth />}>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='profile/:id' element={<Profile />}></Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
