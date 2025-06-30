import img1 from "../../assets/image 1.webp";
import img2 from "../../assets/image 2.webp";
import img3 from "../../assets/image 3.webp";
import img4 from "../../assets/image 4.webp";
import img5 from "../../assets/image 5.webp";
import img6 from "../../assets/image 6.webp";
import img7 from "../../assets/image 7.webp";
import img8 from "../../assets/image 8.webp";
import img9 from "../../assets/image 9.webp";
import img10 from "../../assets/image 10.webp";

const Skills = () => {
    let skills = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
    return (
        <>
            <section id="skills" className="container mx-auto w-full h-fit py-5 px-4 md:px-40">
                <div className="title text-[var(--p-color)] flex items-center gap-2 mb-5">
                    <h1 className="text-2xl font-bold">SKILLS</h1>
                    <div className="w-50 h-0.5 bg-[var(--p-color)] "></div>
                </div>
                <div className="relative w-full mt-10 overflow-hidden 
                  before:content-[''] before:absolute before:left-0 before:top-0 
                  before:w-20 before:h-full before:z-10 before:bg-gradient-to-r before:from-[#0f0f0f] before:to-transparent 
                  after:content-[''] after:absolute after:right-0 after:top-0 
                  after:w-20 after:h-full after:z-10 after:bg-gradient-to-l after:from-[#0f0f0f] after:to-transparent">
                    <div className="flex w-max animate-marquee ">
                        {[...skills, ...skills].map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                loading="lazy"
                                alt={`Skill ${index + 1}`}
                                className="w-[60px] h-[60px] object-contain mx-8"
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;