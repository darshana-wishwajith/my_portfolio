import TechIcon from "./TechIcon"
import { upicon } from "../assets"

const ProjectCard = ({project}) => {
    return (
        <div className="bg-gradient-to-r from-gradientbg-left to-gradientbg-right rounded-[10px] border border-stroke p-5">
            <div className="bg-gradient-to-br from-[#000319] to-priamry/25 rounded-[10px] border border-stroke p-5"><img src={project.img} alt={project.img} /></div>
            <h3 className="!text-[20px] font-bold py-5">{project.name}</h3>
            <p className="text-font-light pb-5 !text-[12px]">{project.desc}</p>
            <hr className="border-stroke my-5"/>
            <div className="flex justify-between items-center py-5">
                <div className="flex gap-2">
                {project.icons.map((icon) => {
                    return <TechIcon key={icon} icon={icon}/>
                })}
                </div>

                <a href={project.githubLink} className="text-priamry underline flex items-center gap-2">GitHub Link <img src={upicon} alt={upicon} className="w-[10px]"/></a>
            </div>
        </div>
    )
}

export default ProjectCard