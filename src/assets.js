//images and icons

import GithubIconDark from './../src/../public/assets/github_icon_dark.png';
import LinkedinIconDark from './../src/../public/assets/linkedin_icon_dark.png';
import EmailIconDark from './../src/../public/assets/email_icon_dark.png';

import GithubIconLight from './../src/../public/assets/github_icon_light.png';
import LinkedinIconLight from './../src/../public/assets/linkedin_icon_light.png';
import EmailIconLight from './../src/../public/assets/email_icon_light.png';

export const socialIconsDark = [
    {id: 1, ico: GithubIconDark, str: 'GitHubDark Icon'},
    {id: 2, ico: LinkedinIconDark, str: 'LinkedInDark Icon'},
    {id: 3, ico: EmailIconDark, str: 'EmailDark Icon'},
];

export const socialIconsLight = [
    {id: 1, ico: GithubIconLight, str: 'GitHubLight Icon'},
    {id: 2, ico: LinkedinIconLight, str: 'LinkedInLight Icon'},
    {id: 3, ico: EmailIconLight, str: 'EmailLight Icon'},
];


//Footer Groups

export const footerGroups = [
    {
        title: 'Home',
        items: [
            {label: 'Home', href: '#'},
            {label: 'About Me', href: '#aboutMe'},
            {label: 'My Skills', href: '#mySkills'},
            {label: 'My Projects', href: '#myProjects'},
            {label: 'Contact Me', href: '#contactMe'},
        ],
    },

    {
        title: 'More',
        items: [
            {label: 'Download CV', href: '#downloadCV'},
            {label: 'Hire Me', href: '#hireMe'},
            {label: 'My Interests', href: '#myInterests'},
            {label: 'Educational Background', href: '#educationalBackground'},
            {label: 'Entrepreneurship', href: '#entrepreneurship'},
        ],
    },

    {
        title: 'extras',
        items: [
            {label: 'Tools & Tech.', href: '#ToolsTech'},
            {label: 'Certifications', href: '#ToolsTech'},
            {label: 'Love & Support', href: '#LoveSupport'},
        ]
    }
];

export const interests = [
    
    {id: 1, name: 'Web Design & Development'},
    {id: 2, name: 'Software Development'},
    {id: 3, name: 'UIUX Design'},
    {id: 4, name: 'Graphic Design & Video Editing'},
    {id: 5, name: 'Robotics'},
    {id: 6, name: 'Electronics'},
]

import PLKLogo from './../public/assets/plk_logo.png';
import PLKCover from './../public/assets/plk_cover.png';

import TLLogo from './../public/assets/tl_logo.png';
import TLCover from './../public/assets/tl_cover.png';

import upIcon from './../public/assets/up.png';

export const upicon = upIcon;

export const businesses = [
    {
        bname: 'Premify LK',
        logo: PLKLogo,
        designations: ['Founder & Owner', 'Creative Director', 'Marketing Manager', 'Customer Relationship & Social Media Manager'],
        about: 'A premium Software Subscriptions Selling Business.',
        date: 'Since 04 July 2024',
        desc: 'Premium tools for students, freelancers, & small businesses. Access ChatGPT, Grammarly, Adobe, Canva, and more at low prices. Monthly, 3/6 months, yearly plans.',
        email: 'Premifylk@gmail.com',
        fbpage: '',
        weblink: '',
        cover: PLKCover,
        linkIcon: upIcon,
    },

    {
        bname: 'Tefusion Labs',
        logo: TLLogo,
        designations: ['Founder & CEO', 'TechLead', 'Software Engineer', 'UI/UX Designer', 'Graphic Designer', 'Marketing Manager', 'Customer Relationship & Social Media Manager'],
        about: 'A Software Development & Digital Creation Startup.',
        date: 'Since 11 June 2024',
        desc: 'Tefusion Labs is a digital creation startup that provides services such as Web Design, Web Development, Software Development, UI/UX Design, Graphic Design.',
        email: 'tefusionlabs@gmail.com',
        fbpage: '',
        weblink: '',
        cover: TLCover,
        linkIcon: upIcon,
    },

]

export const filterBtns = ['All Skills', 'Web Dev', 'Software Dev', 'UI/UX', 'Graphic Design'];

import Python from './../public/assets/hr_python.png';
import Javascript from './../public/assets/hr_js.png';
import CICD from './../public/assets/su_cicd.png';
import Arduino from './../public/assets/ii_arduino.png';
import Illustrator from './../public/assets/clk_illustrator.png';

export const certificates = [
    {id:0, image: Python, text: 'HackerRank Certified Python Programmer', web: 'hackerrank.com'},
    {id:1, image: Javascript, text: 'HackerRank Certified JavaScript Programmer', web: 'hackerrank.com'},
    {id:2, image: CICD, text: 'Certificate in CI/CD with hands-on experience', web: 'simplelearn.com'},
    {id:3, image: Arduino, text: 'Certificate in Arduino with hands-on experience', web: 'ii.lk'},
    {id:4, image: Illustrator, text: 'Certificate in Adobe Illustrator with hands-on experience', web: 'courses.lk'},
];

export const projects = [
    // Project 1
    {id:1, img: './../public/assets/weatherify.png', name: 'Weatherify', desc: 'Weatherify is a simple weather application built using HTML, CSS, and JavaScript. It utilizes the Tailwind CSS framework for styling and fetches weather data from the OpenWeather API.', githubLink: '#', icons: ['./../public/assets/html.png', './../public/assets/css.png', './../public/assets/js.png', './../public/assets/tailwind.png', './../public/assets/weather_api.png',]},

    // Project 2
    {id:2, img: './../public/assets/cc_gen.png', name: 'Credit Card Generator', desc: 'This simple web application can generate fake, virtual Visa and Master, Debit and Credit cards using you details instantly for you.', githubLink: '#', icons: ['./../public/assets/html.png', './../public/assets/css.png', './../public/assets/js.png', './../public/assets/bootstrap.png', './../public/assets/php.png', './../public/assets/mysql.png',]},

    // Project 3
    {id:3, img: './../public/assets/occ.png', name: 'Online Class Connector', desc: 'If you have classes with same zoom links, You don’t need find those links on WhatsApp again & again. Instead of that  you can save your class link with class name in this tool connect it easily.', githubLink: '#', icons: ['./../public/assets/python.png',]},

    // Project 4
    {id:4, img: './../public/assets/tl_pms.png', name: 'Project Management System', desc: 'Efficient, innovative project management system and website for Tefusion Labs. ️Collaborate, track tasks, optimize resources, and boost productivity!', githubLink: '#', icons: ['./../public/assets/html.png', './../public/assets/css.png', './../public/assets/js.png', './../public/assets/bootstrap.png', './../public/assets/php.png', './../public/assets/mysql.png',]},
];
