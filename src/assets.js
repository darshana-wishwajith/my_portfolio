//images and icons

import GithubIconDark from './../src/../public/assets/github_icon_dark.png';
import LinkedinIconDark from './../src/../public/assets/linkedin_icon_dark.png';
import EmailIconDark from './../src/../public/assets/email_icon_dark.png';

import GithubIconLight from './../src/../public/assets/github_icon_light.png';
import LinkedinIconLight from './../src/../public/assets/linkedin_icon_light.png';
import EmailIconLight from './../src/../public/assets/email_icon_light.png';

export const socialIconsDark = [
    {id: 1, ico: GithubIconDark, str: 'GitHubDark Icon', link: 'https://github.com/darshana-wishwajith'},
    {id: 2, ico: LinkedinIconDark, str: 'LinkedInDark Icon', link: 'https://www.linkedin.com/in/darshana-wishwajith'},
    {id: 3, ico: EmailIconDark, str: 'EmailDark Icon', link:'mailto:darshanawishwajith494@gmail.com'},
];

export const socialIconsLight = [
    {id: 1, ico: GithubIconLight, str: 'GitHubLight Icon', link: 'https://github.com/darshana-wishwajith'},
    {id: 2, ico: LinkedinIconLight, str: 'LinkedInLight Icon', link: 'https://www.linkedin.com/in/darshana-wishwajith'},
    {id: 3, ico: EmailIconLight, str: 'EmailLight Icon', link:'mailto:darshanawishwajith494@gmail.com'},
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
            {label: 'Hire Me', href: '#contactMe'},
            {label: 'My Interests', href: '#myInterests'},
            {label: 'Educational Background', href: '#educationalBackground'},
            {label: 'Entrepreneurship', href: '#entrepreneurship'},
        ],
    },

    {
        title: 'extras',
        items: [
            {label: 'Tools & Tech.', href: '#ToolsTech'},
            {label: 'Certifications', href: '#Certifications'},
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

import PLKLogo from '/assets/plk_logo.png';
import PLKCover from '/assets/plk_cover.png';

import TLLogo from '/assets/tl_logo.png';
import TLCover from '/assets/tl_cover.png';

import upIcon from '/assets/up.png';

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

import Python from '/assets/hr_python.png';
import Javascript from '/assets/hr_js.png';
import CICD from '/assets/su_cicd.png';
import Arduino from '/assets/ii_arduino.png';
import Illustrator from '/assets/clk_illustrator.png';

export const certificates = [
    {id:0, image: Python, text: 'HackerRank Certified Python Programmer', web: 'hackerrank.com'},
    {id:1, image: Javascript, text: 'HackerRank Certified JavaScript Programmer', web: 'hackerrank.com'},
    {id:2, image: CICD, text: 'Certificate in CI/CD with hands-on experience', web: 'simplelearn.com'},
    {id:3, image: Arduino, text: 'Certificate in Arduino with hands-on experience', web: 'ii.lk'},
    {id:4, image: Illustrator, text: 'Certificate in Adobe Illustrator with hands-on experience', web: 'courses.lk'},
];

export const projects = [
    // Project 1
    {id:1, img: '/assets/weatherify.png', name: 'Weatherify', desc: 'Weatherify is a simple weather application built using HTML, CSS, and JavaScript. It utilizes the Tailwind CSS framework for styling and fetches weather data from the OpenWeather API.', githubLink: 'https://github.com/darshana-wishwajith/Weatherify', icons: ['/assets/html.png', '/assets/css.png', '/assets/js.png', '/assets/tailwind.png', '/assets/weather_api.png',]},

    // Project 2
    {id:2, img: '/assets/cc_gen.png', name: 'Credit Card Generator', desc: 'This simple web application can generate fake, virtual Visa and Master, Debit and Credit cards using you details instantly for you.', githubLink: 'https://github.com/darshana-wishwajith/credit_card_generator', icons: ['/assets/html.png', '/assets/css.png', '/assets/js.png', '/assets/bootstrap.png', '/assets/php.png', '/assets/mysql.png',]},

    // Project 3
    {id:3, img: '/assets/occ.png', name: 'Online Class Connector', desc: 'If you have classes with same zoom links, You don’t need find those links on WhatsApp again & again. Instead of that  you can save your class link with class name in this tool connect it easily.', githubLink: 'https://github.com/darshana-wishwajith/Online-Class-Connector', icons: ['/assets/python.png',]},

    // Project 4
    {id:4, img: '/assets/tl_pms.png', name: 'Project Management System', desc: 'Efficient, innovative project management system and website for Tefusion Labs. ️Collaborate, track tasks, optimize resources, and boost productivity!', githubLink: 'https://github.com/darshana-wishwajith/tefusion-labs-PMS', icons: ['/assets/html.png', '/assets/css.png', '/assets/js.png', '/assets/bootstrap.png', '/assets/php.png', '/assets/mysql.png',]},
];

import ThumbsUP from '/assets/thumbs_up.png';
import SMFace from '/assets/smiling_face.png';
import ReadHeart from '/assets/red_heart.png';
import LineHeartFill from '/assets/line_heart_fill.png';
import LineHeartEmpty from '/assets/line_heart_empty.png';

export const emojies = {
    ThumbsUP, SMFace, ReadHeart, LineHeartFill, LineHeartEmpty
};

export const education = [
  {
    period: "2024 - 2028",
    title: "BICT Hons UG",
    href: "#bict",
    place: "Rajarata University of Sri Lanka",
  },
  {
    period: "2023 - 2024",
    title: "Professional Dip. in Software Engineering",
    href: "#pdse",
    place: "Birmingham City University",
  },
  {
    period: "2020 - 2022",
    title: "G.C.E. Advanced Level | B2 C1 | Z 1.3751",
    href: "#al",
    place: "B Dharmapala National College Bandarawela",
  },
  {
    period: "2018 - 2019",
    title: "G.C.E. Ordinary Level | A6 B3",
    href: "#ol",
    place: "B Keppetipola National College",
  },
  {
    period: "2013",
    title: "Scholarship Examination | 163",
    href: "#scholarship",
    place: "B Kalabululanda Maha Vidyalaya",
  },
];

export const filterBtns = ['All Skills', 'Web Dev', 'Software Dev', 'UI/UX', 'Graphic Design'];

export const skills = [
  // row 1
  { name: "HTML", src: "/assets/html.png", tags: ["Web Dev"] },
  { name: "JavaScript", src: "/assets/js.png", tags: ["Web Dev"] },
  { name: "Tailwind", src: "/assets/tailwind.png", tags: ["Web Dev"] },
  { name: "TypeScript", src: "/assets/ts.png", tags: ["Web Dev", "Software Dev"] },
  { name: "Express.js", src: "/assets/express.png", tags: ["Web Dev"] },
  { name: "PHP", src: "/assets/php.png", tags: ["Web Dev"] },
  { name: "MongoDB", src: "/assets/mongodb.png", tags: ["Web Dev", "Software Dev"] },

  // row 2
  { name: "CSS", src: "/assets/css.png", tags: ["Web Dev"] },
  { name: "Bootstrap", src: "/assets/bootstrap.png", tags: ["Web Dev"] },
  { name: "React", src: "/assets/react.png", tags: ["Web Dev", "Software Dev"] },
  { name: "Next.js", src: "/assets/next.png", tags: ["Web Dev"] },
  { name: "Node.js", src: "/assets/node.png", tags: ["Web Dev", "Software Dev"] },
  { name: "MySQL", src: "/assets/mysql.png", tags: ["Web Dev", "Software Dev"] },

  // row 3
  { name: "Arduino", src: "/assets/arduino.png", tags: ["Software Dev"] },
  { name: "Git", src: "/assets/git.png", tags: ["Software Dev"] },
  { name: "Python", src: "/assets/python.png", tags: ["Software Dev"] },
  { name: "Java", src: "/assets/java.png", tags: ["Software Dev"] },
  { name: "Photoshop", src: "/assets/ps.png", tags: ["Graphic Design","UI/UX"] },
  { name: "Illustrator", src: "/assets/ai.png", tags: ["Graphic Design","UI/UX"] },
  { name: "Figma", src: "/assets/figma.png", tags: ["UI/UX"] },

  // row 4
  { name: "Linux", src: "/assets/linux.png", tags: ["Software Dev"] },
  { name: "AWS", src: "/assets/aws.png", tags: ["Software Dev"] },
  { name: "Google Cloud", src: "/assets/gc.png", tags: ["Software Dev"] },
  { name: "Azure", src: "/assets/azure.png", tags: ["Software Dev"] },
  { name: "Vercel", src: "/assets/vercel.png", tags: ["Web Dev", "Software Dev"] },
  { name: "Appwrite", src: "/assets/appwrite.png", tags: ["Software Dev","Web Dev"] },
];