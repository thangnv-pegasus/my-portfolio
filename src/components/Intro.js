import {Button} from '~/components'

function Intro() {
    return (
        <div className="pt-24 text-lightest-slate">
            <div className="text-base-color mb-8">Hi, my name is</div>
            <h2 className="text-heading2 font-semibold leading-[1.1]">Thang Nguyen Van</h2>
            <h2 className="text-heading2 font-semibold leading-[1.1] text-slate">
                I'm a front-end developer.
            </h2>
            <div className="mt-5 max-w-xl text-slate">
                I'm a software engineer specializing in building (and occasionally designing) exceptional digital
                experiences.Currently, I am a 3rd year student at Hanoi National University of Education.
            </div>
            <Button href="123" className='text-base-color border-base-color border-solid border-[1px] px-5 py-3 rounded-sm mt-5 transition-all ease-linear duration-200 inline-block hover:bg-green-tint'>Check out my CV</Button>
        </div>
    );
}

export default Intro;
