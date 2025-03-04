const reviewsData = [
  {
    productId: 1,
    reviews: [
      {
        name: "Anonymous",
        date: "October 1, 2023",
        comment: "I got it today, thankfully",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "October 12, 2023",
        comment: "I made my payment and sit back, glad to get the software",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "October 12, 2023",
        comment: "Glad to get the software, wonderful people",
        rating: 3,
      },
      {
        name: "Anonymous",
        date: "October 12, 2023",
        comment: "Your software is really working for India, I can see!",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "October 15, 2023",
        comment: "Easy to use and very helpful, thanks!",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "October 16, 2023",
        comment: "Works perfectly for my needs.",
        rating: 4,
      },
      {
        name: "Anonymous",
        date: "October 17, 2023",
        comment: "Great software, highly recommended!",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "October 18, 2023",
        comment: "Had a small issue, but support helped quickly.",
        rating: 4,
      },
      {
        name: "Anonymous",
        date: "October 19, 2023",
        comment: "Does exactly what it says, no complaints.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "October 20, 2023",
        comment: "Very intuitive and user-friendly.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "October 21, 2023",
        comment: "A bit pricey, but worth it for the features.",
        rating: 4,
      },
      {
        name: "Anonymous",
        date: "October 22, 2023",
        comment: "Smooth installation process, no hiccups.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "October 23, 2023",
        comment: "Great customer service, very responsive.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "October 24, 2023",
        comment: "Works well on my old system, impressive.",
        rating: 4,
      },
      {
        name: "Anonymous",
        date: "October 25, 2023",
        comment: "Love the interface, very modern and clean.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "October 26, 2023",
        comment: "Had some bugs initially, but they fixed them fast.",
        rating: 4,
      },
      {
        name: "Anonymous",
        date: "October 27, 2023",
        comment: "Perfect for small businesses like mine.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "October 28, 2023",
        comment: "A must-have tool for productivity.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "October 29, 2023",
        comment: "Simple yet powerful, exactly what I needed.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "October 30, 2023",
        comment: "Works seamlessly across devices.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "October 31, 2023",
        comment: "Great value for the price.",
        rating: 4,
      },
      {
        name: "Anonymous",
        date: "November 1, 2023",
        comment: "Highly customizable, love it!",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 2, 2023",
        comment: "A few missing features, but overall solid.",
        rating: 4,
      },
      {
        name: "Anonymous",
        date: "November 3, 2023",
        comment: "Fast and reliable, no crashes so far.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 4, 2023",
        comment: "Excellent software, does the job well.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 5, 2023",
        comment: "Very happy with my purchase.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 6, 2023",
        comment: "Could use more tutorials, but still great.",
        rating: 4,
      },
      {
        name: "Anonymous",
        date: "November 7, 2023",
        comment: "Works perfectly for my workflow.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 8, 2023",
        comment: "A bit slow on startup, but otherwise fine.",
        rating: 4,
      },
      {
        name: "Anonymous",
        date: "November 9, 2023",
        comment: "Very impressed with the performance.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 10, 2023",
        comment: "Great software for beginners and pros alike.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 11, 2023",
        comment: "No regrets, worth every penny.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 12, 2023",
        comment: "Easy to set up and start using.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 13, 2023",
        comment: "A few glitches, but nothing major.",
        rating: 4,
      },
      {
        name: "Anonymous",
        date: "November 14, 2023",
        comment: "Fantastic software, highly recommend it.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 15, 2023",
        comment: "Works great on both Windows and Mac.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 16, 2023",
        comment: "Very satisfied with the features.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 17, 2023",
        comment: "A bit complex at first, but worth learning.",
        rating: 4,
      },
      {
        name: "Anonymous",
        date: "November 18, 2023",
        comment: "Excellent support team, very helpful.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 19, 2023",
        comment: "Does everything I need and more.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 20, 2023",
        comment: "Very reliable, no issues so far.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 21, 2023",
        comment: "Great software for the price.",
        rating: 4,
      },
      {
        name: "Anonymous",
        date: "November 22, 2023",
        comment: "Love the updates, keeps getting better.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 23, 2023",
        comment: "Works perfectly for my team.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 24, 2023",
        comment: "Very easy to use, even for non-techies.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 25, 2023",
        comment: "A few bugs, but overall a great product.",
        rating: 4,
      },
      {
        name: "Anonymous",
        date: "November 26, 2023",
        comment: "Highly recommend this software.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 27, 2023",
        comment: "Very happy with the performance.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 28, 2023",
        comment: "Great for small and large projects alike.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 29, 2023",
        comment: "Works flawlessly, no complaints.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "November 30, 2023",
        comment: "Very intuitive and easy to navigate.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 1, 2023",
        comment: "A bit pricey, but worth it.",
        rating: 4,
      },
      {
        name: "Anonymous",
        date: "December 2, 2023",
        comment: "Great software, does what it promises.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 3, 2023",
        comment: "Very reliable and efficient.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 4, 2023",
        comment: "Excellent features and functionality.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 5, 2023",
        comment: "Works perfectly for my needs.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 6, 2023",
        comment: "Very happy with the purchase.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 7, 2023",
        comment: "Great software, highly recommend.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 8, 2023",
        comment: "Easy to use and very effective.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 9, 2023",
        comment: "Very satisfied with the performance.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 10, 2023",
        comment: "Works great, no issues so far.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 11, 2023",
        comment: "Excellent software, worth the money.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 12, 2023",
        comment: "Very easy to set up and use.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 13, 2023",
        comment: "Great for both personal and professional use.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 14, 2023",
        comment: "Very reliable and efficient.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 15, 2023",
        comment: "Highly recommend this software.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 16, 2023",
        comment: "Works perfectly for my needs.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 17, 2023",
        comment: "Very happy with the purchase.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 18, 2023",
        comment: "Great software, highly recommend.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 19, 2023",
        comment: "Easy to use and very effective.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 20, 2023",
        comment: "Very satisfied with the performance.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 21, 2023",
        comment: "Works great, no issues so far.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 22, 2023",
        comment: "Excellent software, worth the money.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 23, 2023",
        comment: "Very easy to set up and use.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 24, 2023",
        comment: "Great for both personal and professional use.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 25, 2023",
        comment: "Very reliable and efficient.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 26, 2023",
        comment: "Highly recommend this software.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 27, 2023",
        comment: "Works perfectly for my needs.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 28, 2023",
        comment: "Very happy with the purchase.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 29, 2023",
        comment: "Great software, highly recommend.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 30, 2023",
        comment: "Easy to use and very effective.",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "December 31, 2023",
        comment: "Very satisfied with the performance.",
        rating: 5,
      },
    ],
  },
  {
    productId: 2,
    reviews: [
      {
        name: "Anonymous",
        date: "October 1, 2023",
        comment: "I got it today, thankfully",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "October 12, 2023",
        comment: "I made my payment and sit back, glad to get the software",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "October 12, 2023",
        comment: "Glad to get the software, wonderful people",
        rating: 3,
      },
      {
        name: "Anonymous",
        date: "October 12, 2023",
        comment: "Your software is really working for India, I can see!",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "October 15, 2023",
        comment: "Easy to use and very helpful, thanks!",
        rating: 5,
      },
      {
        name: "Anonymous",
        date: "October 16, 2023",
        comment: "Works perfectly for my needs.",
        rating: 4,
      },
    ],
  },
  {
    productId: 3,
    reviews: [
      { name: "Anonymous", comment: "Could be better.", rating: 5 },
      {
        name: "Anonymous",
        comment: "Great software, Loved it, highly recommend.",
        rating: 5,
      },
    ],
  },
];

export default reviewsData;
