const TechIcon = ({icon}) => {
    return(
        <div className="bg-interest-bg w-12 h-12 rounded-full flex justify-center items-center">
            <img src={icon} alt={icon} className="w-8"/>
        </div>
    )
}

export default TechIcon