import React from 'react'

const BGCircle = ({side}) => {
    return(
        <>
            {side == 'left' ? <div className='w-80 h-80 bg-[#4071C5]/25 rounded-full blur-[100px] absolute left-0 top-0'></div> : <div className='w-80 h-80 bg-[#4071C5]/25 rounded-full blur-[100px] absolute right-0 top-0'></div>}
        </>
    )
}

export default BGCircle