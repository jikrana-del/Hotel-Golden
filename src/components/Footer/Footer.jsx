import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import style from "../../css/Footer/Footer.module.css";
import { HiOutlineArrowUp } from "react-icons/hi";
import { IoLogoYoutube } from "react-icons/io";
import { MdBedroomParent } from "react-icons/md";
function Footer() {

  return (
    <footer className={style.footer}>
      <div id="top" className={style.top_icon}>
        <a href="#top"> <HiOutlineArrowUp size={25} /></a>

      </div>
      <div className={`${style.footerContainer} max-width `}>

        {/* About Section */}
        <div className={style.footerSection}>
          <h2>Hotel Golden</h2>
         
            <p>
              Experience the elegance of Hotel Golden — where comfort, cuisine, and class come together for an unforgettable stay.
            </p>

        </div>

        {/* Quick Links */}
        <div className={style.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink className={({ isActive }) => isActive ? 'activeLink' : ''} to="/">🏠 Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'activeLink' : ''} to="/rooms"><MdBedroomParent/> Rooms</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'activeLink' : ''} to="/gallery">📸 Gallery</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'activeLink' : ''} to="/about">ℹ️ About Us</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'activeLink' : ''} to="/contact">📞 Contact</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={style.footerSection}>
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt className={style.icon} /> Golden Plaza, Kirtistambh Road</p>
          <p><FaPhoneAlt className={style.icon} /> +9574352195</p>
          <p><FaEnvelope className={style.icon} />hotelgolden.into@gmail.com</p>
        </div>

        {/* Social Media */}
        <div className={style.footerSection}>
          <h3>Follow Us</h3>
          <div className={style.socialIcons}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"> <IoLogoYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={`${style.footerBottom}`}>
        <div className={`flex max-width ${style.inner_footer}`}>
          <p>© {new Date().getFullYear()} <span>Hotel Golden</span> — All Rights Reserved.</p>
          <p> <a href="https://github.com/jikrana-del?tab=repositories">Developed by - Jikrana</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
