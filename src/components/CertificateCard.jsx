const CertificateCard = ({certificate}) => {
    return(
        <div className="bg-sectionbg p-5 rounded-[10px] !min-w-[300px]">
            <div className="bg-gradient-to-r from-gradientbg-left to-gradientbg-right rounded-[10px] p-3">
                <img src={certificate.image} alt="certificate" className="!w-[500px]"/>
            </div>

            <div className="flex flex-col justify-between">
                <p className="!text-[15px] font-semibold">{certificate.text}</p>
                <small className="!text-[10px] text-font-light mt-10">{certificate.web}</small>
            </div>

        </div>
    )
}

export default CertificateCard