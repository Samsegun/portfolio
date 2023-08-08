import React, { useEffect } from "react";
import { useAnimate } from "framer-motion";

const useProjectAnimation = () => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(".project", { opacity: 1 }, { duration: 2 });
    }, [animate]);

    return scope;
};

const data = [
    {
        img: "src/assets/store2.png",
        title: "Audiophile Store",
        text: "An E-commerce store that meets the needs of audio enthusiasts.",
    },
    {
        img: "src/assets/tracker2.png",
        title: "IP Address Tracker",
        text: "A Tracker that provides information about an IP Address.",
    },
    {
        img: "src/assets/entertainment.png",
        title: "Entertainent App",
        text: "This app showcases different movies and shows.",
    },
    {
        img: "src/assets/weather.jpeg",
        title: "Open Weather App",
        text: "An app that provides weather-info of over 200,000 cities.",
    },
];

const Projects = () => {
    return (
        <section className='text-white font-lexend mx-[5%] lg:mt-24'>
            <h3 className='text-3xl lg:text-[2rem] tracking-[-0.4px] mb-4'>
                Projects
            </h3>
            <p className='font-extralight text-xl lg:text-2xl text-[#ffffffcc] '>
                Here are some projects I've completed.
            </p>

            <div>
                {data.map((item, idx) => (
                    <React.Fragment key={idx}>
                        <article
                            className='mt-12 pb-8 border-b-[1px] border-[grey] border-opacity-30
                         flex flex-col items-center justify-between gap-4 lg:flex-row project'>
                            <div>
                                <img
                                    src={item.img}
                                    alt='audiophile challenge'
                                    className='rounded-2xl w-[298px] h-[345px]'
                                />
                            </div>

                            <h3 className='text-lg font-medium md:text-[1.4rem]'>
                                {item.title}
                            </h3>

                            <div
                                className='basis-1/2 font-lexend text-lg text-center lg:text-left
                             tracking-[-0.3px]'>
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
