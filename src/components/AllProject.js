import { useState } from "react";
import { Project } from "~/components";

const projects = [
    {
        projectDeployLink: "https://food-shop-negative.vercel.app/",
        projectGithubLink: "https://github.com/PlayBi2/food-shop",
        project_description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        project_tools: ["ReactJs", "SCSS", "Typescript", "Swiper"],
        project_name: "Food Shop",
    },
    {
        projectDeployLink: "https://food-shop-negative.vercel.app/",
        projectGithubLink: "https://github.com/PlayBi2/food-shop",
        project_description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        project_tools: ["ReactJs", "SCSS", "Typescript", "Swiper"],
        project_name: "Food Shop",
    },
    {
        projectDeployLink: "https://food-shop-negative.vercel.app/",
        projectGithubLink: "https://github.com/PlayBi2/food-shop",
        project_description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        project_tools: ["ReactJs", "SCSS", "Typescript", "Swiper"],
        project_name: "Food Shop",
    },
    {
        projectDeployLink: "https://food-shop-negative.vercel.app/",
        projectGithubLink: "https://github.com/PlayBi2/food-shop",
        project_description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        project_tools: ["ReactJs", "SCSS", "Typescript", "Swiper"],
        project_name: "Food Shop",
    },
    {
        projectDeployLink: "https://food-shop-negative.vercel.app/",
        projectGithubLink: "https://github.com/PlayBi2/food-shop",
        project_description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        project_tools: ["ReactJs", "SCSS", "Typescript", "Swiper"],
        project_name: "Food Shop",
    },
    {
        projectDeployLink: "https://food-shop-negative.vercel.app/",
        projectGithubLink: "https://github.com/PlayBi2/food-shop",
        project_description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        project_tools: ["ReactJs", "SCSS", "Typescript", "Swiper"],
        project_name: "Food Shop",
    },
    {
        projectDeployLink: "https://food-shop-negative.vercel.app/",
        projectGithubLink: "https://github.com/PlayBi2/food-shop",
        project_description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        project_tools: ["ReactJs", "SCSS", "Typescript", "Swiper"],
        project_name: "Food Shop",
    },
    {
        projectDeployLink: "https://food-shop-negative.vercel.app/",
        projectGithubLink: "https://github.com/PlayBi2/food-shop",
        project_description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        project_tools: ["ReactJs", "SCSS", "Typescript", "Swiper"],
        project_name: "Food Shop",
    },
    {
        projectDeployLink: "https://food-shop-negative.vercel.app/",
        projectGithubLink: "https://github.com/PlayBi2/food-shop",
        project_description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        project_tools: ["ReactJs", "SCSS", "Typescript", "Swiper"],
        project_name: "Food Shop",
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
