const PrimaryBtn = (pbtn) => {
    return (
        <div className="w-32 h-12 flex justify-center items-center rounded-[50px] border border-white text-black bg-white hover:bg-transparent hover:border hover:text-white font-semibold cursor-pointer transition ease-in-out">{pbtn.text}</div>
    )
}

export default PrimaryBtn   