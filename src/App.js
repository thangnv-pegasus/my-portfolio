import { Intro, AboutMe, Worked, GetInTouch, CopyRight, MyProject, AllProject } from "~/components";

function App() {
    return (
        <div className="App font-font_mono bg-navy">
            <div className="w-content-width mx-auto pt-24">
                <Intro />
                <AboutMe />
                <Worked />
                <MyProject />
                <AllProject githubLink = {"https://github.com/PlayBi2?tab=repositories"}/>
                <GetInTouch>
                    Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you
                    have a question or just want to say hi, I'll try my best to get back to you!
                </GetInTouch>
                <CopyRight />
            </div>
        </div>
    );
}

export default App;
