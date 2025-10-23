


import { FaBroom, FaShower, FaTv, FaWifi, FaBed } from "react-icons/fa";
import { BsWater } from "react-icons/bs";
import { FaSmokingBan } from "react-icons/fa";
import { RiArmchairFill } from "react-icons/ri";
import { FaFireExtinguisher, FaUserDoctor, FaVideo, FaRegNewspaper, FaBell } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";



const DestinationImages = Array.from({ length: 6 }, (_, i) => `/destinations-place/destinations-${i + 1}.jpg`);

const CardImages = Array.from({ length: 6 }, (_, i) => {
  const basePath = `/card-images/card-${i + 1}`;
  return [`${basePath}.jpg`, `${basePath}.jpeg`]
});





// card Section

const cards = [
  {
    img: CardImages[0],
    title: 'Royal AC',
    text: "Step into the world of luxury and comfort with our Royal AC Rooms. Designed for guests who seek an extraordinary experience, these rooms feature premium interiors, elegant décor, and a calm ambience that reflects sophistication. Each room comes with a plush king-size bed, advanced air-conditioning, modern furniture, and ambient lighting for a royal atmosphere. Enjoy exclusive amenities such as complimentary Wi-Fi, a flat-screen TV, and 24-hour room service. Perfect for business travelers and couples who wish to enjoy luxury, comfort, and privacy in style",
  },
  {
    img: CardImages[1],
    title: 'Standard AC',
    text: "Our Standard AC Rooms offer the perfect combination of comfort and functionality. Thoughtfully designed to provide a relaxing environment, these rooms come equipped with efficient air-conditioning, cozy bedding, a smart TV, and essential amenities. Whether you’re on a business trip or a short family vacation, these rooms ensure you stay refreshed and well-rested. Enjoy comfort and convenience at an affordable price with a touch of elegance."
  },
  {
    img: CardImages[2],
    title: 'Royal Non-AC',
    text: 'Our Royal Non-AC Rooms are a blend of traditional charm and modern comfort. These spacious rooms feature royal interiors with rich wooden furnishings, soft lighting, and comfortable bedding. Ideal for guests who prefer natural ventilation, the rooms are designed to keep you cool and relaxed throughout your stay. With facilities like high-speed Wi-Fi, LED TV, and 24-hour service, every aspect of comfort is well taken care of — making your experience both luxurious and affordable',
  },
  {
    img: CardImages[3],
    title: 'Standard Non-AC',
    text: 'The Standard Non-AC Rooms are designed for guests who prefer simplicity with comfort. These well-ventilated and naturally lit rooms feature cozy interiors, clean bedding, and essential amenities like Wi-Fi, TV, and attached bathrooms. Perfect for budget travelers or guests who enjoy natural air circulation, these rooms deliver comfort without compromising on cleanliness or service quality.'
  },
  {
    img: CardImages[4],
    title: 'Economic Room',
    text: 'Designed for budget-friendly comfort, out Economic Rooms offer clean, cozy spaces with essential facilities for a peaceful stayOur Economic Rooms are designed for smart travelers who value both comfort and affordability. Compact yet cozy, these rooms come with all essential amenities like clean bedding, attached bathrooms, high-speed Wi-Fi, and TV. Ideal for solo travelers, backpackers, or short stays, these rooms ensure you experience a peaceful and budget-friendly stay without compromising on quality.',
  },
  {
    img: CardImages[5],
    title: 'Dormitory Hall',
    text: 'The Dormitory Hall offers an ideal stay for groups, solo travelers, and backpackers. Each bed is equipped with personal storage, reading lights, charging ports, and clean linen. The hall is spacious, well-ventilated, and regularly sanitized for hygiene. It’s a perfect place to rest, meet new people, and enjoy a community-style living experience at a minimal cost.',
  },
];



