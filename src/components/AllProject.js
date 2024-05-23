import { useState } from "react";
import { Project } from "~/components";

const projects = [
    
    {
        projectDeployLink: "http://banghehoamai.com/",
        projectGithubLink: "https://github.com/thangnv-pegasus/bangtot-web",
        project_description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        project_tools: ["ReactJs", "Laravel", "Tailwind", "SwiperJs"],
        project_name: "BangGhe Shop",
    },
    {
        projectDeployLink: "https://thangnv-portfolio.vercel.app/",
        projectGithubLink: "https://github.com/thangnv-pegasus/my-portfolio",
        project_description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        project_tools: ["ReactJs", "Tailwind", "AOS animation"],
        project_name: "My Portfolio",
    },
    {
        projectDeployLink: "https://chat-app-2-7b1f0.web.app/",
        projectGithubLink: "https://github.com/thangnv-pegasus/chat-app",
        project_description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        project_tools: ["ReactJs", "Firebase", "Context API", "Tailwind"],
        project_name: "Chat App",
    },
    {
        projectDeployLink: "https://food-shop-negative.vercel.app/",
        projectGithubLink: "https://github.com/thangnv-pegasus/food-shop",
        project_description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        project_tools: ["ReactJs", "SCSS", "TippyJs"],
        project_name: "Food Shop",
    },
    {
        projectDeployLink: "https://tw-shop-1c92b.web.app/",
        projectGithubLink: "https://github.com/thangnv-pegasus/tw-shop",
        project_description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        project_tools: ["ReactJs", "Tailwind", "Firebase", "Swiper"],
        project_name: "Medical Shop",
    },
    {
        projectDeployLink: "https://nd-shoes.vercel.app/",
        projectGithubLink: "https://github.com/thangnv-pegasus/nd-shoes",
        project_description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        project_tools: ["ReactJs", "Tailwind", "SwiperJs"],
        project_name: "Sneaker Shop",
    },
    {
        projectDeployLink: "https://todo-list-7e9fe.web.app/",
        projectGithubLink: "https://github.com/thangnv-pegasus/todo-app",
        project_description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        project_tools: ["ReactJs", "Tailwind", "Firebase"],
        project_name: "Todo App",
    },
];

function AllProject({ githubLink = "" }) {
    const [show, setShow] = useState(false);

    const [heightProject, setHeightProject] = useState(0);

    let gapValue = 20;
    let height = gapValue * 2 + heightProject * 2;


    return (
        <div
            className="py-20 font-font_sans"
            data-aos={"fade-up"}
            data-aos-anchor-placement="top-center"
            data-aos-duration="1000"
        >
            <h2 className="text-center text-lightest-slate text-3xl font-semibold">Other Noteworthy Projects</h2>
            <a href={githubLink} className="block text-center text-base-color my-2">
                View on Github
            </a>
            <div
                className={`grid mt-10 pt-4 gap-5 transition-all ease-linear duration-200 overflow-hidden xl:grid-cols-3 md:grid-cols-2` }
                style={show ? { height: "unset" } : { height: `${height}px` }}
            >
                {projects.map((item, index) => {
                    return (
                        <Project
                            key={index}
                            deployLink={item.projectDeployLink}
                            githubLink={item.projectGithubLink}
                            tools={item.project_tools}
                            description={item.project_description}
                            project_name={item.project_name}
                            setHeightProject={setHeightProject}
                        />
                    );
                })}
            </div>
            <button
                onClick={() => setShow(!show)}
                className="block mx-auto text-sm font-font_mono border-[1px] border-base-color border-solid text-base-color px-6 py-3 mt-8 rounded-sm transition-all ease-linear duration-150 hover:bg-green-tint"
            >
                Show {show ? <>Less</> : <>More</>}
            </button>
        </div>
    );
}

export default AllProject;
