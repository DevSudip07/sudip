import { useRef } from "react";
import aboutImage from "../../assets/about-image.png";
import Button from "../Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
    let aboutSection = useRef(null)
    let aboutleftRef = useRef(null)
    useGSAP(() => {
        gsap.from(aboutleftRef.current, {
            x: -300,
            opacity: 0.6,
            duration: 0.8,
            opacity: 0.3,
            scrollTrigger: {
                trigger: "#about",
                start: "top 50%",
                end: "bottom 30%",
                scrub: 3,
                // markers: true,
            }
        })

    },)
    return (
        <>
            <section id="about" className="conatiner mx-auto relative w-full h-fit md:h-[80vh] grid grid-cols-1 md:grid-cols-2 px-4 md:px-40 py-15">
                <aside id="image" className="w-full h-full my-15 md:my-0">
                    <div ref={aboutleftRef} className="image-box w-[100%] md:w-[80%] h-[250px] md:h-[450px] object-cover object-center rounded-2xl bg-no-repeat bg-cover shadow-sm shadow-blue-500" style={{ backgroundImage: `url(${aboutImage})` }}></div>
                </aside>
                <aside id="content" className="w-full h-full">
                    <div className="title absolute top-10 md:static text-[var(--p-color)] flex items-center gap-2 mb-5">
                        <h1 className="text-2xl font-bold">ABOUT</h1>
                        <div className="w-50 h-0.5 bg-[var(--p-color)] "></div>
                    </div>
                    <p>👋 Hi, I’m Sudip — a <span className="font-medium">frontend developer</span> and <span className="font-medium">UI/UX designer</span> based in India. I specialize in crafting <span className="font-medium">responsive web interfaces</span> and seamless user experiences using modern technologies like <span className="font-medium">React</span>, <span className="font-medium">Tailwind</span>, and <span className="font-medium">Figma</span>.</p>

                    <p className="my-5">My journey into tech began with curiosity and a strong desire to create things that people enjoy using. Today, I blend code and creativity to bring digital ideas to life with both precision and passion.</p>

                    <p>When I'm not coding or designing, I love diving into creative side projects, learning new skills, and helping others grow in the field of web development.</p>

                    <p className="my-5 mb-15 md:mb-10">Let’s build something amazing together.</p>
                    <Button title="KNOW MORE" />
                </aside>
            </section>
        </>
    );
};

export default About;