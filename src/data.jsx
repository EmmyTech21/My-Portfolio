import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'public/Project-1.png',
    url: 'https://visionary-concha-85a5e2.netlify.app/',
    github: 'https://github.com/EmmyTech21/Comfy-store.git',
    title: 'E-commerce app',
    text: "E-commerce web application built using React.It allows users to browse and purchase products online.Key features include product listings, shopping cart functionality,Users can view product categories, search for items, and add them to their cart.The shopping cart keeps track of selected items.User authentication ensures a personalized experience.",
  },
  {
    id: nanoid(),
    img: 'public/project-2.png',
    url: 'https://strong-cendol-0ff0c8.netlify.app/',
    github: 'https://github.com/EmmyTech21/Mix-master-drink.git',
    title: 'Mix-Maxter Drink',
    text: " the ultimate party sidekick app that fetches cocktails from the hilarious Cocktails DB API. With a flick of your finger, you'll unlock a treasure trove of enchanting drink recipes that'll make your taste buds dance and your friends jump with joy. Get ready to shake up your mixology game, one fantastical mocktail at a time, and let the laughter and giggles flow!.",
  },
  {
    id: nanoid(),
    img: 'public/project-3.png',
    url: 'https://teal-tapioca-930ab7.netlify.app',
    github: 'https://github.com/EmmyTech21/travel-list.git',
    title: 'Travel_list',
    text: "Welcome to Far Away Travel List! This app allows users to create a list of items they need for a trip, mark items as packed, and view helpful stats about their packing progress. Here are some key features",
  },
  {
    id: nanoid(),
    img: 'public/project-4.png',
    url: 'https://incandescent-gecko-fede40.netlify.app/',
    github: 'https://github.com/EmmyTech21/popcorn-movie.git',
    title: 'Movie Popcorn',
    text: "usePopcorn is a React application that empowers users to explore movies, rate them, and manage their watched movies list. Let’s dive into the details:",
  },
];
