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
    },

]

