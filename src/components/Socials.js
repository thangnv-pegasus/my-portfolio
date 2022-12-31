import { faCodepen, faGithub, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Socials() {
    return (
        <div className="fixed bg-transparent bottom-0 left-10 z-10 text-lightest-slate text-xl">
            <a href="https://github.com/PlayBi2" className="block my-3 p-1 transition-all duration-200 ease-linear hover:translate-y-[-6px] hover:text-base-color">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <Link to="#" className="block my-3 p-1 transition-all duration-200 ease-linear hover:translate-y-[-4px] hover:text-base-color">
                <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to="#" className="block my-3 p-1 transition-all duration-200 ease-linear hover:translate-y-[-4px] hover:text-base-color">
                <FontAwesomeIcon icon={faTwitter} />
             </Link>
            <Link to="#" className="block my-3 p-1 transition-all duration-200 ease-linear hover:translate-y-[-4px] hover:text-base-color">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
            <Link to="#" className="block my-3 p-1 transition-all duration-200 ease-linear hover:translate-y-[-4px] hover:text-base-color">
                <FontAwesomeIcon icon={faCodepen} />
            </Link>
            <p className="w-[2px] h-36 bg-lightest-slate block mx-auto"></p>
        </div>
    );
}

export default Socials;
