import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Title1 } from "~/components";
import { avatar } from "~/img";

function AboutMe() {
    return (
        <div
            className="py-24"
            id="about"
            data-aos={"fade-up"}
            data-aos-anchor-placement="top-center"
            data-aos-duration="1000"
        >
            <Title1 className="mb-5 mt-24">About Me</Title1>
            <div className="grid gap-12 grid-cols-1 md:grid-cols-col2_3_2">
                <div className="text-slate mt-10">
                    <p className="mb-6">
                        With all the knowledge of what's in school and courses, I've always wanted to be a Front-end
                        developer. Having a solid knowledge of Html, Css, JavaScript and ReactJs, plus skills I hone on
                        a daily basis. I always want to devote myself to helping the company grow and achieve for
                        myself. I look forward to joining the company in a professional working environment to perfect,
                        develop programming skills as well as improve myself.
                    </p>
                    <p className="my-6">Here are a few technologies I've been working with recently:</p>
                    <div className="grid grid-cols-col1_1_1">
                        <ul>
                            <li className="flex items-center my-2">
                                <span className="text-base-color mr-2">
                                    <FontAwesomeIcon icon={faCaretRight} />
                                </span>{" "}
                                JavaScript (ES6)
                            </li>
                            <li className="flex items-center my-2">
                                <span className="text-base-color mr-2">
                                    <FontAwesomeIcon icon={faCaretRight} />
                                </span>{" "}
                                ReactJs
                            </li>
                            {/* <li className="flex items-center my-2">
                                <span className="text-base-color mr-2">
                                    <FontAwesomeIcon icon={faCaretRight} />
                                </span>{" "}
                                TypeScript
                            </li> */}
                        </ul>
                        <ul>
                            <li className="flex items-center my-2">
                                <span className="text-base-color mr-2">
                                    <FontAwesomeIcon icon={faCaretRight} />
                                </span>{" "}
                                Liquid
                            </li>
                            <li className="flex items-center my-2">
                                <span className="text-base-color mr-2">
                                    <FontAwesomeIcon icon={faCaretRight} />
                                </span>{" "}
                                Tailwind
                            </li>
                            {/* <li className="flex items-center my-2">
                                <span className="text-base-color mr-2">
                                    <FontAwesomeIcon icon={faCaretRight} />
                                </span>{" "}
                                Material UI
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="w-80 h-80 rounded-md relative z-[1] group mx-auto md:m-0 group">
                    <img
                        src={avatar}
                        alt="avatar"
                        className="object-cover object-center w-full h-full block rounded-md"
                    />
                    <span className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(13,31,52,0.7)] transition-all ease-linear duration-200 group-hover:bg-transparent"></span>
                    <div className="absolute top-0 right-0 bottom-0 left-0 border-base-color border-solid border-[1px] translate-x-5 translate-y-5 z-[-1] rounded-md transition-all duration-150 ease-linear group-hover:translate-x-3 group-hover:translate-y-3"></div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
