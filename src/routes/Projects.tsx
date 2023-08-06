import React from "react";

const data = [
    {
        img: "src/assets/trendies.png",
        title: "Trendies Shop",
        text: "Trendies is an E-commerce store where users can shop for their essential needs. It showcases clothes, jewelries and electronics. It also has a checkout functionality.",
    },
    {
        img: "src/assets/store2.png",
        title: "Audiophile Store",
        text: "Audiophile is an E-commerce platform that has different range of premium audio equipment. It also provides well-detailed information about available products.",
    },
    {
        img: "src/assets/tracker2.png",
        title: "IP Address Tracker",
        text: "A Tracker that provides users information such as IP Address, ISP provider, location and so on. The app also utilizes a map for better visuals about current location of an IP Address.",
    },
    {
        img: "src/assets/entertainment.png",
        title: "Entertainent App",
        text: "This app showcases fictional movies and TV shows. It has a log-in, bookmark, search functionality and some fancy animations.",
    },
    {
        img: "src/assets/weather.jpeg",
        title: "Open Weather App",
        text: "An app that enables users search for different cities around the world, providing current weather conditions, such as temperature, humidity, wind speed and so on.",
    },
];

const Projects = () => {
    return (
        <section className='text-white my-[3.75rem] xl:my-24 mx-[5%]'>
            <div>
                <h1 className='heading'>Projects</h1>

                <p
                    className='md:text-2xl leading-6 md:leading-[30px]
                    text-[#ffffffcc] font-lexend font-extralight'>
                    Have a look at some of the work I have completed.
                </p>
            </div>

            <div className='text-white font-lexend mx-[5%] md:mx-0 lg:mt-24'>
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
                                    className='font-lexend text-lg text-center lg:text-left
                                 tracking-[-0.3px]] md:w-1/2'>
                                    <p className='font-extralight text-[#ffffffcc] mt-4'>
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
