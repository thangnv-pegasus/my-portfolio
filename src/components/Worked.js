import { useState } from "react";
import { Title1, TabHeading, TabContent } from "~/components";

function Worked() {
    const [state, setState] = useState(1);

    return (
        <div
            className="text-slate py-28"
            id="worked"
            data-aos={"fade-up"}
            data-aos-anchor-placement="top-center"
            data-aos-duration="1000"
        >
            <Title1 className="py-14 mt-24">Where I've Worked</Title1>
            <div className="tablist sm:flex lg:grid lg:grid-cols-col3_1_4 lg:gap-14">
                <ul className="relative sm:pr-4">
                    <li
                        className="h-11 leading-[42px] px-5 cursor-pointer transition-all duration-150 ease-linear border-l-2 border-solid border-green-tint hover:bg-light-navy  hover:text-base-color"
                        style={
                            state === 1
                                ? {
                                      borderStyle: "solid",
                                      borderLeftWidth: "2px",
                                      borderColor: "#64ffda",
                                      color: "#64ffda",
                                      background: "#112240",
                                  }
                                : {
                                      borderStyle: "solid",
                                      borderLeftWidth: "2px",
                                      borderColor: "rgba(100,255,218,0.1)",
                                      color: "#8892b0",
                                      background: "transparent",
                                  }
                        }
                        onClick={() => setState(1)}
                    >
                        GiaSuDoHang
                    </li>
                    <li
                        className="h-11 leading-[42px] px-5 cursor-pointer transition-all duration-150 ease-linear border-l-2 border-solid border-green-tint hover:bg-light-navy hover:text-base-color"
                        style={
                            state === 2
                                ? {
                                      borderStyle: "solid",
                                      borderLeftWidth: "2px",
                                      borderColor: "#64ffda",
                                      color: "#64ffda",
                                      background: "#112240",
                                  }
                                : {
                                      borderStyle: "solid",
                                      borderLeftWidth: "2px",
                                      borderColor: "rgba(100,255,218,0.1)",
                                      color: "#8892b0",
                                      background: "transparent",
                                  }
                        }
                        onClick={() => setState(2)}
                    >
                        Bavaan
                    </li>
                    <li
                        className="h-11 leading-[42px] px-5 cursor-pointer transition-all duration-150 ease-linear border-l-2 border-solid border-green-tint hover:bg-light-navy hover:text-base-color"
                        style={
                            state === 3
                                ? {
                                      borderStyle: "solid",
                                      borderLeftWidth: "2px",
                                      borderColor: "#64ffda",
                                      color: "#64ffda",
                                      background: "#112240",
                                  }
                                : {
                                      borderStyle: "solid",
                                      borderLeftWidth: "2px",
                                      borderColor: "rgba(100,255,218,0.1)",
                                      color: "#8892b0",
                                      background: "transparent",
                                  }
                        }
                        onClick={() => setState(3)}
                    >
                        HNUE
                    </li>
                    <li
                        className="h-11 leading-[42px] px-5 cursor-pointer transition-all duration-150 ease-linear border-l-2 border-solid border-green-tint hover:bg-light-navy hover:text-base-color"
                        style={
                            state === 4
                                ? {
                                      borderStyle: "solid",
                                      borderLeftWidth: "2px",
                                      borderColor: "#64ffda",
                                      color: "#64ffda",
                                      background: "#112240",
                                  }
                                : {
                                      borderStyle: "solid",
                                      borderLeftWidth: "2px",
                                      borderColor: "rgba(100,255,218,0.1)",
                                      color: "#8892b0",
                                      background: "transparent",
                                  }
                        }
                        onClick={() => setState(4)}
                    >
                        GiaSuDoHang
                    </li>
                    {/* <li
                        className="h-11 leading-[42px] px-5 cursor-pointer transition-all duration-150 ease-linear border-l-2 border-solid border-green-tint hover:bg-light-navy hover:text-base-color"
                        style={
                            state === 5
                                ? {
                                      borderStyle: "solid",
                                      borderLeftWidth: "2px",
                                      borderColor: "#64ffda",
                                      color: "#64ffda",
                                      background: "#112240",
                                  }
                                : {
                                      borderStyle: "solid",
                                      borderLeftWidth: "2px",
                                      borderColor: "rgba(100,255,218,0.1)",
                                      color: "#8892b0",
                                      background: "transparent",
                                  }
                        }
                        onClick={() => setState(5)}
                    >
                        MullenLowe
                    </li> */}
                </ul>
                <div>
                    {state === 1 && (
                        <>
                            <TabHeading heading="Tutoring at home @ GiaSuDoHang" subHeading="January 2023 - Present" />
                            <TabContent
                                listContent={[
                                    "Help students review what they have learned",
                                    "Answer questions related to the lesson content for students",
                                    "Guide students to solve applied exercises from easy to difficult, from basic to advanced",
                                    "Improve students writing skills",
                                ]}
                            />
                        </>
                    )}
                    {state === 2 && (
                        <>
                            <TabHeading
                                heading="Intern front-end @ Bavaan"
                                subHeading="September 2022 - December 2022"
                            />
                            <TabContent
                                listContent={[
                                    "Participate in making e-commerce products for the company",
                                    "Work with a variety of different languages, platforms, frameworks such as JavaScript, TypeScript, NextJs, ReactJs, Liquid, Hydrogen, Tailwind",
                                ]}
                            />
                        </>
                    )}
                    {state === 3 && (
                        <>
                            <TabHeading
                                heading="Teaching Assistant @ Ha Noi University of Education"
                                subHeading="September 2022 - December 2022"
                            />
                            <TabContent
                                listContent={[
                                    "Assist teachers with lesson preparation by preparing materials and preparing classroom teaching aids.",
                                    "Supervise students during class time and school/center activities, field trips, and extracurricular activities.",
                                    "Collaborate with teachers to recognize the problems students are facing and suggest directions and help implement solutions.",
                                    "Correct homework for students, students, practice with them when needed.",
                                ]}
                            />
                        </>
                    )}
                    {state === 4 && (
                        <>
                            <TabHeading heading="Tutoring at home @ GiaSuDoHang" subHeading="October 2021 - May 2022" />
                            <TabContent
                                listContent={[
                                    "Help students review what they have learned",
                                    "Answer questions related to the lesson content for students",
                                    "Guide students to solve applied exercises from easy to difficult, from basic to advanced",
                                    "Improve students writing skills",
                                ]}
                            />
                        </>
                    )}
                    {/* {state === 5 && (
                        <>
                            <TabHeading
                                heading="Creative Technologist Co-op @ MullenLowe"
                                subHeading="July - December 2015"
                            />
                            <TabContent
                                listContent={[
                                    "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
                                    "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
                                    "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
                                ]}
                            />
                        </>
                    )} */}
                </div>
            </div>
        </div>
    );
}

export default Worked;
