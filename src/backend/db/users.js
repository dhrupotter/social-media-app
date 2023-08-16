/* eslint-disable import/no-extraneous-dependencies */
import { v4 as uuidv4 } from 'uuid';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuidv4(),
    firstName: 'Adarsh',
    lastName: 'Balika',
    username: 'adarshbalika',
    password: 'adarshBalika123',
    bio: 'Tech enthusiast. Innovations. Geek. 🤓',
    website: 'https://adarshbalika.netlify.app/',
    profileAvatar:
      'https://res.cloudinary.com/dogvmq3s7/image/upload/v1688277178/iShare/atbwnvlcabmkhqem1r2k.png',
    profileBackground:
      'https://res.cloudinary.com/dogvmq3s7/image/upload/v1688277340/iShare/qlexx8eovrlvvunpmbtt.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuidv4(),
    firstName: 'Dhruvi',
    lastName: 'Gandhi',
    username: 'dhruvigandhi254',
    password: 'dhruvigandhi254',
    profileAvatar: '',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuidv4(),
    firstName: 'Khushi',
    lastName: 'Shah',
    username: 'khushishah119',
    password: 'khushishah119',
    bio: ' Lover of words. Books. 📚',
    website: 'https://www.amazon.in/Books',
    profileAvatar:
      'https://res.cloudinary.com/dogvmq3s7/image/upload/v1686487408/samples/people/kitchen-bar.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuidv4(),
    firstName: 'Soham',
    lastName: 'Shah',
    username: 'shahsoham',
    password: 'shahsoham2625',
    bio: 'Fitness addict. Healthy lifestyle. 💪',
    website: 'https://www.healthline.com/',
    profileAvatar:
      'https://res.cloudinary.com/dogvmq3s7/image/upload/v1686487410/samples/people/smiling-man.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuidv4(),
    firstName: 'Samyak',
    lastName: 'Shah',
    username: 'samshah3009',
    password: 'samshah3009',
    bio: 'Wanderlust. Adventure seeker. ✈️',
    website: 'https://adventure.com/',
    profileAvatar:
      'https://res.cloudinary.com/dogvmq3s7/image/upload/v1686487412/samples/people/boy-snow-hoodie.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
