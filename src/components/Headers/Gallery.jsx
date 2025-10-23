
import { useState, useEffect } from "react";
import { FiMaximize } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import style from "../../css/Gallery.module.css";
import "animate.css";

const GalleryAllImages = Array.from(
  { length: 23 },
  (_, i) => {
    const basePath = `./gallery-images/gallery-${i + 1}`;
    return [`${basePath}.jpg`, `${basePath}.jpeg`]
  }

);

const AC_images = Array.from({ length: 14 }, (_, i) => {
  const basePath = `./gallery-images/AC-images/AC-${i + 1}`;
  return [`${basePath}.webp`, `${basePath}.jpg`];
})


const Non_AC_images = Array.from({ length: 10 }, (_, i) => {
  const basePath = `./gallery-images/Non-AC-images/Non-AC-${i + 1}`;
  return [`${basePath}.webp`, `${basePath}.jpg`, `${basePath}.jpeg`];
});

const Dormitory_images = Array.from({ length: 3 }, (_, i) => {
  const basePath = `./gallery-images/Dormitory-images/dormitory-${i + 1}`;
  return [`${basePath}.webp`, `${basePath}.jpg`];
})

const Economic_images = Array.from({ length: 2 }, (_, i) => {
  const basePath = `./gallery-images/Economic-images/economic-${i + 1}`;
  return [`${basePath}.webp`, `${basePath}.jpg`];
})

const Reception_images = Array.from({ length: 6 }, (_, i) => {
  const basePath = `./gallery-images/Reception-images/reception-${i + 1}`;
  return [`${basePath}.webp`, `${basePath}.jpg`];
})

function Gallery() {
  const imgCategory = [GalleryAllImages, AC_images, Non_AC_images, Economic_images, Dormitory_images, Reception_images];
  const Buttons = ['All', ' AC Room', ' Non-AC Room', 'Economic Room', 'Dormitory Hall', 'Reception'];

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedImgIndex, setSelcetedImgIndex] = useState(null);
  const selectedImages = imgCategory[selectedCategoryIndex];

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
    setSelcetedImgIndex(index);
  };

  const closeFullImg = () => {
    setSelectedImg(null);
  };
  const Hendel_Left = () => {
    if (selectedImgIndex > 0) {
      const newIndex = selectedImgIndex - 1;
      setSelectedImg(selectedImages[newIndex]);
      setSelcetedImgIndex(newIndex);
    }
  }
  const Hendel_Right = () => {
    if (selectedImgIndex < selectedImages.length - 1) {
      const newIndex = selectedImgIndex + 1;
      setSelectedImg(selectedImages[newIndex]);
      setSelcetedImgIndex(newIndex);
    }
  }

  const HendelImgCategory = (index) => {
    setSelectedCategoryIndex(index)
  }
  return (
    <>
      {/* button Section */}
      <section>
        <div className={`${style.btn_section} flex`}>
          {Buttons.map((btn, index) => {
            return (
              <div key={index} className={` max-width`}>
                <NavLink className={` ${selectedCategoryIndex === index ? style.active_btn : ''}`} onClick={() => HendelImgCategory(index)}>
                  {btn}
                </NavLink>
              </div>
            )
          })}
        </div>
      </section>
      <center>
        <h1>{Buttons[selectedCategoryIndex] === 'All' ? 'All Images' : Buttons[selectedCategoryIndex]}</h1>
      </center>
      <div className={`goldImg flex`}></div>
      {/* Gallery Section */}
      <section className={`flex max-width ${style.gallery_section} animate__animated  animate__zoomIn  `} key={selectedCategoryIndex}>
        {selectedImages.map((img, index) => (
          <div key={index} className={`flex ${style.gallery_img} `}>
            <img
              src={img[0]}
              onError={(e) => (e.target.src = img[1])}
              alt={`gallery ${index + 1}`} />
            <div
              className={`screen_icon `}
              onClick={() => handleFullImg(img, index)}
            >
              <FiMaximize />
            </div>
          </div>
        ))}
      </section>

      {/*  Fullscreen Overlay */}
      {selectedImg && (
        <div className={`fullscreen_overlay flex`}>
          <div className={`close_icon`} onClick={closeFullImg}>
            <AiOutlineClose />
          </div>
          {selectedImgIndex > 0 && <div className={`left_icon`} onClick={Hendel_Left}>
            <FaChevronLeft size={35} />
          </div>}

          <img
            key={selectedImgIndex}
            src={selectedImg[0]}
            onError={(e) => (e.target.src = selectedImg[1])}
            alt="fullscreen"
            className={`full_img`} />
          {selectedImgIndex < selectedImages.length - 1 && <div className={`right_icon`} onClick={Hendel_Right}>
            <FaChevronRight size={35} />
          </div>}

        </div>
      )}
    </>
  );
}

export default Gallery;
