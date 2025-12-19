
import { Outlet } from 'react-router-dom'
import Header from './components/Headers/Header'
import Footer from './components/Footer/Footer'
import { ToastContainer} from 'react-toastify';
import { Toaster } from 'react-hot-toast';


import Nav from './components/NavBar/Nav'
function App() {

  return (
    <>

      <Nav />
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer/>
      <Toaster position="top-right" />

    </>
  )
}

export default App
