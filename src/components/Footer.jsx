import React from 'react'
import Logo from './Logo'
import {socialIconsLight} from './../assets'
import {footerGroups} from './../assets'
import { NavLink } from 'react-router-dom'
import PrimaryBtn from './PrimaryBtn'
import BGCircle from './BGCircle'

const Footer = () => {
    return(
        <>  
            <footer className='bg-[#4071C5]/10 rounded-[10px] my-10'>
                {/* First row */}
                <div className='px-[100px] flex justify-between items-center py-3'>
                    <div>
                        <Logo color='white'/>
                    </div>

                    <div className='flex gap-3 justify-center items-center'>
                        {socialIconsLight.map((icon) => {
                            return(
                                <div key={icon.id} className='bg-white/10 rounded-full p-2 my-1'>
                                    <img src={icon.ico} alt={icon.str} className='w-[20px]'/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr className="border-t border-white/10" />

                {/* Second row */}
                <div className='px-[100px] flex gap-5 py-3 columns-6'>
                    
                    {/* Footer nav link */}
                    <div className='grid grid-cols-3 col-span-5'>
                        {footerGroups.map((group) => {
                            return <ul key={group.title}>
                                {group.items.map((item) => {
                                    return (<li key={item.label} className='py-2'>
                                        <NavLink
                                            to={item.href}
                                            className={'hover:underline underline-offset-4 hover:text-priamry'}
                                        >{item.label}</NavLink>
                                    </li>)
                                }
                                    
                                )}
                            </ul>
                        })}
                    </div>
                    
                    {/* Subscribe to newsletter */}
                    <div className='grid grid-cols-1'>
                        <div className='flex flex-col justify-center items-start gap-10 col-span-2'>
                        <h3 className='!text-2xl font-semibold'>Subscribe to Newsletter</h3>
                        <div className='flex gap-5 bg-gradient-to-r from-[#D9D9D9]/10 to-[#737373]/10 ps-8 rounded-[50px] border border-white/25 pe-1 py-1'>
                            <input type="email" id="subscribeEmail" className='focus:outline-0 placeholder:text-[#999999]' placeholder='Email Address....'/>
                            <PrimaryBtn text="Subscribe"/>
                        </div>
                    </div>
                    </div>
                   

                </div>
                <hr className="border-t border-white/10" />

                {/* Third row - Copywrite Statement */}
                <div className='px-[100px] py-3'>
                    <p className='!text-[10px] text-[#BCBCBC]/50 text-center'>Copyright &copy;  2025 | All Rights Reserved | darshanaw.dev</p>
                </div>
            </footer>
            
        </>
    )
}

export default Footer