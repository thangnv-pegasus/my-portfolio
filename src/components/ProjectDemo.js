import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    if (contentPosition === "left") {
        contentCss = "row-start-1 row-end-[-1] col-start-1 col-end-7 text-left";
        imgCss = "row-start-1 row-end-[-1] col-start-6 col-end-[-1]";
        subContentCss = "justify-start";
    } else {
        contentCss = "row-start-1 row-end-[-1] col-start-6 col-end-[-1] text-right";
        imgCss = "row-start-1 row-end-[-1] col-start-1 col-end-7";
        subContentCss = "justify-end";
    }
    return (
        <div
            className={`${className} grid grid-cols-12 gap-3 py-12 relative`}
            data-aos={"fade-up"}
            data-aos-anchor-placement="top-center"
            data-aos-duration="1000"
        >
            <div className={`${imgCss}`}>
                <a href={deployLink} className="block">
                    <img src={imgSrc} alt={alt} className="w-full h-full object-cover object-center" />
                </a>
            </div>
            <div className={`${contentCss} relative font-font_mono z-[2]`}>
                <p className="text-sm text-base-color font-normal">{subTitle}</p>
                <a
                    href={deployLink}
                    className="text-3xl mt-2 mb-5 text-lightest-slate font-semibold font-font_mono transition-all ease-linear duration-150 hover:text-base-color"
                >
                    {title}
                </a>
                <div className="my-5 p-5 bg-light-navy text-lightest-slate text-base font-font_sans leading-6">
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
