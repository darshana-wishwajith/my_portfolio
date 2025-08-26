import React from 'react'
import '../index.css'
import BGCircle from './BGCircle'
import PrimaryBtn from './PrimaryBtn'
import Logo from './Logo'
import { NavLink } from "react-router-dom"

const Header = () => {

    const navItems = [
        {item: 'About Me', href: '#aboutMe'},
        {item: 'My Skills', href: '#mySkills'},
        {item: 'My Projects', href: '#myProjects'},
        ];

    return(
        <>
            <header>
                {/* Gradient circle on background */}
                {/* <BGCircle side='left' className='-z-10'/> */}

                {/* Main navigation bar */}
                <nav className='justify-between items-center bg-gradient-to-r from-gradientbg-left to-gradientbg-right rounded-[50px] p-2.5 border border-stroke shadow shadow-black my-8 hidden md:flex'>

                    <Logo color="#4071C5"/>

                    <div className='flex gap-6'>
                        {navItems.map((navItem, index) => {
                            return <a href={navItem.href} key={index} className='hover:underline underline-offset-4 hover:text-priamry'>{navItem.item}</a>    
                        })}
                    </div>

                    <a href='#contactMe'>
                        <PrimaryBtn text='Contact Me'/>
                    </a>
                </nav>

                {/* Mobile Navigation  */}
                <nav className='justify-between items-center bg-gradient-to-r from-gradientbg-left to-gradientbg-right rounded-[50px] p-2.5 border border-stroke shadow shadow-black my-8 md:hidden flex'>
                        <Logo color="#4071C5"/>
                        <div className='px-5 py-2 cursor-pointer'><img src="./../public/assets/menu.png" className='w-8' alt="menu.png" /></div>
                </nav>

                {/* <aside className='w-full h-full bg-[#000319] absolute left-0 right-0 top-0 bottom-0'>
                    <p>darshan</p>
                </aside> */}

            </header>
        </>
    )
}

export default Header