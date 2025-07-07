import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useState, useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);


const Projects = () => {
    const [showCursor, setShowCursor] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);
    const mouseTarget = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });
    const animationFrame = useRef(null);

    // Smooth cursor animation with better performance
    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseTarget.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Animation loop with improved performance
        const animate = () => {
            // Smooth lerp for trailing effect
            const lerp = isHovering ? 0.15 : 0.08; // Faster when hovering
            cursorPos.current.x += (mouseTarget.current.x - cursorPos.current.x) * lerp;
            cursorPos.current.y += (mouseTarget.current.y - cursorPos.current.y) * lerp;

            if (cursorRef.current && cursorDotRef.current) {
                // Main cursor with slight delay
                cursorRef.current.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px) translate(-50%, -50%)`;

                // Dot cursor follows immediately
                cursorDotRef.current.style.transform = `translate(${mouseTarget.current.x}px, ${mouseTarget.current.y}px) translate(-50%, -50%)`;
            }

            animationFrame.current = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, [isHovering]);

    // Enhanced fade and scale effects
    useEffect(() => {
        if (cursorRef.current) {
            if (showCursor) {
                gsap.to(cursorRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            } else {
                gsap.to(cursorRef.current, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.2,
                    ease: "power2.in"
                });
            }
        }
    }, [showCursor]);

    // Scale effect when hovering
    useEffect(() => {
        if (cursorRef.current) {
            gsap.to(cursorRef.current, {
                scale: isHovering ? 1.2 : 1,
                duration: 0.2,
                ease: "power2.out"
            });
        }
    }, [isHovering]);

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

    const projectSection = useRef(null);
    const projectCardsRef = useRef([]);

    useGSAP(() => {
        // Set initial states
        gsap.set(projectCardsRef.current, {
            opacity: 0,
            scale: 0.1,
        });

        // Set initial states for description divs
        projectCardsRef.current.forEach((card, index) => {
            if (!card) return;

            const desDiv = card.querySelector(".des");
            if (desDiv) {
                if (index % 2 === 0) {
                    gsap.set(desDiv, { left: "-50%", opacity: 0 });
                } else {
                    gsap.set(desDiv, { right: "-50%", opacity: 0 });
                }
            }
        });

        // Create timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: projectSection.current,
                start: "top 80%",
                end: "bottom 110%",
                scrub: 2,
                markers: false,
            }
        });

        // Animate project cards
        projectCardsRef.current.forEach((card, index) => {
            if (!card) return;

            const desDiv = card.querySelector(".des");

            // Animate the main card
            tl.to(card, {
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "power3.out",
            }, "a");

            // Animate description div
            if (desDiv) {
                if (index % 2 === 0) {
                    tl.to(desDiv, {
                        left: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out",
                    }, "a+=0.3");
                } else {
                    tl.to(desDiv, {
                        right: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out",
                    }, "a+=0.3");
                }
            }
        });

    }, { scope: projectSection });

    return (
        <>
            {/* Enhanced Smooth Custom Cursor */}
            <div
                ref={cursorRef}
                className="fixed z-[9999] pointer-events-none select-none mix-blend-difference"
                style={{
                    willChange: "transform, opacity"
                }}
            >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black text-xs font-medium shadow-lg">
                    Visit Now
                </div>
            </div>

            {/* Cursor dot for precision */}
            <div
                ref={cursorDotRef}
                className="w-2 h-2 bg-white rounded-full fixed z-[9998] pointer-events-none mix-blend-difference"
                style={{
                    willChange: "transform"
                }}
            />

            <section ref={projectSection} id="projects" className="container mx-auto w-full h-fit py-10 px-4 md:px-40">
                <div className="title flex items-center gap-2 mb-5">
                    <h1 className="text-2xl font-bold">PROJECTS</h1>
                    <div className="w-50 h-0.5 bg-white"></div>
                </div>

                <div className="projectContainer w-full md:w-5/6 h-full mt-15 mx-auto">
                    {projects.map((project, index) => (
                        <div
                            ref={(el) => (projectCardsRef.current[index] = el)}
                            key={index}
                            onMouseEnter={() => {
                                setShowCursor(true);
                                setIsHovering(true);
                            }}
                            onMouseLeave={() => {
                                setShowCursor(false);
                                setIsHovering(false);
                            }}
                            className={`project w-full h-[350px] my-20 flex items-center ${index % 2 !== 0 ? "flex-row-reverse" : "flex-row"
                                }`}
                        >
                            <div
                                className="image z-10 w-1/2 h-full rounded-2xl bg-red-700 bg-cover bg-center bg-no-repeat shadow-sm shadow-blue-500"
                                style={{ backgroundImage: `url(${project.image})` }}
                            ></div>

                            <div
                                className={`des relative w-1/2 h-3/4 p-6 shadow-sm shadow-blue-500 ${index % 2 !== 0
                                    ? "rounded-l-2xl right-[-50%]"
                                    : "rounded-r-2xl left-[-50%]"
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
