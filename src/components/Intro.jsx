import { MyCV } from "~/CV";

function Intro() {
    return (
        <div className="pt-24 text-lightest-slate">
            <div className="text-base-color mb-8">Hi, my name is</div>
            <h2 className="text-heading2 font-semibold leading-[1.1]">Thang Nguyen Van</h2>
            <h2 className="text-heading2 font-semibold leading-[1.1] text-slate">I'm a full-stack developer.</h2>
            <div className="mt-5 max-w-xl text-slate text-xl">
                I'm a 4th year student at the Faculty of Information Technology, Hanoi National University of
                Education.
            </div>
            <a
                href={MyCV}
                className="text-base-color border-base-color border-solid border-[1px] px-5 py-3 rounded-sm mt-5 transition-all ease-linear duration-200 inline-block hover:bg-green-tint"
                target="_self"
            >
                Check out my CV
            </a>
        </div>
    );
}

export default Intro;
