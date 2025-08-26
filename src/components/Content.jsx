import SecondaryBtn from "./SecondaryBtn"
import { NavLink } from "react-router-dom"
import GradientHeading from "./GradientHeading"
import BGCircle from "./BGCircle"
import InterestCard from './InterestCard'
import { certificates, interests } from "../assets"
import Business from "./Business"
import { filterBtns } from "../assets"
import { useState } from "react"
import CertificateCard from "./CertificateCard"
import { projects } from "../assets"
import ProjectCard from "./ProjectCard"
import Input from './Input'
import PrimaryBtn from './PrimaryBtn'
import {emojies} from './../assets'
import EduTimeline from "./EduTimeline"
import { education } from "../../src/assets";
import SkillsBoard from './SkillsBoard'

const Content = () => {

    // Stateful variables
    const [activeFilter, setActiveFilter] = useState(filterBtns[0])
    const [liked, setLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(100);

    return(
        <>
            {/* Hero Section */}
            <section className="grid md:grid-cols-3 justify-center items-center min-h-[80dvh] text-center md:text-start">

                <div className="md:col-span-1 md:flex hidden">
                    <img src="./../../public/assets/hero.png" alt="hero.png" className="w-fit h-fit"/>
                </div>

                <div className="col-span-2">
                    <h4 className="!text-[20px]">Hi 👋 I’m <span className="font-semibold !text-[20px]">Darshana Wishwajith</span></h4>

                    <GradientHeading heading='Full-Stack Software Engineer |' type='h1'/>

                    <h4 className="!text-[20px] py-3">Based on Sri Lanka</h4>

                    <p>I am a passionate software Developer crafting clean, functional, and visually engaging web experiences. My focus is on building fast, accessible, and scalable applications that merge thoughtful design with robust code. Every project is an opportunity to solve problems with creativity and precision, turning ideas into impactful digital solutions.</p>

                    <div className="flex gap-3 py-5 justify-center md:justify-start">
                        <NavLink to={'#aboutMe'}>
                            <SecondaryBtn text='Explore Me'/>
                        </NavLink>

                        <NavLink to={'#downloadCV'}>
                            <SecondaryBtn text='Download CV'/>
                        </NavLink>
                        
                        <NavLink to={'#contactMe'}>
                            <SecondaryBtn text='Hire Me'/>
                        </NavLink>
                    </div>

                </div>

            </section>

            <hr className="border-stroke"/>

            {/* About Section */}
            <section className="pt-10 pb-5">
                <GradientHeading type="h2" heading="Who Am I" />
                <div className="grid grid-cols-7">
                    {/* Personal Statement */}
                    <BGCircle side='right'  />
                    <div className="col-span-4">

                        <p className="py-5">Passionate and driven IT & Software Engineering enthusiast with a strong interest in web design, web development, software development, graphic design, robotics, and electronics. Currently pursuing a BICT(Hons) at Rajarata University of Sri Lanka, gaining extensive knowledge and skills in these fields. Aspiring to become a proficient full-stack software engineer, committed to continuous learning and professional growth.</p>

                        <h3 className="!text-[25px] text-white font-bold py-6">My Interests</h3>

                        <div className="grid grid-cols-3 grid-rows-2 gap-10">
                            {interests.map((interest) => {
                                return <InterestCard key={interest.id} name={interest.name}/>
                            })}
                        </div>
                        
                    </div>
                    <BGCircle side='left' />
                    {/* Educational Background Timeline */}
                    <div className="col-span-3 border-s border-s-stroke ms-10 ps-10">
                        <h3 className="!text-[25px] text-white font-bold py-6">Educational Background</h3>
                        {education.map((details) => <EduTimeline details={details}/>)}
                    </div>
                </div>
                
                {/* Entrepreneurship */}
                <div className="mb-10">
                    <BGCircle side='right'  />
                    <h3 className="!text-[25px] text-white font-bold py-6">Entrepreneurship</h3>
                    <div className="flex gap-5">
                        <Business id={0} />
                        <Business id={1} />
                    </div>
                </div>
            </section>

            <hr className="border-stroke my-10"/>

            {/* Skills section */}
            <section>
                <BGCircle side='left' />
                <GradientHeading heading={'My Skills'} type='h2' />

                <h3 className="!text-[25px] text-white font-bold py-6">Tools & Technologies</h3>

                {/* <div className="flex gap-3">
                    {filterBtns.map((filter) => {
                        return <SecondaryBtn text={filter} key={filter} active={activeFilter === filter} onClick={() => setActiveFilter(filter)}/>
                    })}
                </div>
                <div className="grid grid-cols-[15] grid-rows-6">
                    
                </div> */}

                <div className="flex justify-center items-center">
                    <SkillsBoard />
                </div>
                
                <h3 className="!text-[25px] text-white font-bold py-6">Certifications</h3>
                <BGCircle side='right'  />

                <div className="flex gap-5 overflow-x-auto">
                   {certificates.map((certificate) => {
                    return <CertificateCard certificate={certificate} key={certificate.id}/>
                   })}
                </div>          
            </section>

            <hr className="border-stroke my-10"/>
            
            {/* Featured Projects */}
            <section>
                <GradientHeading type="h2" heading="Featured Projects"/>
                <BGCircle side='left' />
                <div className="grid grid-cols-2 grid-rows-2 gap-5 mt-10">
                   {projects.map((project) => {
                    return <ProjectCard key={project.id} project={project}/>
                   })}
                </div>
                <div className="flex justify-center items-center my-10">
                    <SecondaryBtn text={"View More"}/>
                    <BGCircle side='right' />
                </div>
                
            </section>   

            <hr className="border-stroke my-10"/>  

            {/* Contact Section */}
            <section>
                <GradientHeading type="h2" heading="Get in touch with me"/>
                <BGCircle side='left' />
                <div className="grid grid-cols-3 gap-5 mt-10">
                   <div className="col-span-2 bg-gradient-to-r from-gradientbg-left to-gradientbg-right rounded-[10px] border border-stroke p-10 space-y-8">

                   <div className="flex gap-6">
                        <Input id='fname' name='First Name' type='text' textarea={false} placeholder='John'/>
                        <Input id='lname' name='Last Name' type='text' textarea={false} placeholder='Doe'/>
                   </div>
                   <div>
                        <Input id='email' name='Email Address' type='email' textarea={false} placeholder='john@example.com'/>
                   </div>

                   <div>
                        <Input id='subject' name='Subject' type='text' textarea={false} placeholder='Test'/>
                   </div>

                   <div>
                        <Input id='message' name='Message' type='text' textarea={true}/>
                   </div>

                   <div>
                    <PrimaryBtn text="Submit"/>
                   </div>

                </div>
                   <div className="col-span-1 flex justify-center items-center">
                        <div className="bg-sectionbg border border-stroke rounded-[10px] p-5 relative">
                            <h5 className="!text-[20px] font-semibold py-5">Love & Support</h5>
                            <small className="!text-[12px] text-font-light">If You like to my portfolio, you give me a hart reaction</small>
                            <div className="flex flex-col justify-center items-center">
                                <img src={emojies.ReadHeart} alt={emojies.ReadHeart} className="absolute w-25 top-35 left-3"/>
                                <span className="!text-[75px] font-bold text-myred">{likeCount}</span>
                                <img src={emojies.SMFace} alt={emojies.SMFace} className="absolute w-15 right-10"/>
                                <img src={emojies.ThumbsUP} alt={emojies.ThumbsUP} className="absolute w-12 top-68 left-18"/>
                                <p className="!text-[20px]">Supporters</p>
                            </div>
                            <div className="flex justify-center my-5">
                                <div className="rounded-[10px] border border-myred bg-myred/10 !text-[20px] text-center text-myred w-fit py-3 px-6 font-bold flex justify-center items-center gap-5 cursor-pointer" onClick={() => {setLiked((prev) => !prev); setLikeCount(prevCount => !liked ? prevCount + 1: prevCount || liked ? prevCount -1 : prevCount )}}><img src={!liked ? emojies.LineHeartEmpty : emojies.LineHeartFill} alt={!liked ? emojies.LineHeartEmpty : emojies.LineHeartFill} className="w-10"/>{!liked ?'LIKE': 'LIKED'}</div>
                            </div>
                        </div>
                   </div>
                </div>
            </section>
        </>
    )
}

export default Content