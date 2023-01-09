import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

function ProjectDemo({
    imgSrc = "",
    alt = "project",
    subTitle = "Featured Project",
    title = "My project",
    listContent = [],
    tools = [],
    contentPosition = "left",
    className = "",
    githubLink = "",
    deployLink = "",
}) {
    let contentCss = "";
    let imgCss = "";
    let subContentCss = "";
    const [heightImg, setHeightImg] = useState(100);
    const [widthImg, setWidthImg] = useState(100);
    const refContent = useRef();

    useEffect(() => {
        const element = refContent.current;
        setHeightImg(element.offsetHeight);
        setWidthImg(element.offsetWidth);
    }, []);

    if (contentPosition === "left") {
        contentCss = "row-start-1 row-end-[-1] md:col-start-1 text-left col-start-1 col-end-[-1] md:col-end-7";
        imgCss = "row-start-1 row-end-[-1]  col-start-[1] col-end-[-1] md:col-start-6";
        subContentCss = "justify-start";
    } else {
        contentCss = "row-start-1 row-end-[-1] col-end-[-1] text-right col-start-1 col-end-[-1] md:col-start-6";
        imgCss = "row-start-1 row-end-[-1] col-start-1 col-end-[-1] md:col-end-7";
        subContentCss = "justify-end";
    }
    return (
        <div
            className={`${className} grid grid-cols-12 gap-3 py-12 relative`}
            data-aos={"fade-up"}
            data-aos-anchor-placement="top-center"
            data-aos-duration="1000"
        >
            <div className={`${imgCss} sm:h-[${heightImg}px] sm:w-[${widthImg}px] group`}>
                <a href={deployLink} className="block h-full w-full relative">
                    <img src={imgSrc} alt={alt} className="w-full h-full object-cover object-center" />
                    <span className="absolute right-0 bottom-0 top-0 left-0 bg-[rgba(13,31,52,0.8)] transition-all ease-linear duration-150 group-hover:bg-transparent"></span>
                </a>
            </div>
            <div
                className={`${contentCss} p-3 relative font-font_mono z-[2] bg-[rgba(13,31,52,0.8)] md:bg-transparent `}
                ref={refContent}
            >
                <p className="text-sm text-base-color font-normal">{subTitle}</p>
                <a
                    href={deployLink}
                    className="text-3xl mt-2 mb-5 text-lightest-slate font-semibold font-font_mono transition-all ease-linear duration-150 hover:text-base-color"
                >
                    {title}
                </a>
                <div className="my-3 md:my-5 md:p-5 bg-transparent md:bg-light-navy text-lightest-slate text-base font-font_sans leading-6">
                    {listContent.map((item, index) => {
                        return (
                            <p className="" key={index}>
                                {item}
                            </p>
                        );
                    })}
                </div>
                <div className={`${subContentCss} flex text-light-slate mb-3`}>
                    {tools.map((item, index) => {
                        return (
                            <p className="mr-6" key={index}>
                                {item}
                            </p>
                        );
                    })}
                </div>
                <div className={`${subContentCss} flex text-light-slate text-xl`}>
                    <a
                        href={githubLink}
                        className="block mr-6 transition-all ease-linear duration-150 hover:text-base-color"
                    >
                        {" "}
                        <FontAwesomeIcon icon={faGithub} />{" "}
                    </a>
                    <a
                        href={deployLink}
                        className="block transition-all ease-linear duration-150 hover:text-base-color"
                    >
                        {" "}
                        <FontAwesomeIcon icon={faUpRightFromSquare} />{" "}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectDemo;
