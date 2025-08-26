const InterestCard = (props) => {
    return(

    <div className="flex justify-center items-center rounded-[10px] bg-interest-bg md:w-[150px] md:h-[150px] w-[180x] h-[180px] text-center border border-stroke shadow shadow-black ">
        <p className="!text-[15px] font-semibold bg-gradient-to-r from-priamry to-priamry/50 text-transparent bg-clip-text">{props.name}</p>
    </div>

    )
}

export default InterestCard