// fecilities section
const Facilities = [
  {
    img: <FaWifi />,
    title: 'Free Internet',
    discription: 'Stay connected with fast and reliable internet all areas.'
  },
  {
    img: <FaSmokingBan />,
    title: 'Non-Smoking Rooms',
    discription: 'Smoke-free rooms for a healthy and pleasant stay.'
  },
  {
    img: <BsWater />,
    title: 'Hot & Cold Water',
    discription: '24*7 supply of clean hot and cold water.'
  },
  {
    img: <FaBroom />,
    title: 'Daily Housekeeping',
    discription: 'Clean, fresh rooms maintained daily for your comfort.'
  },
  {
    img: <FaTv />,
    title: 'Smart TV',
    discription: 'Watch your favorite shows with premium entertainment options.'
  },
  {
    img: <FaShower />,
    title: 'Rain Shower',
    discription: 'Refresh Yourself with a luxurious rain-style shower.'

  },
  {
    img: <FaBed />,
    title: 'Cloud Beds',
    discription: "Soft and cuzy beds for a restful night's sleep"
  },
  {
    img: <RiArmchairFill />,
    title: 'Desk & Chair',
    discription: 'Comfortable workspace for business or leisure needs.'
  },
  {
    img: <FaCar />,
    title: 'Ample Parking (Free)',
    discription: 'Spacious and secure parking area available for guests at no extra cost.'
  },
  {
    img: <FaCcVisa />,
    title: 'Nearby ATM Avaliable',
    discription: 'Conveniently located ATMs nearby ensure hassle-free cash access anytim.'
  },
  {
    img: <FaVideo />,
    title: 'CCTV Surveillance',
    discription: '24/7 CCTV monitoring ensures your safety and peace of mind throughout stay.'
  },
  {
    img: <FaUserDoctor />,
    title: 'Doctor on Call',
    discription: 'Medical assistance avaliable on call anytime to ensure your well-being.'
  },
  {

    img: <FaFireExtinguisher />,
    title: 'Fire Extinguisher',
    discription: 'Every corner equipped with fire extinguishers to ensure coplete safety.'
  },

  {
    img: <FaRegNewspaper />,
    title: 'Daily Newspaper',
    discription: 'Stay updated every morning with complimentary newspapers in your room.'
  },
  {
    img: <GiWashingMachine />,
    title: 'Laundry Service',
    discription: 'Quick and reliable laundry service to keep your clothes fresh , clean and neatly pressed during your stay.'
  }
]



// Destination Data
const Destination_place = [
  {
    img: DestinationImages[0],
    title: 'Dantivada Dam',
    discription: 'Dantivada Dam is built on the Banas River near Palanpur. It is one of the the major water reservoirs of North Gujrat.Surrounded by scenic hills and greenery, the dam is a perfect picnic spot where people come to relax, enjoy boating, and take photographs.'
  },
  {
    img: DestinationImages[1],
    title: 'Balaram Palace',
    discription: 'Balaram palace was once the hunting retreat of the Newab of palanpur. Now it has been converted into a heritage hotel. The palace is built in neo-classical and baroque architectural styles and surrounded by the lush Balaram Ambaji Wildlife sanctuary.'
  },
  {
    img: DestinationImages[2],
    title: 'Ambaji Temple',
    discription: 'Ambaji Temple is one of the 51 shakti peethas in india,dedicated to Goddess Amba.The temple is located at the foothills of the Aravalli Mountains. it is a major pilgrimage site visited by thousands of devotees every day.'
  },
  {
    img: DestinationImages[3],
    title: 'Gabbar Hill',
    discription: "Gabbar Hill is a sacred hill located near Ambaji Temple. It is believed to be the original seat of Goddess Amba. Devotees climb around 999 stap or take a ropeway to reach the top, where a small shrine marks the goddess's footprint. "
  },
  {
    img: DestinationImages[4],
    title: 'Rani ki Vav',
    discription: "Rani ki Vav, Located in patan ,is a UNESCO World Heritage Site. it is an ancient stepwell built by Queen Udayamati in memory of her husband king Bhimdev, The structure is famouse for its intricate carvings and sculptures that represent india's rich art and architecture."
  },
  {
    img: DestinationImages[5],
    title: 'Panihari Waterfalls',
    discription: "Panihari Waterfalls is a hidden gen Danta,surrounded by rocky cliffs and lush greenery. The waterfall is most beautiful during the monsoon season when the water flows heavily and creates a misty, refreshing atmosphere. it's a peaceful picnic and photography spot for nature lovers."
  }
]

const FAQ = [
  {
    quention: 'Where is Hotel Golden Located ?',
    ans: 'Hotel Golden is located near Kirtistambh Circle, close to Dharti Hospital and the Railway Station in Palanpur, Gujarat (385001)'
  },
  {
    quention: 'What are the check-in and check-out times?',
    ans: 'Check-in time is 12:00 PM , and check-out time is 11:00 AM. Early check-in or late check-out may be available upon request.'
  },
  {
    quention: 'Dose Hotel Golden Provide free Wi-Fi?',
    ans: 'Yes, we offer complimentary high-speed Wi-Fi throughout the hotel premises.'
  },
  {
    quention: 'Does Hotel Golden have a restaurant?',
    ans: 'Yes, our in-house restaurant serves multi-cuisine dishes, including Indian, Chinese, and Continental food.'
  },
  {
    quention: 'Do you provide airport pick-up and drop service?',
    ans: 'Yes, airport pick-up and drop service is available on request (charges may apply).'
  },
  {
    quention: 'Is there a banquet or conference hall available?',
    ans: 'Yes, we have a banquet hall and meeting facilities for weddings, parties, and corporate events.'
  },
  {
    quention: 'How can I make a booking?',
    ans: 'You can book directly through our official Website, by calling our reception, or via popular travel platforms.'
  }
]
export { Destination_place, cards, Facilities, FAQ }