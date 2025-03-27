import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

function Project({ githubLink = "", deployLink = "", tools = [], description = "", project_name = "",setHeightProject }) {

    const refProject = useRef();

    const getHeight = (height) => {
        return setHeightProject(height)
    }
    let windowScreen;
    
    useEffect(()=>{
        const element = refProject.current
        // console.log(element.offsetHeight)
        window.addEventListener('resize',(e)=>{
            windowScreen = e.target.innerWidth;
            getHeight(element.offsetHeight)
        })
        getHeight(element.offsetHeight)
    },[])

    return (
        <a
            href={deployLink}
            className="py-7 px-8 bg-light-navy block rounded-sm transition-all ease-linear duration-150 hover:translate-y-[-6px]"
            ref={refProject}
        >
            <div className="flex text-lightest-slate justify-between items-center text-lg">
                <span className="text-4xl text-base-color">
                    <FontAwesomeIcon icon={faFolder} />
                </span>
                <div className="flex items-center">
                    <a
                        href={githubLink}
                        className="block mr-4 transition-all ease-linear duration-150 hover:text-base-color"
                        title="Github link"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        href={deployLink}
                        className="block transition-all ease-linear duration-150 hover:text-base-color"
                        title="Deploy link"
                    >
                        <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </a>
                </div>
            </div>
            <h2 className="mb-3 mt-5 text-lightest-slate font-semibold text-[22px] transition-all ease-linear duration-150 hover:text-base-color">
                {project_name}
            </h2>
            <p className="text-light-slate text-base">{description}</p>
            <div className="flex mt-4 text-[#8892b0]">
                {tools.map((item, index) => {
                    return (
                        <div key={index} className="mr-4 text-sm">
                            <span>{item}</span>
                        </div>
                    );
                })}
            </div>
        </a>
    );
}

export default Project;
