const Projects = () => {

    const projects = [
        {
            name: '"Hope for Every Child" – NGO Website',
            des: "A responsive, accessible, and emotion-driven website built for a fictional child-focused NGO. The goal was to build trust, increase donations, and spread awareness about child rights and welfare through a compelling digital experience.",
            tech: ["HTML", "CSS", "JS"],
            image: ""
        },
        {
            name: '"Hope for Every Child" – NGO Website',
            des: "A responsive, accessible, and emotion-driven website built for a fictional child-focused NGO. The goal was to build trust, increase donations, and spread awareness about child rights and welfare through a compelling digital experience.",
            tech: ["HTML", "CSS", "JS"],
            image: ""
        }
    ];

    return (
        <>
            <section id="projects" className="container mx-auto w-full h-fit py-10 px-4 md:px-40">
                <div className="title flex items-center gap-2 mb-5">
                    <h1 className="text-2xl font-bold">PROJECTS</h1>
                    <div className="w-50 h-0.5 bg-white"></div>
                </div>

                <div className="projectContainer w-full md:w-5/6 h-full mt-15 mx-auto">
                    {projects.map((project, index) => (
                        <div key={index} className={`project w-full h-[350px] my-20 flex items-center ${index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'
                            }`}>
                            <div className="image w-1/2 h-full rounded-2xl bg-red-700 shadow-sm shadow-blue-500"></div>

                            <div className={`des relative w-1/2 h-3/4 p-6 shadow-sm shadow-blue-500 ${index % 2 !== 0 ? 'rounded-l-2xl' : 'rounded-r-2xl'
                                }`}>
                                <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                                <p className="opacity-50 leading-5">{project.des}</p>
                                <div className="tech absolute bottom-5 w-full flex items-center gap-5 flex-wrap">
                                    {project.tech.map((tech, i) => (
                                        <h4 key={i} className="px-2 py-1 rounded bg-red-300 text-sm">
                                            {tech}
                                        </h4>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                
                <button className="relative left-1/2 translate-x-[-1/2] font-semibold underline">SEE ALL</button>
            </section>
        </>
    );
};

export default Projects;