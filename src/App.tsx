import { Route, Routes } from 'react-router-dom'
import Layout from '@containers/Layout'
import Home from '@pages/Home'
import Login from '@pages/Login'
import "./styles/Global.css"

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App
