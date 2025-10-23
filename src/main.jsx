import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Provider } from "react-redux";
import App from './App.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Headers/home.jsx'
import Gallery from './components/Headers/Gallery.jsx'
import Contact from './components/NavBar/Contact.jsx'
import About from './components/NavBar/About.jsx'
import Facilities from './components/Headers/Facilities.jsx'
import './App.css'
import Review from './components/Headers/Review.jsx'
import { store } from './store/store.js';
import RoomDetails from './components/Headers/Rooms/RoomDetails.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />}></Route>
            <Route path='/rooms/:id' element={<RoomDetails />}></Route>
            <Route path='/gallery' element={<Gallery />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/facilities' element={<Facilities />}></Route>
            <Route path='/review' element={<Review />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </Provider>


  </StrictMode>,
)
