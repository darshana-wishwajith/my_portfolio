// import {businesses} from './../assets'

// const Business = ({id}) => {
//     const businessObj = businesses[id]
//     return(
//         <div className='bg-gradient-to-r from-gradientbg-left to-gradientbg-right rounded-[10px] border border-stroke px-5'>
//             {/* Content */}
//             <h4 className='!text-[25px] font-semibold text-center py-10'>{businessObj.bname}</h4>

//             <div>
//                 <div className='lg:flex flex-col lg:flex-row gap-5 space-y-5'>
//                     {/* Logo & designations */}
//                     <div className='bg-sectionbg rounded-[10px] p-5'>
//                         <div className='flex justify-center items-center'><img src={businessObj.logo} alt={'Business logo'} className='lg:w-[500px] w-[100px]'/></div>
//                         <div>
//                             <ul className='py-5'>
//                                 {businessObj.designations.map((items) => {
//                                 return <li key={items} className='!text-[10px] text-center text-font-light'>{items}</li>
//                                 })}
//                             </ul>
//                         </div>
//                     </div>
//                     {/* Details */}
//                     <div className='bg-sectionbg rounded-[10px] p-5'>
//                         <h5 className='underline py-3'>{businessObj.about}</h5> 
//                         <small className='!text-[10px] text-font-light'>{businessObj.date}</small>
//                         <p className='py-5'>{businessObj.desc}</p> 
//                         <small className='py-3 !text-[10px] text-font-light'>{businessObj.email}</small>
//                         <div className='text-priamry flex justify-between pt-3'>
//                             <a href="#" className='flex justify-between items-center gap-3 underline'>Facebook Link <img src={businessObj.linkIcon} alt="upIcon" className='w-[10px] h-[10px]'/></a>
//                             <a href="https://www.premifylk.com" target='_blank' className='flex justify-between items-center gap-3 underline'>Website Link <img src={businessObj.linkIcon} alt="upIcon" className='w-[10px] h-[10px]'/></a>
//                         </div> 
//                     </div>
//                 </div>
            
//                 {/* Cover Image */}
//                 <div className='bg-sectionbg rounded-[10px] my-5'>
//                     <img src={businessObj.cover} alt="cover.png" />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Business


// Business.jsx
import { motion } from "framer-motion";
import { businesses } from "./../assets";

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const Business = ({ id }) => {
  const businessObj = businesses[id];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="relative rounded-[10px] border border-stroke px-5 bg-gradient-to-r from-gradientbg-left to-gradientbg-right"
      animate={{
        boxShadow: [
          "0px 0px 0px rgba(64,113,197,0.00)",
          "0px 12px 48px rgba(64,113,197,0.25)",
          "0px 0px 0px rgba(64,113,197,0.00)",
        ],
      }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ boxShadow: "0px 16px 64px rgba(64,113,197,0.35)" }}
    >
      <h4 className="!text-[25px] font-semibold text-center py-10">
        {businessObj.bname}
      </h4>

      <div>
        <div className="lg:flex flex-col lg:flex-row gap-5 space-y-5">
          <motion.div variants={item} className="bg-sectionbg rounded-[10px] p-5">
            <div className="flex justify-center items-center">
              <img src={businessObj.logo} alt="Business logo" className="lg:w-[500px] w-[100px]" />
            </div>
            <ul className="py-5">
              {businessObj.designations.map((d) => (
                <li key={d} className="!text-[10px] text-center text-font-light">
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item} className="bg-sectionbg rounded-[10px] p-5">
            <h5 className="underline py-3">{businessObj.about}</h5>
            <small className="!text-[10px] text-font-light">{businessObj.date}</small>
            <p className="py-5">{businessObj.desc}</p>
            <small className="py-3 !text-[10px] text-font-light">{businessObj.email}</small>
            <div className="text-priamry flex justify-between pt-3">
              <a href="#" className="flex items-center gap-3 underline">
                Facebook Link <img src={businessObj.linkIcon} alt="upIcon" className="w-[10px] h-[10px]" />
              </a>
              <a
                href="https://www.premifylk.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 underline"
              >
                Website Link <img src={businessObj.linkIcon} alt="upIcon" className="w-[10px] h-[10px]" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div variants={item} className="bg-sectionbg rounded-[10px] my-5">
          <img src={businessObj.cover} alt="cover.png" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Business;


