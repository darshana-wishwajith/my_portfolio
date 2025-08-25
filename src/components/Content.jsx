import SecondaryBtn from "./SecondaryBtn"
import { NavLink } from "react-router-dom"
import GradientHeading from "./GradientHeading"
import BGCircle from "./BGCircle"
import InterestCard from './InterestCard'
import { interests } from "../assets"
import Business from "./Business"

const Content = () => {
    return(
        <>
            {/* Hero Section */}
            <section className="grid grid-cols-3 justify-center items-center min-h-[80dvh]">

                <div className="col-span-1">
                    <img src="./../../public/assets/hero.png" alt="hero.png" className="w-fit h-fit"/>
                </div>

                <div className="col-span-2">
                    <h4 className="!text-[20px]">Hi 👋 I’m <span className="font-semibold !text-[20px]">Darshana Wishwajith</span></h4>

                    <GradientHeading heading='Full-Stack Software Engineers |' type='h1'/>

                    <h4 className="!text-[20px] py-3">Based on Sri Lanka</h4>

                    <p>I am a passionate software Developer crafting clean, functional, and visually engaging web experiences. My focus is on building fast, accessible, and scalable applications that merge thoughtful design with robust code. Every project is an opportunity to solve problems with creativity and precision, turning ideas into impactful digital solutions.</p>

                    <div className="flex gap-3 py-5">
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
            <section className="py-10">
                <GradientHeading type="h2" heading="Who Am I" />
                <div className="grid grid-cols-7">
                    <BGCircle side='right' className='-z-10' />
                    
                    {/* Personal Statement */}
                    <div className="col-span-4">

                        <p className="py-5">Passionate and driven IT & Software Engineering enthusiast with a strong interest in web design, web development, software development, graphic design, robotics, and electronics. Currently pursuing a BICT(Hons) at Rajarata University of Sri Lanka, gaining extensive knowledge and skills in these fields. Aspiring to become a proficient full-stack software engineer, committed to continuous learning and professional growth.</p>

                        <h3 className="!text-[25px] text-white font-bold py-6">My Interests</h3>

                        <div className="grid grid-cols-3 grid-rows-3 gap-10">
                            {interests.map((interest) => {
                                return <InterestCard key={interest.id} name={interest.name}/>
                            })}
                        </div>
                        
                    </div>
                    {/* Educational Background Timeline */}
                    <div className="col-span-3 border-s border-s-stroke ms-10 ps-10">
                        <h3 className="!text-[25px] text-white font-bold py-6">Educational Background</h3>
                    </div>
                </div>
                
                <div>
                    <h3 className="!text-[25px] text-white font-bold py-6">Entrepreneurship</h3>
                    <Business id={0} />
                    <Business id={1} />
                </div>

                


                
            </section>

            <hr className="border-stroke"/>

        </>
    )
}

export default Content