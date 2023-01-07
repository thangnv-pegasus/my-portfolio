import { faJoomla } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom";
import {MyCV} from '~/CV'


function Header(){

    const headerRef = useRef();

    useEffect(()=>{
        const element = headerRef.current;
        let prevScrollpos = window.pageYOffset
        window.addEventListener('scroll',()=>{
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                element.style.top = "0";
              } else {
                element.style.top = "-96px";
              }
              prevScrollpos = currentScrollPos;
        })
    },[])


    return (
        <div className="h-24 bg-base_bg w-full backdrop-blur-md text-white font-font_mono fixed transition-all duration-400 ease shadow-custom z-10" ref={headerRef}>
            <div className="w-page-width mx-auto h-24 flex items-center justify-between">
                <Link to="/" className=" text-base-color text-4xl">
                    <FontAwesomeIcon icon={faJoomla} />
                </Link>
                <div className="text-lightest-slate">
                    <div className="flex text-sm items-center">
                        <a href="#about" className="mx-3 px-2 font-normal transition-all duration-200 hover:text-base-color text-sm">About</a>
                        <a href="#worked" className="mx-3 px-2 font-normal transition-all duration-200 hover:text-base-color text-sm">Experience</a>
                        <a href="#my-project" className="mx-3 px-2 font-normal transition-all duration-200 hover:text-base-color text-sm">Work</a>
                        <a href="#get-in-touch" className="mx-3 px-2 font-normal transition-all duration-200 hover:text-base-color text-sm">Contact</a>
                        <a href={MyCV} className="mx-3 font-normal rounded-sm px-3 py-2 border-solid border-base-color border-2 transition-all duration-200 text-base-color hover:bg-green-tint text-sm">Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header