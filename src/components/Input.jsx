const Input = (props) => {
    if(props.textarea){
        return(
            <div className="flex flex-col gap-3 w-full">
                <label htmlFor={props.id}>{props.name}<span className="text-myred">*</span></label>
                <textarea id={props.id} cols="30" rows="10" placeholder="Type your message here...." className="focus:outline-0 focus:ring focus:ring-priamry border rounded-[10px] py-2 px-6 border-priamry bg-sectionbg focus:text-priamry"></textarea>
            </div>
        )
    }
    else{
        return(
            <div className="flex flex-col gap-3 w-full">
                <label htmlFor={props.id}>{props.name}<span className="text-myred">*</span></label>
                <input type={props.type} id={props.id} placeholder={props.placeholder} className="focus:outline-0 focus:ring focus:ring-priamry border rounded-[10px] py-2 px-6 border-priamry bg-sectionbg focus:text-priamry"/>
            </div>
        )
    }
}

export default Input