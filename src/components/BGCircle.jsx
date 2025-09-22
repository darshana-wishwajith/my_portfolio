const BGCircle = ({side}) => {
    return(
        <>
            {side == 'left' ? <div className='w-150 h-150 bg-[#4071C5]/10 rounded-full blur-[100px] absolute left-0 -z-100 overflow-hidden'></div> : <div className='w-150 h-150 bg-[#4071C5]/10 rounded-full blur-[100px] absolute right-0 -z-100 overflow-hidden'></div>}
        </>
    )
}

export default BGCircle