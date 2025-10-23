import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import style from '../../../css/Rooms.module.css'
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaRegClock, FaPhone, FaWifi, FaTv, FaFan, FaSnowflake, FaBath, FaBed } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";
import { IoLogoNoSmoking } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import "animate.css";
function RoomDetails() {
  const { id } = useParams();
  const Room = useSelector(store => store.RoomCategoryData);
  const selectedCategoty = Room.room.find(item => item.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev === selectedCategoty.images.length - 1 ? 0 : prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [selectedCategoty.images.length]);


  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % selectedCategoty.images.length);
  };
  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + selectedCategoty.images.length) % selectedCategoty.images.length);
  };

  const amenities = [
    { icon: <FaWifi />, text: "Free High-Speed WiFi" },
    { icon: <FaTv />, text: "Smart LED TV" },
    { icon: <IoLogoNoSmoking />, text: "Non-Smoking Rooms" },
    { icon: <FaSnowflake />, text: "Air Conditioning" },
    { icon: <FaBath />, text: "Attached Bathroom" },
    { icon: <FaFan />, text: "Ceiling Fan" },
    { icon: <FaBed />, text: "King Size Bed" },
    { icon: <FaUserDoctor />, text: "Doctor on Call" },
    { icon: <MdOutlineCleaningServices />, text: "Daily Housekeeping" },
  ];

  return (
    <>
      <section>
        <section className={`${style.imgSlider_section}`}>
          <div>
            <button className={`navButton left`} onClick={handlePrev}>
              <FaChevronLeft />
            </button>
            <img src={selectedCategoty.images[currentIndex][0]}
              key={currentIndex}
              onError={(e) => (e.target.src = selectedCategoty.images[currentIndex][1])}
              alt="" />

            <button className={`navButton  right`} onClick={handleNext}>
              <FaChevronRight />
            </button>
          </div>
        </section>

        <section>
          <section className={`${style.roomInfo_section} max-width flex`}>
            <div className={style.room_text}>
              <h2>{selectedCategoty.name}</h2>
              <p className={style.description}>{selectedCategoty.description}</p>
              <p className={style.price}><strong>Price:</strong> ₹999 / Night</p>
              <div className={style.time_info}>
                <p><FaRegClock /> Check-in: <strong>12:00 PM</strong> | Check-out: <strong>11:00 AM</strong></p>
                <p><FaPhone /> +91 95743 52195</p>
              </div>
              <button className={style.book_btn}>
                <a href="https://hotels.eglobe-solutions.com/hotelgolden/booking/hotels/hotel-golden-palanpur-palanpur?roomId=49722&checkIn=2025-09-23&nights=1&adults=2&child=0&ghaRef=UIK8Ppc5epin4djduXJX">Book Now</a>
              </button>
            </div>

            <div className={style.room_sideimg}>
              <img src={selectedCategoty.images[1][0]} alt="Room view" onError={(e) => (e.target.src = selectedCategoty.images[1][1])} />
            </div>
          </section>
        </section>

        <section className={` ${style.amenities_section}`}>
          <div className={`${style.amenities_section} max-width`}>
            <center>
              <h1>Cosy Room Amenities</h1>
              <div className={`goldImg flex`}></div>
              <p> <i>Experience comfort and convenience with our carefully curated in-room facilities, designed to make your stay relaxing and memorable.</i></p>
            </center>

          </div>
          <div className={`${style.amenities_container} max-width `}>
            {amenities.map((item, index) => {
              return (
                <div key={index} className={`${style.amenity} `}>
                  <span className={`${style.icon}`}>{item.icon}</span>
                  <span className={`${style.text}`}>{item.text}</span>
                </div>
              )
            })}
          </div>
        </section>

      </section>
    </>
  )
}

export default RoomDetails











