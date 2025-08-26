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
                <nav className='justify-between items-center bg-gradient-to-r from-gradientbg-left to-gradientbg-right rounded-[50px] p-2.5 border border-stroke shadow shadow-black my-8 flex'>

                    <Logo color="#4071C5"/>

                    <div className='hidden lg:flex gap-6'>
                        {navItems.map((navItem, index) => {
                            return <a href={navItem.href} key={index} className='hover:underline underline-offset-4 hover:text-priamry'>{navItem.item}</a>    
                        })}
                    </div>

                    <a href='#contactMe'>
                        <PrimaryBtn text='Contact Me'/>
                    </a>
                </nav>
            </header>
        </>
    )
}

export default Header