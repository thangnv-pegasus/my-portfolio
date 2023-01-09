import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Title1 } from "~/components";
import { avatar } from "~/img";

function AboutMe() {
    return (
        <div className="py-24" id="about" data-aos={"fade-up"} data-aos-anchor-placement="top-center" data-aos-duration="1000">
            <Title1 className="mb-5 mt-24">About Me</Title1>
            <div className="grid gap-12 grid-cols-1 md:grid-cols-col2_3_2">
                <div className="text-slate mt-10">
                    <p>
                        Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in
                        web development started back in 2012 when I decided to try editing custom Tumblr themes — turns
                        out hacking together a custom reblog button taught me a lot about HTML & CSS!
                    </p>
                    <p className="my-6">
                        Fast-forward to today, and I've had the privilege of working at an advertising agency, a
                        start-up, a huge corporation, and a student-led design studio. My main focus these days is
                        building accessible, inclusive products and digital experiences at Upstatement for a variety of
                        clients.
                    </p>
                    <p>
                        I also recently launched a course that covers everything you need to build a web app with the
                        Spotify API using Node & React.
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
                            <li className="flex items-center my-2">
                                <span className="text-base-color mr-2">
                                    <FontAwesomeIcon icon={faCaretRight} />
                                </span>{" "}
                                TypeScript
                            </li>
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
                            <li className="flex items-center my-2">
                                <span className="text-base-color mr-2">
                                    <FontAwesomeIcon icon={faCaretRight} />
                                </span>{" "}
                                Material UI
                            </li>
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
