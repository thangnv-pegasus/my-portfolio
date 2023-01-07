import { Button } from "~/components";

function GetInTouch({ children }) {
    return (
        <div className="text-center py-24" id="get-in-touch" data-aos={"fade-up"} data-aos-anchor-placement="top-center" data-aos-duration="1000">
            <p className="text-base-color mb-5 text-base font-font_mono font-normal">What's next</p>
            <div className="text-lightest-slate text-5xl font-bold font-font_sans">Get In Touch</div>
            <div className="text-slate w-[760px] mx-auto py-7 text-lg">{children}</div>
            <Button
                href="mailto:negative010202.com"
                className="text-base font-font_mono hover:bg-green-tint transition-all ease-linear duration-150 border-base-color border-solid border-[1px] rounded-sm text-base-color px-6 py-4 my-6 inline-block"
            >
                Say Hello
            </Button>
        </div>
    );
}

export default GetInTouch;
