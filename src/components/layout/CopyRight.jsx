import { faFacebook, faGithub, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_LINKS } from "~/constants";

function CopyRight() {
    return (
        <>
            <div className="none sm:flex sm:justify-center">
                <a
                    href={SOCIAL_LINKS.GITHUB}
                    className="mx-4 text-xl text-lightest-slate transition-all ease-linear duration-150 hover:translate-y-[-5px] hover:text-base-color"
                    title="Github"
                >
                    {" "}
                    <FontAwesomeIcon icon={faGithub} />{" "}
                </a>
                <a
                    href={SOCIAL_LINKS.INSTAGRAM}
                    className="mx-4 text-xl text-lightest-slate transition-all ease-linear duration-150 hover:translate-y-[-5px] hover:text-base-color"
                    title="Instagram"
                >
                    {" "}
                    <FontAwesomeIcon icon={faInstagram} />{" "}
                </a>
                <a
                    href={SOCIAL_LINKS.TWITTER}
                    className="mx-4 text-xl text-lightest-slate transition-all ease-linear duration-150 hover:translate-y-[-5px] hover:text-base-color"
                    title=""
                >
                    {" "}
                    <FontAwesomeIcon icon={faTwitter} />{" "}
                </a>
                <a
                    href={SOCIAL_LINKS.LINKEDIN}
                    className="mx-4 text-xl text-lightest-slate transition-all ease-linear duration-150 hover:translate-y-[-5px] hover:text-base-color"
                    title=""
                >
                    {" "}
                    <FontAwesomeIcon icon={faLinkedinIn} />{" "}
                </a>
                <a
                    href={SOCIAL_LINKS.FACEBOOK}
                    className="mx-4 text-xl text-lightest-slate transition-all ease-linear duration-150 hover:translate-y-[-5px] hover:text-base-color"
                    title=""
                >
                    {" "}
                    <FontAwesomeIcon icon={faFacebook} />{" "}
                </a>
            </div>
            <a
                href="https://github.com/thangnv-pegasus"
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
