import style from '../../css/Header/Header.module.css'
import hotelLogo from '../../../public/hero-images/hotel-logo.png'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { useLocation } from 'react-router-dom';
function Header() {
  const [isNavBar, setIsNavBar] = useState(false)
  const RoomsColities = [
    { id: "royal-ac", name: "Royal AC Suite Room" },
    { id: "standard-ac", name: "Standard AC Deluxe Room" },
    { id: "royal-non-ac", name: "Royal Non-AC Rooms" },
    { id: "standard-non-ac", name: "Standard Non-AC Rooms" },
    { id: "economic", name: "Economic Room" },
    { id: "dormitory", name: "Dormitory Hall" }
  ];

  const location = useLocation();
  return (
    <div className={style.header_containar} id='top'>
      <div className={`${style.navlink} flex`}>
        <nav className={`flex max-width  ${style.nav_containar}`}>

          <div className={`flex ${style.header_Logo}`}>
            <img className={style.logo} src={hotelLogo} alt="Logo" />
            <NavLink to="/" className={style.brandName}>
              <span className={style.brandStrong}>Hotel Golden</span>
            </NavLink>
          </div>


          <div className={`
          ${style.link} flex  ${isNavBar ? style.show : style.display}`}>

            <li className={`${style.parent_link} `}>
              <HashLink
               to='/#room'
                className={`${location.hash === '#room' ? 'activeLink' : '' }`}
             
              >ROOMS  <span>  <IoIosArrowUp className={`${style.arrUp}`} /> </span></HashLink>
              <ul>
                {RoomsColities.map((room, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        to={`/rooms/${room.id}`}
                        className={({ isActive }) => isActive ? 'activeLink' : ''}> {room.name}</NavLink>
                    </li>
                  )
                })}
              </ul>
            </li>
            <li>
              <NavLink to='/gallery' className={({ isActive }) => isActive ? 'activeLink' : ''}>Gallery</NavLink> </li>
            <li>
              <NavLink to='/facilities' className={({ isActive }) => isActive ? 'activeLink' : ''}>Facilities</NavLink></li>
            <li>
              <NavLink to='/review' className={({ isActive }) => isActive ? 'activeLink' : ''}>Review</NavLink></li>
          </div>

          <div><button className={`${style.header_btn} btn`}> <NavLink to='https://hotels.eglobe-solutions.com/hotelgolden/booking/hotels/hotel-golden-palanpur-palanpur?roomId=49722&checkIn=2025-09-23&nights=1&adults=2&child=0&ghaRef=UIK8Ppc5epin4djduXJX'> BOOK Now!</NavLink></button></div>
          <div
            className={`${style.navbar}`}
            onClick={() => setIsNavBar(!isNavBar)}
          >
            {isNavBar ? <IoCloseSharp /> : <FaBars />}
          </div>


        </nav>
      </div>
    </div>
  )
}

export default Header;