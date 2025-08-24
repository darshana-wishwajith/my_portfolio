import {socialIconsDark} from '../assets'

const SocialBar = () => {
    return (
        <>
            <nav className="flex flex-col justify-between items-center bg-gradient-to-r from-[#444444]/10 to-[#AAAAAA]/10 rounded-[50px] p-2.5 border border-[#FFFFFF]/10 shadow shadow-black my-60 me-20 w-fit  right-0 fixed">
                {socialIconsDark.map((icon) => {
                    return(
                        <div key={icon.id} className='bg-white rounded-full p-2 my-1'> 
                            <img src={icon.ico} alt={icon.str} className='w-[20px]'/>
                        </div>
                    )
                })}
                
            </nav>
        </> 
    )
}

export default SocialBar