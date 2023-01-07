import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CopyRight() {
    return (
        <a href="https://github.com/PlayBi2" className="mt-20 py-5 text-sm text-center text-lightest-slate transition-all ease-linear duration-150 block hover:text-base-color">
            <p>Designed & Built by Brittany Chiang</p>
            <div className="flex justify-center mt-2">
                <p className="mx-3">
                    <span> <FontAwesomeIcon icon={faStar} /> </span>
                    <span>1000</span>
                </p>
                <p className="mx-3">
                    <span> <FontAwesomeIcon icon={faCodeFork} /> </span>
                    <span>1000</span>
                </p>
            </div>
        </a>
    );
}

export default CopyRight;
