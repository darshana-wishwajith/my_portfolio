// import TechIcon from "./TechIcon"
// import { upicon } from "../assets"

// const ProjectCard = ({project}) => {
//     return (
//         <div className="bg-gradient-to-r from-gradientbg-left to-gradientbg-right rounded-[10px] border border-stroke p-5">
//             <div className="bg-gradient-to-br from-[#000319] to-priamry/25 rounded-[10px] border border-stroke p-5"><img src={project.img} alt={project.img} /></div>
//             <h3 className="!text-[20px] font-bold py-5">{project.name}</h3>
//             <p className="text-font-light pb-5 !text-[12px]">{project.desc}</p>
//             <hr className="border-stroke my-5"/>
//             <div className="flex flex-col lg:flex-row justify-between items-center py-5 gap-5 lg:gap-0">
//                 <div className="flex gap-2">
//                 {project.icons.map((icon) => {
//                     return <TechIcon key={icon} icon={icon}/>
//                 })}
//                 </div>

//                 <a href={project.githubLink} className="text-priamry underline flex items-center gap-2" target="_black">GitHub Link <img src={upicon} alt={upicon} className="w-[10px]"/></a>
//             </div>
//         </div>
//     )
// }

// export default ProjectCard


import { motion } from "framer-motion";
import TechIcon from "./TechIcon";
import { upicon } from "../assets";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-gradient-to-r from-gradientbg-left to-gradientbg-right rounded-[10px] border border-stroke p-5"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 12px 40px rgba(64,113,197,0.25)",
      }}
    >
      <div className="bg-gradient-to-br from-[#000319] to-priamry/25 rounded-[10px] border border-stroke p-5">
        <img src={project.img} alt={project.img} />
      </div>

      <h3 className="!text-[20px] font-bold py-5">{project.name}</h3>

      <p className="text-font-light pb-5 !text-[12px]">{project.desc}</p>

      <hr className="border-stroke my-5" />

      <div className="flex flex-col lg:flex-row justify-between items-center py-5 gap-5 lg:gap-0">
        <div className="flex gap-2">
          {project.icons.map((icon) => (
            <TechIcon key={icon} icon={icon} />
          ))}
        </div>

        <a
          href={project.githubLink}
          className="text-priamry underline flex items-center gap-2"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Link <img src={upicon} alt={upicon} className="w-[10px]" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
