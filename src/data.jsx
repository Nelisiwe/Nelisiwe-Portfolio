import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
} from 'react-icons/fa';


export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav_icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'Education',
    icon: <FaUser className='nav_icon' />,
    path: '/education',
  },

  {
    id: 3,
    name: 'Projects',
    icon: <FaFolderOpen className='nav_icon' />,
    path: '/projects',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav_icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Steve',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Milner',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '27 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Tunisian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Tunis',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+21621184010',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'you@mail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: 'steve.milner',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'French, English',
  },
];

