
import { NavLink } from 'react-router-dom'
import style from '../../css/Nav.module.css'
import { FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
function Nav() {
  const icons = [<IoLogoFacebook />, <FaTwitter />, <FaInstagram />, <FaYoutube />];
  return (
    <section className={`${style.nev_containar}`}>
      <section className={`${style.nav}`}>
        <nav className={`flex  max-width ${style.nav_section}`}>
          <div className={`flex gep`}>
            <p className={`flex`}><span>  <FaPhone /></span>  + 9574352195</p>
            <NavLink className={`flex small_gep `}><span>  <FaEnvelope /> </span>  hotelgolden.into@gmail.com</NavLink>
          </div>
          <div className={`flex gep`}>
            <div className={`flex gep`}>
              <NavLink to='/about' className={({ isActive }) => isActive ? 'activeLink' : ''}>About Us</NavLink>
              <NavLink to='/contact' className={({ isActive }) => isActive ? 'activeLink' : ''}>Contact Us </NavLink>
            </div>
            <div className={`flex small_gep`}>
              {icons.map((icon, index) => {
                return (
                  <div key={index}>
                    <span>{icon}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </nav>
      </section>
    </section>
  )
}

export default Nav