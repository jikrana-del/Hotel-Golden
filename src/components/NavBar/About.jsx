import {NavLink} from 'react-router-dom'
import style from "../../css/About.module.css";
import about_img from '../../../public/about-img.jpg'
function AboutUs() {
  return (
    <section className={style.about_containar}>
      <section >
        <center>
          <h1>About Us</h1>
          <p> “Where comfort, cuisine, and class come together for a golden stay.”</p>
          <div className={`goldImg flex`}></div>
          <p>Welcome to <b>Hotel Golden</b> — where comfort meets class.</p>
        </center>
      </section>

      <section className={`${style.about_section} max-width flex `}>
        <div
          className={style.about_content}
          
        >
       
          <h1 className={style.heading}>About <span>Hotel Golden</span></h1>
          <p className={style.para}>
            Experience the elegance of <b>Hotel Golden</b> — located near
            the Railway Station & Dharti Hospital, Kirtistambh Road, Palanpur.
            Where comfort, cuisine, and class come together for an unforgettable stay.
          </p>

          <p className={style.para}>
            From luxurious AC rooms to affordable economic stays, every corner of
            our hotel is crafted for your comfort. Whether you’re here for leisure
            or business, our team ensures you feel at home with our warm hospitality.
          </p>

          <div className={`${style.features} flex`}>
            <div className={style.card}>
              <h3>🏨 Comfortable Rooms</h3>
              <p>Spacious, air-conditioned, and designed for peaceful rest.</p>
            </div>
            <div className={style.card}>
              <h3>⚡ Modern Amenities</h3>
              <p>Enjoy AC rooms, 24/7 service, Wi-Fi, and luxurious comfort.</p>
            </div>
            <div className={style.card}>
              <h3>📍 Prime Location</h3>
              <p>Just minutes away from Palanpur Railway Station and key landmarks.</p>
            </div>
          </div>
        {/* </div> */}

        </div>

        <div
          className={style.about_img}
          
        >
        
          <img src={about_img} alt="Hotel Golden" />
        </div>
      </section>
      {/* vision section */}
      
      <section>
        <div
        
          className="max-width"
        >
          <h2 className={style.heading}>Our Vision & Mission</h2>
          <p className={style.para}>
            At <span>Hotel Golden</span> , our vision is to be recognized as the most trusted and preferred hotel in Palanpur —
            a place where comfort, elegance, and genuine hospitality come together.
            We dream of creating an environment where every guest feels valued, respected, and truly at home.
            By blending modern luxury with the warmth of traditional Indian hospitality,
            we aim to deliver experiences that go beyond expectations — leaving every guest with golden memories that last a lifetime.
            Our vision is not just to serve — but to create connections, happiness, and unforgettable moments.
          </p>
          <p className={style.para}>
            Our mission is to provide every guest with exceptional comfort, quality service, and a personal touch in every stay.
            We are committed to maintaining high standards of hospitality through dedication, integrity, and care.
            From the moment you arrive until the time you leave, our team ensures that you feel welcomed, safe, and satisfied.
            We focus on sustainable hospitality, continuous improvement, and community engagement,
            so that every stay at <span>Hotel Golden </span> not only feels luxurious but also meaningful and responsible.
            At <span> Hotel Golden </span>, your comfort is our pride, and your happiness is our mission.
          </p>
        </div>
      </section>

      <section className={`${style.cta_section} max-width`}>
        <h2>Plan Your Stay With Us</h2>
        <p>Book your room today and experience comfort, class, and convenience at <b>Hotel Golden</b>.</p>
        <NavLink to="/contact" className={`${style.about_btn}`}>Contact Us</NavLink>
      </section>

    </section>
  );
}

export default AboutUs;
