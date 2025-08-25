const SecondaryBtn = (sbtn) => {
    
    if(!sbtn.active){
        return (
            <div className="text-white font-semibold bg-gradient-to-r from-gradientbg-left to-gradientbg-right px-5 py-1 rounded-[50px] border border-stroke shadow shadow-black !text-[10px] cursor-pointer" onClick={sbtn.onClick}>{sbtn.text}</div>
        )
    }
    else{
        return (
            <div className="text-white font-semibold bg-priamry px-5 py-1 rounded-[50px] border border-stroke shadow shadow-black !text-[10px] cursor-pointer" onClick={sbtn.onClick}>{sbtn.text}</div>
        )
    }
    
    
}

export default SecondaryBtn 