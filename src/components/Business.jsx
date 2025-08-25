import {businesses} from './../assets'

const Business = ({id}) => {
    const businessObj = businesses[id]
    return(
        <div className='bg-gradient-to-r from-gradientbg-left to-gradientbg-right rounded-[10px] border border-stroke px-5'>
            {/* Content */}
            <h4 className='!text-[25px] font-semibold text-center py-10'>{businessObj.bname}</h4>

            <div>
                <div className='flex gap-5'>
                    {/* Logo & designations */}
                    <div className='bg-sectionbg rounded-[10px] p-5'>
                        <img src={businessObj.logo} alt={'Business logo'} className='w-[500px]'/>
                        <div>
                            <ul className='py-5'>
                                {businessObj.designations.map((items) => {
                                return <li key={items} className='!text-[10px] text-center text-font-light'>{items}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                    {/* Details */}
                    <div className='bg-sectionbg rounded-[10px] p-5'>
                        <h5 className='underline py-3'>{businessObj.about}</h5> 
                        <small className='!text-[10px] text-font-light'>{businessObj.date}</small>
                        <p className='py-5'>{businessObj.desc}</p> 
                        <small className='py-3 !text-[10px] text-font-light'>{businessObj.email}</small>
                        <div className='text-priamry flex justify-between pt-3'>
                            <a href="#" className='flex justify-between items-center gap-3 underline'>Facebook Link <img src={businessObj.linkIcon} alt="upIcon" className='w-[10px] h-[10px]'/></a>
                            <a href="https://www.premifylk.com" target='_blank' className='flex justify-between items-center gap-3 underline'>Website Link <img src={businessObj.linkIcon} alt="upIcon" className='w-[10px] h-[10px]'/></a>
                        </div> 
                    </div>
                </div>
            
                {/* Cover Image */}
                <div className='bg-sectionbg rounded-[10px] my-5'>
                    <img src={businessObj.cover} alt="cover.png" />
                </div>
            </div>
        </div>
    )
}

export default Business