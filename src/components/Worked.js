import { useState } from "react";
import Title1 from "~/components/Title1";

function Worked() {
    const [state, setState] = useState(1);

    return (
        <div className="text-slate">
            <Title1 className="py-14">Where I've Worked</Title1>
            <div className="tablist grid grid-cols-col3_1_4 gap-14">
                <ul className="relative">
                    <li
                        className="h-11 leading-[42px] px-5 cursor-pointer transition-all duration-150 ease-linear border-l-2 border-solid border-green-tint hover:bg-light-navy hover:text-base-color"
                        style={
                            state === 1
                                ? {
                                      borderStyle: "solid",
                                      borderLeftWidth: "2px",
                                      borderColor: "#64ffda",
                                      color: "#64ffda",
                                      background:"#112240"
                                  }
                                : {
                                      borderStyle: "solid",
                                      borderLeftWidth: "2px",
                                      borderColor: "rgba(100,255,218,0.1)",
                                      color: "#8892b0",
                                      background:"transparent"
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
                                      background:"#112240"
                                  }
                                : {
                                      borderStyle: "solid",
                                      borderLeftWidth: "2px",
                                      borderColor: "rgba(100,255,218,0.1)",
                                      color: "#8892b0",
                                      background:"transparent"
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
                                      background:"#112240"
                                  }
                                : {
                                      borderStyle: "solid",
                                      borderLeftWidth: "2px",
                                      borderColor: "rgba(100,255,218,0.1)",
                                      color: "#8892b0",
                                      background:"transparent"
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
                                      background:"#112240"
                                  }
                                : {
                                      borderStyle: "solid",
                                      borderLeftWidth: "2px",
                                      borderColor: "rgba(100,255,218,0.1)",
                                      color: "#8892b0",
                                      background:"transparent"
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
                                      background:"#112240"
                                  }
                                : {
                                      borderStyle: "solid",
                                      borderLeftWidth: "2px",
                                      borderColor: "rgba(100,255,218,0.1)",
                                      color: "#8892b0",
                                      background:"transparent"
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
                            12 
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Worked;
