
function Contact() {
    return (
        <div className="fixed bg-transparent bottom-0 right-10 z-10 text-lightest-slate hidden md:block">
            <a
                href="mailto:thangngv.works@gmail.com"
                className="block my-3 p-1 transition-all duration-200 ease-linear text-base tracking-[3px] hover:translate-y-[-6px] hover:text-base-color text-center"
                style={{
                    writingMode: 'vertical-rl]',
                    WebkitWritingMode:'vertical-rl'
                }}
            >
                thangngv.works@gmail.com
            </a>
            <p className="w-[2px] h-36 bg-lightest-slate block mx-auto"></p>
        </div>
    );
}

export default Contact;
