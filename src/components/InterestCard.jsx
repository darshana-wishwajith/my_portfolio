const InterestCard = (props) => {
    return(

    <div className="flex justify-center items-center rounded-[10px] bg-interest-bg w-[150px] h-[150px] text-center border border-stroke shadow shadow-black ">
        <p className="!text-[15px] font-semibold bg-gradient-to-r from-priamry to-priamry/50 text-transparent bg-clip-text">{props.name}</p>
    </div>

    )
}

export default InterestCard