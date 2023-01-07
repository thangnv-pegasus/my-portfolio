import { useState } from "react";
import { Title1, TabHeading, TabContent } from "~/components";

function Worked() {
    const [state, setState] = useState(1);

    return (
        <div className="text-slate py-28" id="worked" data-aos={"fade-up"} data-aos-anchor-placement="top-center" data-aos-duration="1000">
            <Title1 className="py-14 mt-24">Where I've Worked</Title1>
            <div className="tablist grid grid-cols-col3_1_4 gap-14">
                <ul className="relative">
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
                        Upstatement
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
                        Scout
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
                        Apple
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
                        Starry
                    </li>
                    <li
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
                    </li>
                </ul>
                <div>
                    {state === 1 && (
                        <>
                            <TabHeading heading="Engineer @ Upstatement" subHeading="May 2018 - Present" />
                            <TabContent
                                listContent={[
                                    "Write modern, performant, maintainable code for a diverse array of client and internal projects",
                                    "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
                                    "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
                                ]}
                            />
                        </>
                    )}
                    {state === 2 && (
                        <>
                            <TabHeading heading="Studio Developer @ Scout" subHeading="January - April 2018" />
                            <TabContent
                                listContent={[
                                    "Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern",
                                    "Helped solidify a brand direction for blistabloc that spans both packaging and web",
                                    "Interfaced with clients on a weekly basis, providing technological expertise",
                                ]}
                            />
                        </>
                    )}
                    {state === 3 && (
                        <>
                            <TabHeading heading="UI Engineer Co-op @ Apple" subHeading="July - December 2017" />
                            <TabContent
                                listContent={[
                                    "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
                                    "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
                                    "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
                                    "Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps",
                                ]}
                            />
                        </>
                    )}
                    {state === 4 && (
                        <>
                            <TabHeading heading="Software Engineer Co-op @ Starry" subHeading="July - December 2016" />
                            <TabContent
                                listContent={[
                                    "Engineered and maintained major features of Starry's customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS",
                                    "Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station",
                                    "Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Starry’s iOS and Android mobile apps"
                                ]}
                            />
                        </>
                    )}
                    {state === 5 && (
                        <>
                            <TabHeading heading="Creative Technologist Co-op @ MullenLowe" subHeading="July - December 2015" />
                            <TabContent
                                listContent={[
                                    "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
                                    "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
                                    "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more"
                                ]}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Worked;
