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
import TypeWriter from './Typewriter'
import { motion } from "framer-motion";

const Content = () => {

    // Stateful variables
    const [activeFilter, setActiveFilter] = useState(filterBtns[0])
    const [liked, setLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(100);

    return(
        <>
            {/* Hero Section */}
            {/* <section className="grid md:grid-cols-3 justify-center items-center min-h-[80dvh] text-center md:text-start">

                <div className="md:col-span-1 md:flex hidden">
                    <img src="./../../public/assets/hero.png" alt="hero.png" className="w-fit h-fit"/>
                </div>

                <div className="col-span-2">
                    <h4 className="!text-[20px] flex gap-4">Hi <img src="./../public/assets/wave.gif" className="w-10 h-10"/> I’m <span className="font-semibold !text-[20px]">Darshana Wishwajith</span></h4>

                    <TypeWriter />

                    <h4 className="!text-[20px] py-3">Based on Sri Lanka</h4>

                    <p>I am a passionate software Developer crafting clean, functional, and visually engaging web experiences. My focus is on building fast, accessible, and scalable applications that merge thoughtful design with robust code. Every project is an opportunity to solve problems with creativity and precision, turning ideas into impactful digital solutions.</p>

                    <div className="flex gap-3 py-5 justify-center md:justify-start">
                        <a href={'#aboutMe'}>
                            <SecondaryBtn text='Explore Me'/>
                        </a>

                        <a href={'https://drive.google.com/file/d/1V9XwmRo_FbgDiKlPNb-klSo43jolStOr/view?usp=sharing'} target="_black" id="downloadCV">
                            <SecondaryBtn text='Download CV'/>
                        </a>
                        
                        <a href={'#contactMe'}>
                            <SecondaryBtn text='Hire Me'/>
                        </a>
                    </div>

                </div>

            </section> */}

            {/* Hero Section */}
            <BGCircle side='left' />
            <BGCircle side='right' />
            <section className="grid md:grid-cols-3 justify-center items-center min-h-[80dvh] text-center md:text-start overflow-hidden">

                {/* Left image */}
                <motion.div
                    className="md:col-span-1 md:flex hidden"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <img src="./../../public/assets/hero.png" alt="hero.png" className="w-fit h-fit" />
                </motion.div>

                {/* Right content */}
                <motion.div
                className="col-span-2"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                <h4 className="!text-[20px] flex gap-4">
                    Hi <img src="./../public/assets/wave.gif" className="w-10 h-10" /> I’m{" "}
                    <span className="font-semibold !text-[20px]">Darshana Wishwajith</span>
                </h4>

                <TypeWriter />

                <h4 className="!text-[20px] py-3">Based on Sri Lanka</h4>

                <p>
                    I am a passionate software Developer crafting clean, functional, and
                    visually engaging web experiences. My focus is on building fast,
                    accessible, and scalable applications that merge thoughtful design with
                    robust code. Every project is an opportunity to solve problems with
                    creativity and precision, turning ideas into impactful digital solutions.
                </p>

                <div className="flex gap-3 py-5 justify-center md:justify-start">
                    <a href={"#aboutMe"}>
                    <SecondaryBtn text="Explore Me" />
                    </a>

                    <a
                    href={
                        "https://drive.google.com/file/d/1V9XwmRo_FbgDiKlPNb-klSo43jolStOr/view?usp=sharing"
                    }
                    target="_blank"
                    rel="noreferrer"
                    id="downloadCV"
                    >
                    <SecondaryBtn text="Download CV" />
                    </a>

                    <a href={"#contactMe"}>
                    <SecondaryBtn text="Hire Me" />
                    </a>
                </div>
                </motion.div>
            </section>

            <hr className="border-stroke"/>

            {/* About Section */}
            <section className="pt-10 pb-5" id="aboutMe">
                <GradientHeading type="h2" heading="Who Am I" />
                <div className="grid grid-cols-7">
                    {/* Personal Statement */}
                    <BGCircle side='right'  />
                    <div className="col-span-7 md:col-span-4">

                        <p className="py-5">Passionate and driven IT & Software Engineering enthusiast with a strong interest in web design, web development, software development, graphic design, robotics, and electronics. Currently pursuing a BICT(Hons) at Rajarata University of Sri Lanka, gaining extensive knowledge and skills in these fields. Aspiring to become a proficient full-stack software engineer, committed to continuous learning and professional growth.</p>

                        <h3 className="!text-[25px] text-white font-bold py-6" id="myInterests">My Interests</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-10">
                            {interests.map((interest) => {
                                return <InterestCard key={interest.id} name={interest.name}/>
                            })}
                        </div>
                        
                    </div>
                    <BGCircle side='left' />
                    {/* Educational Background Timeline */}
                    <div className="col-span-7 md:col-span-3 md:border-s border-s-stroke md:ms-10 ps-10">
                        <h3 className="!text-[25px] text-white font-bold py-6" id="educationalBackground">Educational Background</h3>
                        {education.map((details) => <EduTimeline details={details}/>)}
                    </div>
                </div>
                
                {/* Entrepreneurship */}
                <div className="mb-10">
                    <BGCircle side='right'  />
                    <h3 className="!text-[25px] text-white font-bold py-6" id="entrepreneurship">Entrepreneurship</h3>
                    <div className="flex flex-col md:flex-row gap-5">
                        <Business id={0} />
                        <Business id={1} />
                    </div>
                </div>
            </section>

            <hr className="border-stroke my-10"/>

            {/* Skills section */}
            <section id="mySkills">
                <BGCircle side='left' />
                <GradientHeading heading={'My Skills'} type='h2' />

                <h3 className="!text-[25px] text-white font-bold py-10" id="ToolsTech">Tools & Technologies</h3>

                <div className="flex justify-center items-center">
                    <SkillsBoard />
                </div>
                
                <h3 className="!text-[25px] text-white font-bold py-10" id="Certifications">Certifications</h3>
                <BGCircle side='right'  />

                <div className="flex gap-5 overflow-x-auto pb-10">
                   {certificates.map((certificate) => {
                    return <CertificateCard certificate={certificate} key={certificate.id}/>
                   })}
                </div>          
            </section>

            <hr className="border-stroke my-10"/>
            
            {/* Featured Projects */}
            <section id="myProjects">
                <GradientHeading type="h2" heading="Featured Projects"/>
                <BGCircle side='left' />
                <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 md:gap-5  gap-y-5 mt-10">
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
            {/* <section id="contactMe">
                <GradientHeading type="h2" heading="Get in touch with me"/>
                <div className="grid grid-cols-3 gap-5 mt-10">
                   <div className="col-span-3 md:col-span-2 bg-gradient-to-r from-gradientbg-left to-gradientbg-right rounded-[10px] border border-stroke p-10 space-y-8 relative">


                   <div className="flex-col xl:flex-row flex gap-6">
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
                   <div className="col-span-3 md:col-span-1 flex justify-center items-center">
                        <div className="bg-sectionbg border border-stroke rounded-[10px] p-5 relative w-full">
                            <h5 className="!text-[20px] font-semibold py-5" id="LoveSupport">Love & Support</h5>
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
            </section> */}



            {/* Contact Section */}
            <section id="contactMe">
            <GradientHeading type="h2" heading="Get in touch with me" />
            <BGCircle side='left' />

            <motion.div
                className="grid grid-cols-3 gap-5 mt-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Form */}
                <motion.div
                className="col-span-3 md:col-span-2 bg-gradient-to-r from-gradientbg-left to-gradientbg-right rounded-[10px] border border-stroke p-10 space-y-8 relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                >
                <div className="flex-col xl:flex-row flex gap-6">
                    <Input id="fname" name="First Name" type="text" textarea={false} placeholder="John" />
                    <Input id="lname" name="Last Name" type="text" textarea={false} placeholder="Doe" />
                </div>

                <div>
                    <Input id="email" name="Email Address" type="email" textarea={false} placeholder="john@example.com" />
                </div>

                <div>
                    <Input id="subject" name="Subject" type="text" textarea={false} placeholder="Test" />
                </div>

                <div>
                    <Input id="message" name="Message" type="text" textarea={true} />
                </div>

                <div>
                    <PrimaryBtn text="Submit" />
                </div>
                </motion.div>

                {/* Love & Support */}
                <motion.div
                className="col-span-3 md:col-span-1 flex justify-center items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                <div className="bg-sectionbg border border-stroke rounded-[10px] p-5 relative w-full">
                    <BGCircle side='left' />
                    <h5 className="!text-[20px] font-semibold py-5" id="LoveSupport">
                    Love & Support
                    </h5>
                    <small className="!text-[12px] text-font-light">
                    If You like to my portfolio, you give me a hart reaction
                    </small>
                    <div className="flex flex-col justify-center items-center">
                    <img src={emojies.ReadHeart} alt={emojies.ReadHeart} className="absolute w-25 top-35 left-3" />
                    <span className="!text-[75px] font-bold text-myred">{likeCount}</span>
                    <img src={emojies.SMFace} alt={emojies.SMFace} className="absolute w-15 right-10" />
                    <img src={emojies.ThumbsUP} alt={emojies.ThumbsUP} className="absolute w-12 top-68 left-18" />
                    <p className="!text-[20px]">Supporters</p>
                    </div>
                    <div className="flex justify-center my-5">
                    <div
                        className="rounded-[10px] border border-myred bg-myred/10 !text-[20px] text-center text-myred w-fit py-3 px-6 font-bold flex justify-center items-center gap-5 cursor-pointer"
                        onClick={() => {
                        setLiked((prev) => !prev);
                        setLikeCount((prevCount) =>
                            !liked ? prevCount + 1 : prevCount || liked ? prevCount - 1 : prevCount
                        );
                        }}
                    >
                        <img
                        src={!liked ? emojies.LineHeartEmpty : emojies.LineHeartFill}
                        alt={!liked ? emojies.LineHeartEmpty : emojies.LineHeartFill}
                        className="w-10"
                        />
                        {!liked ? "LIKE" : "LIKED"}
                    </div>
                    </div>
                </div>
                </motion.div>
            </motion.div>
            </section>

        </>
    )
}

export default Content