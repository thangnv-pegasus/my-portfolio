import { SOCIAL_LINKS } from "~/constants";

function Contact() {
    return (
        <div className="fixed bg-transparent bottom-0 right-10 z-10 text-lightest-slate hidden md:block">
            <a
                href={`mailto:${SOCIAL_LINKS.GMAIL}`}
                className="block my-3 p-1 transition-all duration-200 ease-linear text-base tracking-[3px] hover:translate-y-[-6px] hover:text-base-color text-center"
                style={{
                    writingMode: "vertical-rl]",
                    WebkitWritingMode: "vertical-rl",
                }}
            >
                {SOCIAL_LINKS.GMAIL}
            </a>
            <p className="w-[2px] h-36 bg-lightest-slate block mx-auto"></p>
        </div>
    );
}

export default Contact;
