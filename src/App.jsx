
import { Outlet } from 'react-router-dom'
import Header from './components/Headers/Header'
import Footer from './components/Footer/Footer'

import Nav from './components/NavBar/Nav'
function App() {

  return (
    <>
      <Nav />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
