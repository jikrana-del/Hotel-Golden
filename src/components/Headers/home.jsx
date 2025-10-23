import { useState, useEffect } from "react";
import style from "../../css/Home.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Destination_place, cards, Facilities, FAQ } from "./Home_Helper";
const SliderImages = Array.from({ length: 10 }, (_, i) => `/hero-images/hero-${i + 1}.jpg`);
import { NavLink } from "react-router-dom";
import { FiMaximize } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
function Home() {

  // Slider section
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("right");
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);
  const [openIndexs, setOpenIndexs] = useState([]);

  useEffect(() => {

    const interval = setInterval(() => {
      handleNext("auto");
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const handleNext = (type = "manual") => {
    if (animating) return;
    setDirection("right");
    setAnimating(true);
    setNext((current + 1) % SliderImages.length);

    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % SliderImages.length);
      setAnimating(false);
    }, 1200);
  };

  const handlePrev = () => {
    if (animating) return;
    setDirection("left");
    setAnimating(true);
    setNext((current - 1 + SliderImages.length) % SliderImages.length);

    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + SliderImages.length) % SliderImages.length);
      setAnimating(false);
    }, 1200);
  };

  useEffect(() => {
    if (selectedImg !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImg, selectedImgIndex]);

  const handleFullImg = (img, index) => {
    setSelectedImg(img);
    setSelectedImgIndex(index);
  }
  const closeFullImg = () => {
    setSelectedImg(null)
  }
  const Hendel_Left = () => {
    if (selectedImgIndex > 0) {
      const newIndex = selectedImgIndex - 1;
      setSelectedImg(Destination_place[newIndex].img);

      setSelectedImgIndex(newIndex);
    }
  }
  const Hendel_Right = () => {
    if (selectedImgIndex < Destination_place.length - 1) {
      const newIndex = selectedImgIndex + 1;
      setSelectedImg(Destination_place[newIndex].img);
      setSelectedImgIndex(newIndex);
    }
  }

  const HendelToggle = (index) => {
    if (openIndexs.includes(index)) {
      setOpenIndexs(openIndexs.filter((i) => i !== index));
    }
    else {
      setOpenIndexs([...openIndexs, index])
    }
  }

  const RoomsColities = [
    { id: "royal-ac", name: "Royal AC Suite Room" },
    { id: "standard-ac", name: "Standard AC Deluxe Room" },
    { id: "royal-non-ac", name: "Royal Non-AC Rooms" },
    { id: "standard-non-ac", name: "Standard Non-AC Rooms" },
    { id: "economic", name: "Economic Room" },
    { id: "dormitory", name: "Dormitory Hall" }
  ];

  return (
    <section>

      <section className={style.hero_wrapper}>
        <div className={style.slider}>
          <img
            key={`current-${current}`}
            src={SliderImages[current]}
            alt="current"
            className={`${style.hero_img} ${animating
              ? direction === "right"
                ? style.slideOutLeft
                : style.slideOutRight
              : style.active
              }`}
          />

          <img
            key={`next-${next}`}
            src={SliderImages[next]}
            alt="next"
            className={`${style.hero_img} ${animating
              ? direction === "right"
                ? style.slideInRight
                : style.slideInLeft
              : ""
              }`}
          />

          <button className={`${style.navButton} ${style.left}`} onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <button className={`${style.navButton} ${style.right}`} onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
      </section>
      {/* discription section  */}
      <section className={`${style.hotel_desc_section} max-width`}>
        <div className={style.hotel_desc_content}>
          <h1 className={style.hotel_name}>HOTEL GOLDEN</h1>
          <h3 className={style.hotel_tagline}>Experience Comfort, Where Every Stay Feels Like Home</h3>
          <div className={`goldImg flex`}></div>

          <p className={style.hotel_text}>
            Discover the perfect blend of luxury and convenience at <strong>Hotel Golden</strong>, located in the heart of the city. Our hotel offers a relaxing escape while keeping you close to major attractions. With modern amenities, elegantly designed rooms, and personalized service, every stay is crafted to make you feel at home. Whether you are traveling for business or leisure, <strong>Hotel Golden</strong> ensures a premium experience without compromising on comfort or affordability. Conveniently accessible from the railway station, bus stand, and nearby airport, our hotel is ideal for travelers. Start your day with a delicious breakfast and enjoy our attentive hospitality that makes your stay memorable.
          </p>
        </div>
      </section>

      {/* card section */}
      <section className={style.card_section} id="room">
        <h2 className={style.section_heading}>Our Signature Experiences</h2>
        <div className={`goldImg flex`}></div>
        <p className={style.section_subtext}>
          From cozy rooms to premium experiences, every detail reflects our golden standard of hospitality.
        </p>

        <div className={`${style.card_container} flex max-width `}>

          {cards.map((card, index) => (
            <div
              className={`${style.card} flex ${index % 2 === 0 ? style.normal : style.reverse}`}
              key={index}
            >
              <div className={style.card_img_containar}>
                <img
                  src={card.img[0]}
                  onError={(e) => (e.target.src = card.img[1])}
                  alt={card.title}
                  className={style.card_img}

                />
              </div>

              <div className={`${style.card_content} flex`}>
                <h1 className={style.card_title}>{card.title}</h1>
                <p className={style.card_text}>{card.text}</p>
                <button className={`btn ${style.card_btn}`}>
                  {/* <HashLink to={`/rooms/${RoomsColities[index].id}`}> View More</HashLink>  */}
                  <NavLink to={`/rooms/${RoomsColities[index].id}`}>View More</NavLink>

                  </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* fecilities section */}
      <section className={`${style.fecilities_section} max-width`}>
        <center>
          <h2 className={style.fecilities_title}>Exceptional Facilities for a Memorable Stay</h2>
          <div className={`goldImg flex`}></div>
          <p>
            Enjoy comfort, luxury, and thoughtful amenities designed to make your stay unforgettable.
          </p>
        </center>
        <div className={`${style.facilities_card} flex max-width`}>
          {Facilities.map((fac, index) => {
            return <div key={index}>
              <div className={`${style.facilities_contain} flex`}>
                <h1>{fac.img}</h1>
                <h2>{fac.title}</h2>
                <h4>{fac.discription}</h4>

              </div>
            </div>
          })}
        </div>
      </section>
      {/* review section  */}

      <section className={style.review_section}>
        <div className={style.review_wrapper}>
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div
            className="elfsight-app-a593ec45-6e07-4eca-993f-4a20f281bccb"
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>

      {/* Top destinations */}
      <section className={style.Destination_section}>
        <center>
          <h1 className={style.Destination_title}>
            Golden Destinations — Explore the Beauty Around Us
          </h1>
          <div className={`goldImg flex`}></div>
          <p className={style.Destination_subtext}>
            Discover Palanpur’s most loved places — from serene temples to royal palaces and natural wonders,
            all just a short drive away from Hotel Golden.
          </p>
        </center>
        <section className={`flex ${style.Destination_section} max-width `}>
          {Destination_place.map((detail, index) => {
            return (
              <div key={index}>
                <div className={` flex ${style.Destination_place}`}>
                  <div className={style.Destination_img}>
                    <img src={detail.img} alt={detail.title} />
                    <div
                      className={`screen_icon`}
                      onClick={() => handleFullImg(detail.img, index)}
                    >
                      <FiMaximize />
                    </div>
                  </div>
                  <h2>{detail.title}</h2>
                  <p>{detail.discription}</p>
                </div>
              </div>)
          })}
          {selectedImg && (
            <div className={`fullscreen_overlay flex`}>
              <div className={`close_icon`} onClick={closeFullImg}>
                <AiOutlineClose />
              </div>
              {selectedImgIndex > 0 && <div
                className={`left_icon`} onClick={Hendel_Left}>
                <FaChevronLeft size={35} />
              </div>}
              <img
                key={selectedImgIndex}
                src={selectedImg}
                alt="fullscreen" />
              {selectedImgIndex < Destination_place.length - 1 && <div className={`right_icon`} onClick={Hendel_Right}>
                <FaChevronRight size={35} />
              </div>}
            </div>
          )}
        </section>
      </section>
      {/* FAQ section */}
      <section className={`${style.faq_section} flex max-width`} >
        <center>
          <h1 className={style.faq_title}> Frequently Asked Questions</h1>
          <p>Everything you need to know before your stay at Hotel Golden.</p>
        </center>

        <div>
          {FAQ.map((item, index) => {
            return (
              <div key={index} className={style.faq_item}>
                <div className={`flex gep `} onClick={() => HendelToggle(index)}>
                  <h3>{item.quention}</h3>
                  {openIndexs.includes(index) ? <FaChevronUp size={15} /> : <FaChevronDown size={15} />}
                </div>
                {openIndexs.includes(index) && <p>{item.ans}</p>}
              </div>
            )
          })}
        </div>
      </section>
    </section >
  );
}

export default Home;
