import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Services = () => {

    const services = [
        {
            name: "UIUX DESIGN",
            image: "",
            des: "I design intuitive, user-centered interfaces that enhance the experience and engagement of your users. From wireframes to high-fidelity prototypes — I bring your product's vision to life."
        },
        {
            name: "UIUX DESIGN",
            image: "",
            des: "I design intuitive, user-centered interfaces that enhance the experience and engagement of your users. From wireframes to high-fidelity prototypes — I bring your product's vision to life."
        },
        {
            name: "UIUX DESIGN",
            image: "",
            des: "I design intuitive, user-centered interfaces that enhance the experience and engagement of your users. From wireframes to high-fidelity prototypes — I bring your product's vision to life."
        },
    ];

    let serivesCards = useRef([]);
    let serivesSection = useRef(null)
    let tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1 },
        scrollTrigger: {
            trigger: serivesSection.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 3,
            markers: true,
        },
    });

    useGSAP(() => {
        serivesCards.current.forEach((val, index) => {
            if (index === 0) {
                tl.from(
                    val,
                    {
                        x: -200,
                        opacity: 0,
                        rotate: -60,
                        scale: 0.8,
                    },
                    "start"
                );
            }

            if (index === 1) {
                tl.from(
                    val,
                    {
                        scale: 0,
                        opacity: 0,
                        rotate: 20,
                    },
                    "start+=0.2"
                );
            }

            if (index === 2) {
                tl.from(
                    val,
                    {
                        x: 200,
                        opacity: 0,
                        rotate: 60,
                        scale: 0.8,
                    },
                    "start+=0.4"
                );
            }
        });
    });


    return (
        <>
            <section ref={serivesSection} id="services" className="conatiner mx-auto w-full h-fit px-4 md:px-40 py-10 overflow-hidden">
                <div className="title flex items-center gap-2 mb-5">
                    <h1 className="text-2xl font-bold text-[var(--p-color)]">SERVICES</h1>
                    <div className="w-50 h-0.5 bg-[var(--p-color)]"></div>
                </div>
                <div className="servicesContainer container mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-15 mt-15">
                    {services.map((service, index) => (
                        <div ref={(el) => (serivesCards.current[index] = el)} key={index} className="card w-full bg-black rounded-2xl shadow-sm shadow-blue-500 overflow-hidden">
                            <div className="image w-full h-[200px] bg-green-900"></div>
                            <div className="des p-5">
                                <h2 className="text-xl font-semibold">{service.name}</h2>
                                <p className="leading-none opacity-50 mt-2">{service.des}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="relative left-1/2 translate-x-[-1/2] font-semibold underline mt-15">SEE ALL</button>
            </section>
        </>
    );
};

export default Services;