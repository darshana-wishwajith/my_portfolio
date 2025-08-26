// const CertificateCard = ({certificate}) => {
//     return(
//         <div className="bg-sectionbg p-5 rounded-[10px] !min-w-[300px]">
//             <div className="bg-gradient-to-r from-gradientbg-left to-gradientbg-right rounded-[10px] p-3">
//                 <img src={certificate.image} alt="certificate" className="!w-[500px]"/>
//             </div>

//             <div className="flex flex-col justify-between">
//                 <p className="!text-[15px] font-semibold">{certificate.text}</p>
//                 <small className="!text-[10px] text-font-light mt-10">{certificate.web}</small>
//             </div>

//         </div>
//     )
// }

// export default CertificateCard


import { motion } from "framer-motion";

const CertificateCard = ({ certificate }) => {
  return (
    <motion.div
      className="bg-sectionbg p-5 rounded-[10px] !min-w-[300px] snap-start"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="bg-gradient-to-r from-gradientbg-left to-gradientbg-right rounded-[10px] p-3">
        <img src={certificate.image} alt="certificate" className="!w-[500px]" />
      </div>

      <div className="flex flex-col justify-between">
        <p className="!text-[15px] font-semibold">{certificate.text}</p>
        <small className="!text-[10px] text-font-light mt-10">{certificate.web}</small>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
