import { Octokit } from "@octokit/core";
import { useEffect } from "react";
import { Intro, AboutMe, Worked, GetInTouch, CopyRight, MyProject, AllProject, Header } from "~/components";
import { Socials, Contact } from "~/components";

const userName = process.env.REACT_APP_GITHUB_OWNER_NAME;
const token = process.env.REACT_APP_GITHUB_ACCESS_TOKEN

function App() {
    const octokit = new Octokit({
        auth: token,
    });
    const getRepos = async () => {
        const data = await octokit.request(`GET /users/${userName}/repos`, {
            username: userName,
            headers: {
                "X-GitHub-Api-Version": "2022-11-28",
            },
        });

    };

    useEffect(() => {
        getRepos()
    },[])

    return (
        <div className="App font-font_mono bg-navy w-full overflow-hidden">
            <Header />
            <div className=" max-w-full mx-auto pt-24 px-28 lg:w-content-width xl:px-0">
                <Intro />
                <AboutMe />
                <Worked />
                <MyProject />
                <AllProject githubLink={"https://github.com/thangnv-pegasus?tab=repositories"} />
                <GetInTouch>
                    Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you
                    have a question or just want to say hi, I'll try my best to get back to you!
                </GetInTouch>
                <CopyRight />
            </div>
            <Socials />
            <Contact />
        </div>
    );
}

export default App;
