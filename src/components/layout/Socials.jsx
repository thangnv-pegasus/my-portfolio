import { faFacebook, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_LINKS } from "~/constants";

function Socials() {
    return (
        <div className="fixed bg-transparent bottom-0 left-10 z-10 text-lightest-slate text-xl hidden md:block">
            <a
                href={SOCIAL_LINKS.GITHUB}
                className="block my-3 p-1 transition-all duration-200 ease-linear hover:translate-y-[-6px] hover:text-base-color"
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
                href={SOCIAL_LINKS.INSTAGRAM}
                className="block my-3 p-1 transition-all duration-200 ease-linear hover:translate-y-[-4px] hover:text-base-color"
            >
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
                href={`tel:${SOCIAL_LINKS.PHONE}`}
                className="block my-3 p-1 transition-all duration-200 ease-linear hover:translate-y-[-4px] hover:text-base-color"
            >
                <FontAwesomeIcon icon={faMobileScreen} />
            </a>
            <a
                href={SOCIAL_LINKS.LINKEDIN}
                className="block my-3 p-1 transition-all duration-200 ease-linear hover:translate-y-[-4px] hover:text-base-color"
            >
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
                href={SOCIAL_LINKS.FACEBOOK}
                className="block my-3 p-1 transition-all duration-200 ease-linear hover:translate-y-[-4px] hover:text-base-color"
            >
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <p className="w-[2px] h-36 bg-lightest-slate block mx-auto"></p>
        </div>
    );
}

export default Socials;
