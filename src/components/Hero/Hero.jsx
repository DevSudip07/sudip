import { useGSAP } from "@gsap/react";
import heroImage from "../../assets/hero-image.png";
import Button from "../Button";
import gsap from "gsap";
import { useRef } from "react";
import Particles from "../Particles";
import TrueFocus from "../TrueFocus";



const Hero = () => {
    let myimg = useRef()

    useGSAP(() => {
        gsap.from(myimg.current, {
            scale: 0.3,
            direction: 0.4,
            delay: 0.2,
            ease: "power1.in"
        })
    })


    return (
        <>

            <div className="absolute" style={{ width: '100%', height: '600px', }}>
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={400}
                    particleSpread={12}
                    speed={0.1}
                    particleBaseSize={150}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
            <section
                id="hero"
                className="container mx-auto w-full h-fit pt-25 md:pt-0 min-h-screen flex items-center flex-col-reverse md:flex-row px-4 md:px-40 py-10 gap-10 text-white overflow-hidden"
            >

                <aside className="w-full text-center md:text-left">
                    <small className="text-sm font-semibold text-[var(--p-color)]">Hi, myself</small>
                    <TrueFocus
                        sentence="Sudip Das Ghosh."
                        manualMode={false}
                        blurAmount={5}
                        borderColor="blue"
                        animationDuration={2}
                        pauseBetweenAnimations={1}
                    />
                    <h4 className="text-lg md:text-lg leading-none font-medium opacity-80 mt-3">
                        I build clean, responsive websites and design smooth user experiences.
                    </h4>
                    <p className="text-sm md:text-base opacity-60 mt-4 mb-8 leading-relaxed">
                        I’m a frontend developer and UI/UX designer passionate about crafting seamless,
                        user-focused digital experiences. I specialize in building responsive websites
                        and interfaces that not only look great but also feel intuitive. Currently,
                        I’m creating accessible, modern web products at <span className=" text-[var(--p-color)] font-semibold">CodeCrafters</span>.
                    </p>
                    <Button title="RESUME" />
                </aside>

                {/* Right Image */}
                <aside className="w-full flex justify-center md:justify-end items-center">
                    <div ref={myimg} className="w-60 h-60 md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-lg bg-amber-400 flex justify-center items-center">
                        <img  loading="lazy" src={heroImage} alt="Hero" className="my-img w-full h-full object-cover object-top-right md:object-center md:object-contain" />
                    </div>

                </aside>
            </section>

        </>
    );
};

export default Hero;
