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

