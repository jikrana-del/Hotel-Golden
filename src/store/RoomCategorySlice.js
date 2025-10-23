import { createSlice } from "@reduxjs/toolkit";

const AC_images = Array.from({ length: 14 }, (_, i) => {
  const basePath = `/gallery-images/AC-images/AC-${i + 1}`;
  return [`${basePath}.webp`, `${basePath}.jpg`];
})


const Non_AC_images = Array.from({ length: 10 }, (_, i) => {
  const basePath = `/gallery-images/Non-AC-images/Non-AC-${i + 1}`;
  return [`${basePath}.webp`, `${basePath}.jpg`, `${basePath}.jpeg`];
});

const Dormitory_images = Array.from({ length: 3 }, (_, i) => {
  const basePath = `/gallery-images/Dormitory-images/dormitory-${i + 1}`;
  return [`${basePath}.webp`, `${basePath}.jpg`];
})

const Economic_images = Array.from({ length: 2 }, (_, i) => {
  const basePath = `/gallery-images/Economic-images/economic-${i + 1}`;
  return [`${basePath}.webp`, `${basePath}.jpg`];
})
const RoomCategotyData = [

  {
    id: 'royal-ac',
    name: 'Royal AC Room',
    description: "Experience the height of luxury in our Royal AC Rooms, where elegance meets modern comfort. Designed with warm lighting, premium furniture, and soothing interiors, each room offers a sense of grandeur and peace. Relax in the cozy bedding, enjoy cool air-conditioned comfort, and unwind with our high-end amenities. Whether you’re traveling for business or leisure, this room ensures you stay like royalty — comfortable, calm, and completely refreshed.",
    images: AC_images.slice(0, 5),

  },
  {
    id: 'standard-ac',
    name: 'Standard AC Room',
    description: 'Our Standard AC Rooms redefine comfort at great value. Equipped with air-conditioning, cozy bedding, a modern bathroom, and all essential facilities, it’s perfect for travelers seeking a relaxing stay. Enjoy a serene night’s sleep in a clean and calming space that feels just like home — only better',
    images: AC_images.slice(5, 10)
  },
  {
    id: 'royal-non-ac',
    name: 'Royal Non-AC Room',
    description: 'Crafted for those who love comfort with simplicity, our Royal Non-AC Rooms blend sophistication with affordability. Spacious interiors, high-quality furnishings, and elegant décor create a pleasant atmosphere for rest and relaxation. Large windows allow natural air and light to fill the space, offering a peaceful stay without compromising on style or cleanliness.',
    images: Non_AC_images.slice(0, 5)

  },
  {
    id: 'standard-non-ac',
    name: 'Standard Non-AC Room',
    description: 'Designed with simplicity and comfort in mind, the Standard Non-AC Rooms provide everything you need for a peaceful stay. Each room is well-ventilated, beautifully maintained, and ideal for guests who value comfort without extra cost. It’s an excellent choice for solo travelers and small families alike.',
    images: Non_AC_images.slice(5, 10)
  },
  {
    id: 'economic',
    name: 'Economic Room',
    description: 'The Economic Rooms are made for smart travelers who want a budget-friendly stay without compromising cleanliness or comfort. Neatly designed with all basic amenities, these rooms ensure you get restful sleep and a worry-free experience. It’s comfort simplified — light on the wallet, heavy on satisfaction.',
    images: Economic_images.slice(0, 2)
  },

  {
    id: 'dormitory',
    name: 'Dormitory Hall',
    description: 'Our Dormitory Hall is perfect for group stays, backpackers, or families traveling together. Spacious, well-ventilated, and equipped with multiple comfortable beds, it offers the warmth of togetherness at an unbeatable price. With shared facilities and a friendly ambiance, this hall ensures a homely, social, and convenient experience for every guest.',
    images: Dormitory_images.slice(0, 3)
  }
]


export const RoomCategorySlice = createSlice({
name:"roomCategory",
initialState:{
  room:RoomCategotyData,
},
reducers :{},
});
export const RoomCategoryDataAction = RoomCategorySlice.actions;