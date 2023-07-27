import React from "react";

const data = [
    {
        img: "src/assets/store2.png",
        title: "Audiophile Store",
        text: "Tech Stack - html css js",
    },
    {
        img: "src/assets/tracker2.png",
        title: "IP Address Tracker",
        text: "Tech Stack - html css js react",
    },
    {
        img: "src/assets/entertainment.png",
        title: "Entertainent App",
        text: "Tech Stack - html css js",
    },
    {
        img: "src/assets/weather.jpeg",
        title: "Open Weather App",
        text: "Tech Stack - html css js",
    },
];

const Projects = () => {
    return (
        <section className='text-white font-lexend mx-[5%]'>
            <h3 className='text-3xl tracking-[-0.4px] mb-4'>Projects</h3>
            <p className='font-extralight text-xl text-[#ffffffcc] '>
                Here are some projects I've completed.
            </p>

            <div className=''>
                {data.map((item, idx) => (
                    <React.Fragment key={idx}>
                        <article
                            className='mt-12 pb-8 border-b-[1px] border-[grey] border-opacity-30
                         md:flex md:items-center md:justify-between project'>
                            <div>
                                <img
                                    src={item.img}
                                    alt='audiophile challenge'
                                    className='rounded-2xl w-[298px] h-[345px]'
                                />
                            </div>

                            <div className='basis-1/2 mt-8 font-lexend text-lg tracking-[-0.3px]'>
                                <h3 className='md:text-[1.4rem]'>
                                    {item.title}
                                </h3>
                                <p className='font-extralight text-[#ffffffcc] '>
                                    {item.text}
                                </p>
                            </div>
                        </article>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Projects;
