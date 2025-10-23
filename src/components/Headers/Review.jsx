import style from '../../css/Review.module.css';
function Review() {
  return (
  <>
  <section>
        <section className={style.review_section}>
          <h2 className={style.heading}>What Our Guests Say</h2>
          <p className={style.subheading}>
            Real experiences shared by our happy guests at Hotel Golden ✨
          </p>

          <div className={style.review_wrapper}>
            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div
              className="elfsight-app-a593ec45-6e07-4eca-993f-4a20f281bccb"
              data-elfsight-app-lazy
            ></div>
          </div>

          <div className={`${style.manual_reviews} flex  max-width`}>
            <div className={style.review_card}>
              <p className={style.comment}>
                “Beautiful stay! Rooms were spotless and staff were very kind.”
              </p>
              <h4 className={style.name}>— Priya Patel</h4>
            </div>

            <div className={style.review_card}>
              <p className={style.comment}>
                “The food was delicious and service was top-notch. Highly recommended!”
              </p>
              <h4 className={style.name}>— Ramesh Kumar</h4>
            </div>

            <div className={style.review_card}>
              <p className={style.comment}>
                “Feels like home — peaceful environment and great hospitality.”
              </p>
              <h4 className={style.name}>— Meena Sharma</h4>
            </div>
          </div>
          <a
            href="https://www.google.com/travel/search?q=Hotel%20Golden%2C%20Palanpur%2C%20Kirtistambh%20Cir%2C%20near%20Railway%20Station%20and%20Dharti%20hospital%2C%20Chaman%20Bagh%2C%20Palanpur%2C%20Gujarat%20385001&g2lb=4965990%2C4969803%2C72302247%2C72317059%2C72414906%2C72471280%2C72472051%2C72485658%2C72560029%2C72573224%2C72616120%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C72959983%2C73059275%2C73064764%2C73107089%2C73124299&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaRgooEiYyJDB4Mzk1Y2U5Njc1ZGQ5NDU5MToweDhhMGU3NzAxZTBlMzIzMRIaEhQKBwjpDxAKGBISBwjpDxAKGBMYATICEAA&qs=CAEyE0Nnb0lzZVM0OElIdXVkQUlFQUU4AkIJCTEyDh5w56AIQgkJMTIOHnDnoAg&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjwga3dxquQAxUAAAAAHQAAAAAQBA"
            target="_blank"
            rel="noopener noreferrer"
            className={style.review_btn}
          >
            Leave Your Review ⭐
          </a>
        </section>

  </section>
 
  </>
  )
}

export default Review