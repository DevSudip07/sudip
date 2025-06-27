import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useState, useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);


const Projects = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [showCursor, setShowCursor] = useState(false);

    const projects = [
        {
            name: '"Hope for Every Child" – NGO Website',
            des: "A responsive, accessible, and emotion-driven website built for a fictional child-focused NGO. The goal was to build trust, increase donations, and spread awareness about child rights and welfare through a compelling digital experience.",
            tech: ["HTML", "CSS", "JS"],
            image: "https://themefisher.com/blog/shelter.webp"
        },
        {
            name: '"Hope for Every Child" – NGO Website',
            des: "A responsive, accessible, and emotion-driven website built for a fictional child-focused NGO. The goal was to build trust, increase donations, and spread awareness about child rights and welfare through a compelling digital experience.",
            tech: ["HTML", "CSS", "JS"],
            image: "https://kanopi.com/wp-content/uploads/2020/11/Screen-Shot-2020-11-06-at-4.57.39-PM-1024x497.png"
        }
    ];

    useEffect(() => {
        const updateCursor = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateCursor);

        return () => window.removeEventListener("mousemove", updateCursor);
    }, []);

    // ✅ Hide default cursor only when custom cursor is shown
    // useEffect(() => {
    //     if (showCursor) {
    //         document.body.style.cursor = "none";
    //     } else {
    //         document.body.style.cursor = "default";
    //     }

    //     return () => {
    //         document.body.style.cursor = "default";
    //     };
    // }, [showCursor]);
    let projectSection = useRef(null);
    let projectCardsRef = useRef([]);
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: projectSection.current,
            start: "top 50%",
            end: "bottom 15%",
            scrub: 2,
            markers: true,
        }
    })
    useGSAP(() => {
        projectCardsRef.current.forEach((val, index) => {

            if (index === 0) {
                console.log("val", val);
                const desDiv = val.querySelector(".des");
                tl.to(desDiv, {
                    left: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                }, "a+=0.5");
            }

            if (index === 1) {
                const desDiv = val.querySelector(".des");
                tl.to(desDiv, {
                    right: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                }, "a+=0.7");
            }

            tl.from(val, {
                opacity: 0,
                scale: 0.1,
                duration: 1.2,
                ease: "power3.out",
                stagger: 0.2,
            }, "a+=0.5");
        })
    })



    return (
        <>
            {/* Custom Cursor */}
            {showCursor && (
                <div
                    className="w-20 h-20 content-center text-center text-sm bg-[var(--p-color)] rounded-full fixed z-[9999] pointer-events-none transition-all duration-75 ease-[cubic-bezier(0.075, 0.82, 0.165, 1)]"
                    style={{
                        left: `${cursorPos.x}px`,
                        top: `${cursorPos.y}px`,
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    Visit Now
                </div>
            )}

            <section ref={projectSection} id="projects" className="container mx-auto w-full h-fit py-10 px-4 md:px-40">
                <div className="title flex items-center gap-2 mb-5">
                    <h1 className="text-2xl font-bold">PROJECTS</h1>
                    <div className="w-50 h-0.5 bg-white"></div>
                </div>

                <div className="projectContainer w-full md:w-5/6 h-full mt-15 mx-auto">
                    {projects.map((project, index) => (
                        <div ref={(el) => (projectCardsRef.current[index] = el)}
                            key={index}
                            onMouseEnter={() => setShowCursor(true)}
                            onMouseLeave={() => setShowCursor(false)}
                            className={`project  w-full h-[350px] my-20 flex items-center ${index % 2 !== 0 ? "flex-row-reverse   " : "flex-row "
                                }`}
                        >
                            <div
                                className="image  z-10 w-1/2 h-full rounded-2xl bg-red-700 bg-cover bg-center bg-no-repeat shadow-sm shadow-blue-500"
                                style={{ backgroundImage: `url(${project.image})` }}
                            ></div>

                            <div
                                className={`des relative w-1/2 h-3/4 p-6 shadow-sm shadow-blue-500 ${index % 2 !== 0 ? "rounded-l-2xl  right-[-50%]" : "rounded-r-2xl left-[-50%] opacity-0"
                                    }`}
                            >
                                <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                                <p className="opacity-50 leading-5">{project.des}</p>
                                <div className="tech absolute bottom-5 w-full flex items-center gap-5 flex-wrap">
                                    {project.tech.map((tech, i) => (
                                        <h4
                                            key={i}
                                            className="px-2 py-1 rounded bg-black opacity-50 text-sm"
                                        >
                                            {tech}
                                        </h4>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="relative left-1/2 translate-x-[-1/2] font-semibold underline">
                    SEE ALL
                </button>
            </section>
        </>
    );
};

export default Projects;
