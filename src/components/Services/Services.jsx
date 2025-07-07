import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const services = [
        {
            name: "UI/UX DESIGN",
            image: "",
            des: "I design intuitive, user-centered interfaces that enhance the experience and engagement of your users. From wireframes to high-fidelity prototypes — I bring your product's vision to life.",
        },
        {
            name: "WEB DEVELOPMENT",
            image: "",
            des: "I build responsive, high-performance websites and applications using modern technologies to bring your ideas to life.",
        },
        {
            name: "SEO & OPTIMIZATION",
            image: "",
            des: "I help improve search engine rankings and site speed, ensuring your website performs at its best.",
        },
    ];

    const serviceCardsRef = useRef([]);
    const servicesSectionRef = useRef(null);

    useGSAP(() => {
        // Set initial state for all cards
        gsap.set(serviceCardsRef.current, {
            scale: 0.6,
            opacity: 0,
        });

        // Create timeline for each card
        serviceCardsRef.current.forEach((el, index) => {
            if (!el) return;

            let animationProps = {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
            };

            // Add different entrance animations
            if (index === 0) {
                animationProps.x = 0;
                gsap.set(el, { x: -200 });
            } else if (index === 2) {
                animationProps.x = 0;
                animationProps.rotation = 0;
                gsap.set(el, { x: 200, rotation: 60 });
            }

            // Create ScrollTrigger with scrub for each card
            ScrollTrigger.create({
                trigger: el,
                start: "top 90%",
                end: "top 30%",
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    gsap.to(el, {
                        ...animationProps,
                        duration: 0.1,
                        scale: 0.6 + (0.4 * progress),
                        opacity: progress,
                        x: index === 0 ? -200 + (200 * progress) : index === 2 ? 200 - (200 * progress) : 0,
                        rotation: index === 2 ? 60 - (60 * progress) : 0,
                    });
                },
                markers: false,
            });
        });
    }, { scope: servicesSectionRef });

    return (
        <section
            ref={servicesSectionRef}
            id="services"
            className="container mx-auto w-full h-fit px-4 md:px-40 py-10 overflow-hidden"
        >
            <div className="title flex items-center gap-2 mb-5">
                <h1 className="text-2xl font-bold text-[var(--p-color)]">SERVICES</h1>
                <div className="w-50 h-0.5 bg-[var(--p-color)]"></div>
            </div>

            <div className="services-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-15">
                {services.map((service, index) => (
                    <div
                        key={index}
                        ref={(el) => (serviceCardsRef.current[index] = el)}
                        className="card w-full bg-black rounded-2xl shadow-sm shadow-blue-500 overflow-hidden transform hover:scale-105 transition-transform duration-300"
                    >
                        <div className="image w-full h-[200px] bg-green-900"></div>
                        <div className="des p-5">
                            <h2 className="text-xl font-semibold">{service.name}</h2>
                            <p className="leading-relaxed opacity-70 mt-2">{service.des}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="relative left-1/2 translate-x-[-50%] font-semibold underline mt-10">
                SEE ALL
            </button>
        </section>
    );
};

export default Services;
