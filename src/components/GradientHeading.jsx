const GradientHeading = (props) => {

    return (
        props.type == 'h2' ? <h2 className="!text-[40px] font-extrabold bg-gradient-to-r from-priamry to-priamry/25 text-transparent bg-clip-text leading-20">{props.heading}</h2> : <h1 className="!text-[40px] lg:!text-[50px] font-extrabold bg-gradient-to-r from-priamry to-priamry/25 text-transparent bg-clip-text leading-20">{props.heading}</h1>
    )
}

export default GradientHeading