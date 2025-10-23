import style from '../../css/Facilities.module.css'
const Facilities_images = Array.from({ length: 14 }, (_, i) => `Facilities-images/facilities-${i + 1}.avif`)
function Facilities() {
  const Facilities_Title = [
    'Free internet', 'Non-smoking Rooms', 'Hot & Cold Water', 'Daily HouseKeeping', 'Smart TV', 'RO water', 'Nearby ATM Available', 'Best Location', 'Fire Extingusher', 'CCTV Surveillance', 'Laundry Service', '24hrs Room Service', 'Doctor On Call', 'Daily Newspaper'
  ]

  return (
    <>
      <section>
        <section className={style.facilities_title}>
          <div className={`max-width`}>
            <center>
              <h1>Our Facilities</h1>
              <div className={`goldImg flex`}></div>
              <p>Experience Luxury, comfort, and care — all under one Golden roof. </p>
            </center>
          </div>
        </section>
        <section className={`max-width flex ${style.facilities_section}`}>
          {Facilities_images.map((img, index) => {
            return (
              <div key={index} className={`${style.facilities_card}`}>
                <div>
                  <img src={img} alt={Facilities_Title[index]} />
                </div>
                <h3>{Facilities_Title[index]}</h3>
              </div>
            )
          })}
        </section>
        <section className={style.bookNow_section}>
          <div className={`max-width ${style.bookNow_container}`}>
            <div className={style.bookNow_text}>
              <h2>Experience Comfort & Luxury at Hotel Golden</h2>
              <p>
                Enjoy a stay filled with modern amenities, elegant interiors, and warm hospitality.
                Whether you're visiting for business or leisure, our rooms and services ensure a relaxing experience.
              </p>
              <a href="https://hotels.eglobe-solutions.com/hotelgolden/booking/hotels/hotel-golden-palanpur-palanpur?roomId=49722&checkIn=2025-09-23&nights=1&adults=2&child=0&ghaRef=UIK8Ppc5epin4djduXJX" className={style.bookNow_btn}>Book Now</a>
            </div>
          </div>
        </section>

      </section>
    </>
  )
}

export default Facilities








