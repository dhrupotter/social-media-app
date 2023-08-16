/* eslint-disable import/no-extraneous-dependencies */
import { v4 as uuidv4 } from 'uuid';
import { formatDate } from '../utils/authUtils';

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuidv4(),
    content:
      'Tip of the day: If you are confused between Composition and Inheritance to solve a problem - Always go with Composition pattern. Composition gives more flexibility because it is loosely coupled and Inheritance is tightly coupled.',
    image: '',
    imageAlt: '',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'adarshbalika',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuidv4(),
    content:
      "🌍 Just returned from an incredible adventure in South Africa! From hidden gems to breathtaking landscapes, this place has it all. Can't wait to share my travel tips and stories with you all. Stay tuned! 🗺️✈️ #TravelAdventures #Wanderlust",
    image: '',
    imageAlt: '',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'samshah3009',
    createdAt: '2022-01-10',
    updatedAt: formatDate(),
  },
  {
    _id: uuidv4(),
    content:
      "📚 Recently finished [Book Title] and I'm still in awe. The characters, the plot twists – everything was on point. If you're looking for your next captivating read, I highly recommend it! 📖🤓 #BookRecommendations #ReadingCommunity",
    image: '',
    imageAlt: '',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'khushishah119',
    createdAt: '2022-04-10',
    updatedAt: formatDate(),
  },
  {
    _id: uuidv4(),
    content:
      'AI: a game-changer reshaping industries and enhancing lives. From self-driving cars to personalized recommendations, its power is limitless. We stand at the forefront of an exciting era, witnessing the remarkable possibilities of artificial intelligence. 🚀',
    image:
      'https://res.cloudinary.com/dogvmq3s7/image/upload/v1688301062/iShare/qwn1gy3gsymkpqwdcmmt.jpg',
    imageAlt: 'ai-image',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'adarshbalika',
    createdAt: '2022-05-10',
    updatedAt: formatDate(),
  },
  {
    _id: uuidv4(),
    content:
     "🏋️‍♀️ Finding it tough to stay productive lately? I've rounded up my top 5 personal productivity hacks that have been a game-changer for me. Say goodbye to procrastination! 💪⏰ #ProductivityHacks #SelfImprovement",
    image:
      'https://res.cloudinary.com/dogvmq3s7/image/upload/v1688279073/hyteowy806inzbz0nohc.jpg',
    imageAlt: 'road-trip',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'shahsoham',
    createdAt: '2021-02-10',
    updatedAt: formatDate(),
  },
  {
    _id: uuidv4(),
    content:
      "For those wondering how to write, start to write. And think. Watch how you think. Watch how things are. Connect the dots and you will get a point of view to share. Don't try to impress, try to present - put forward things.",
    image: '',
    imageAlt: '',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'adarshbalika',
    createdAt: '2022-11-10',
    updatedAt: formatDate(),
  },
  {
    _id: uuidv4(),
    content:
     "🎶Currently obsessed with these tunes! Here's my curated playlist for you. Let the music take you on a journey. 🎵🎧 #MusicLovers #Playlist",
    image:
      'https://res.cloudinary.com/dogvmq3s7/image/upload/v1686580986/gttovlzh4fee8txsvdeh.jpg',
    imageAlt: 'cld-sample',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: 'dhruvigandhi254',
    createdAt: '2023-06-10',
    updatedAt: formatDate(),
  },
];
