import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import style from "../../css/contact.module.css";
import contact_img from '../../../public/contact-img.jpg'
import hotel_logo from '../../../public/hotel-logo.png';
function ContactUs() {
  const Hotel_Logo = [hotel_logo, hotel_logo, hotel_logo];
  const form = useRef();

  const Contact_Info = [
    {
      img: <FaMapMarkerAlt />,
      title: 'Address',
      description: 'Golden Plaza, Near Railway Station & Dharti Hospital, Kirtistambh Road, Palanpur'
    },
    {
      img: <FaPhoneAlt />,
      title: 'Phone',
      description: '+9574352195'
    },
    {
      img: <FaEnvelope />,
      title: 'Email',
      description: 'hotelgolden.into@gmail.com'
    },
    {
      img: <FaClock />,
      title: 'Timings',
      description: 'Check-in:12:00 PM | Check-out: 11:00 AM'
    }
  ]


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_3020hbw',
      'template_3ryi6x6',
      form.current,
      'r3bnTUvCz0eO5Yqbn'
    ).then(
      (result) => {
        console.log('Message sent successfully ✅');
        alert("Message sent successfully ✅");
        form.current.reset();
      }, (err) => {
        console.log('ERROR : ', err.text);
        alert("something went wrong ❌");
      }
    )
  }
  return (
    <section className={style.contact_container}>
      <div
        className={`${style.contact_content} max-width`}
      >
        <center>
          <div className={`flex ${style.logo_section}`}>
            {Hotel_Logo.map((Hotel_Logo, index) => {
              return (
                <div key={index}>
                  <img src={Hotel_Logo} alt="logo" className={`${style.logo} ${index === 0 ? style.one_logo : ''}  ${index === 2 ? style.two_logo : ''}`} />
                </div>
              )
            })}
          </div>
          <h1 className={style.heading}>
            Contact <span>Hotel Golden</span>
          </h1>
          <p className={style.subheading}>
            We’re always happy to assist you — feel free to reach out anytime!
          </p>
        </center>


        <div className={`${style.contact_grid} max-width flex`}>
          <div className={style.contact_img}>
            <img src={contact_img} alt="contact-img" width='400px' />
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className={style.contact_form}
          >
            <h2>Send us a Message</h2>
            <input type="text" placeholder="Your Name" name="name" required autoComplete="off" />
            <input type="email" placeholder="Your Email" name="email" required autoComplete="off" />
            <input type="number" placeholder="Your Number" name="number" required  />
            <textarea placeholder="Your Message" rows="5" name="message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <section className={style.contact_info_section}>
        <center>
          <h2 className={style.heading}>We’d Love to Hear From You</h2>
          <div className={`goldImg flex`}></div>
          <p className={style.subheading}>
            Reach out for bookings, inquiries, or any assistance — our team is just a call away.
          </p>
        </center>

        <div className={`${style.contact_info} flex max-width`}>
          {Contact_Info.map((item, index) => {
            return (
              <div className={style.info_card}>
                <div className={style.icon}>{item.img}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

      </section>
      {/* Map Section */}
      <div
        className={`${style.map_section} max-width`}>

        <a href="https://goo.gl/maps/3pKWGorzfi8g37N57">
          <img loading="lazy" decoding="async" width="1024" height="512" src="https://hotelgolden.co.in/wp-content/uploads/2023/01/2023-01-01-1024x512.png" class="attachment-large size-large" alt="" srcset="https://hotelgolden.co.in/wp-content/uploads/2023/01/2023-01-01-1024x512.png 1024w, https://hotelgolden.co.in/wp-content/uploads/2023/01/2023-01-01-300x150.png 300w, https://hotelgolden.co.in/wp-content/uploads/2023/01/2023-01-01-768x384.png 768w, https://hotelgolden.co.in/wp-content/uploads/2023/01/2023-01-01-1536x768.png 1536w, https://hotelgolden.co.in/wp-content/uploads/2023/01/elementor/thumbs/2023-01-01-q00ntqrhw315cpsabikysmu989ob0vuswhw4pt1gpc.png 400w, https://hotelgolden.co.in/wp-content/uploads/2023/01/elementor/thumbs/2023-01-01-150x150.png 2000w, https://hotelgolden.co.in/wp-content/uploads/2023/01/2023-01-01.png 1698w" sizes="auto, (max-width: 1024px) 100vw, 1024px" />
        </a>
      </div>
    </section>
  );
}

export default ContactUs;
