import React from "react";

const data = [
    {
        img: "src/assets/trendies.png",
        title: "Trendies Shop",
        text: "Tech Stack - html css js",
    },
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
        <section className='text-white my-[3.75rem] xl:my-24 mx-[5%]'>
            <div>
                <h1 className='heading'>Projects</h1>

                <p
                    className='font-lexend text-[#ffffffcc]
                 text-sm font-light md:text-base'>
                    Have a look at some of the work I have completed.
                </p>
            </div>

            <div className='text-white font-lexend mx-[5%] md:mx-0 lg:mt-24'>
                <div>
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

                                <div
                                    className='basis-1/2 mt-8 font-lexend text-lg
                                 tracking-[-0.3px] md:text-center'>
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
            </div>
        </section>
    );
};

export default Projects;
