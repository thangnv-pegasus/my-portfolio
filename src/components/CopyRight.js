import { faCodepen, faGithub, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CopyRight() {
    return (
        <>
            <div className="none sm:flex sm:justify-center">
                <a
                    href="https://github.com/PlayBi2"
                    className="mr-8 text-xl text-lightest-slate transition-all ease-linear duration-150 hover:translate-y-[-5px] hover:text-base-color"
                    title="Github"
                >
                    {" "}
                    <FontAwesomeIcon icon={faGithub} />{" "}
                </a>
                <a
                    href="https://www.instagram.com/n.e.g.a.0.1/"
                    className="mr-8 text-xl text-lightest-slate transition-all ease-linear duration-150 hover:translate-y-[-5px] hover:text-base-color"
                    title="Instagram"
                >
                    {" "}
                    <FontAwesomeIcon icon={faInstagram} />{" "}
                </a>
                <a
                    href="https://twitter.com/PlayBi_02"
                    className="mr-8 text-xl text-lightest-slate transition-all ease-linear duration-150 hover:translate-y-[-5px] hover:text-base-color"
                    title=""
                >
                    {" "}
                    <FontAwesomeIcon icon={faTwitter} />{" "}
                </a>
                <a
                    href=""
                    className="mr-8 text-xl text-lightest-slate transition-all ease-linear duration-150 hover:translate-y-[-5px] hover:text-base-color"
                    title=""
                >
                    {" "}
                    <FontAwesomeIcon icon={faLinkedinIn} />{" "}
                </a>
                <a
                    href=""
                    className="mr-8 text-xl text-lightest-slate transition-all ease-linear duration-150 hover:translate-y-[-5px] hover:text-base-color"
                    title=""
                >
                    {" "}
                    <FontAwesomeIcon icon={faCodepen} />{" "}
                </a>
            </div>
            <a
                href="https://github.com/PlayBi2"
                className="mt-20 py-5 text-sm text-center text-lightest-slate transition-all ease-linear duration-150 block hover:text-base-color sm:mt-2"
            >
                <p>Designed & Built by Brittany Chiang</p>
                <div className="flex justify-center mt-2">
                    <p className="mx-3">
                        <span>
                            {" "}
                            <FontAwesomeIcon icon={faStar} />{" "}
                        </span>
                        <span>1000</span>
                    </p>
                    <p className="mx-3">
                        <span>
                            {" "}
                            <FontAwesomeIcon icon={faCodeFork} />{" "}
                        </span>
                        <span>1000</span>
                    </p>
                </div>
            </a>
        </>
    );
}

export default CopyRight;
