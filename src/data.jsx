// Import React Icons and other dependencies.
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

// Import the images.
import Work1 from './images/project-1.png';
import Work2 from './images/project-2.png';
import Work3 from './images/project-3.png';

// Export the links array.
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
    icon: <FaFolderOpen className='nav_icon'/>,
    path: '/projects',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav_icon' />,
    path: '/contact',
  },
];

// Export the resume array.
export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 ',
    title: 'Software developer <span> Younglings africa </span>',
    desc: 'Designs and builds computer programs that power mobile devices and desktop computers.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2017 - 2019',
    title: 'Front-End Developer <span> Playlogix </span>',
    desc: 'Building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2014 - 2015',
    title: 'Junior Front-End developer <span> Cheil South africa </span>',
    desc: 'Developing new user-facing features, determining the structure and design of web pages.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Software Development Learnership <span> CapaCiti </span>',
    desc: 'Create a simple full-stack web application using AWS Amplify, a set of tools and services including a web hosting. ',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022',
    title: 'Web Development <span> Udemy </span>',
    desc: 'Project-based learning experience and work on real-world web applications and sites.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2013',
    title: 'Diploma Systems and Web Development <span> Majuba FET </span>',
    desc: 'Creating, building, and maintaining websites and web applications that run online on a browser.',
  },
];

// Export the skills array.
export const skills = [
  {
    id: 1,
    title: 'React',
    percentage: '85',
  },

  {
    id: 2,
    title: 'Html',
    percentage: '90',
  },

  {
    id: 3,
    title: 'Javascript',
    percentage: '79',
  },

  {
    id: 4,
    title: 'Css',
    percentage: '90',
  },

  {
    id: 5,
    title: 'Python',
    percentage: '30',
  },

  {
    id: 6,
    title: 'Figma',
    percentage: '65',
  },

  {
    id: 7,
    title: 'Balsamiq',
    percentage: '65',
  },

  {
    id: 8,
    title: 'AWS',
    percentage: '65',
  },
];

export const project = [
  {
    id: 1,
    img: Work1,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Live Website',
      },
      {
        icon: <FiUser />,
        title: 'Company : ',
        desc: 'Inkazimolo Shipping',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, CSS & JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://www.inkazimoloshipping.co.za" target="_blank">https://www.inkazimoloshipping.co.za</a>,
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Ongoing Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Company : ',
        desc: 'Kgoshi Holdings',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, CSS & JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://nelisiwe.github.io/Kgoshi-holdings" target="_blank">https://nelisiwe.github.io/Kgoshi-holdings</a>,
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Ongoing Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'JustB : ',
        desc: 'Makeup Studio',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, CSS & JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://nelisiwe.github.io/JustB" target="_blank" >https://nelisiwe.github.io/JustB</a>,
      },
    ],
  },
];

