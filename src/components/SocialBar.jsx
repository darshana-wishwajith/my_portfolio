import {socialIconsDark} from '../assets'

const SocialBar = () => {
    return (
        <>
            <nav className="flex flex-col justify-between items-center bg-gradient-to-r from-gradientbg-left to-gradientbg-right rounded-[50px] p-2.5 border border-stroke shadow shadow-black my-100 me-20 w-fit  right-0 fixed">
                {socialIconsDark.map((icon) => {
                    return(
                        <a href={icon.link} key={icon.id}>
                            <div key={icon.id} className='bg-white rounded-full p-2 my-1 cursor-pointer'> 
                            <img src={icon.ico} alt={icon.str} className='w-[20px]'/>
                            </div>
                        </a>
                    )
                })}
                
            </nav>
        </> 
    )
}

export default SocialBar