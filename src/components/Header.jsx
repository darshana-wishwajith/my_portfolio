import React from 'react'
import '../index.css'
import BGCircle from './BGCircle'
import PrimaryBtn from './PrimaryBtn'
import Logo from './Logo'

const Header = () => {

    const navItems = ['About Me', 'My Skills', 'My Projects']

    return(
        <>
            <header>
                {/* Gradient circle on background */}
                <BGCircle side='left' className='-z-10'/>

                {/* Main navigation bar */}
                <nav className='flex justify-between items-center bg-gradient-to-r from-gradientbg-left to-gradientbg-right rounded-[50px] p-2.5 border border-stroke shadow shadow-black my-8'>

                    <Logo color="#4071C5"/>

                    <div className='md:flex hidden gap-6'>
                        {navItems.map((navItem, index) => {
                            return <a href='#' key={index} className='hover:underline underline-offset-4 hover:text-priamry'>{navItem}</a>    
                        })}
                    </div>

                    <PrimaryBtn text='Contact Me'/>
                </nav>

            </header>
        </>
    )
}

export default Header