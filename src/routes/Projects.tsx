import React from "react";
import Article from "../components/Article";
import { useFadeAnimation } from "../hooks/FadeAnimation";

const data = [
    {
        img: "src/assets/trendies.png",
        title: "Trendies Shop",
        text: "Trendies is an E-commerce store where users can shop for their essential needs. It showcases clothes, jewelries and electronics. The payment gateway utilizes the PayStack API.",
    },
    {
        img: "src/assets/store2.png",
        title: "Audiophile Store",
        text: "Audiophile is an E-commerce platform that has different range of premium audio equipment. It also provides well-detailed information about available products.",
    },
    {
        img: "src/assets/tracker2.png",
        title: "IP Address Tracker",
        text: "A Tracker that provides users information such as IP Address, ISP provider, location and so on. The app also utilizes a map for better visuals about current location of the user.",
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

const textStyle = { width: "md:w-1/2", mt: "mt-4" };

const Projects = () => {
    const scope = useFadeAnimation();

    return (
        <section
            ref={scope}
            className='text-white my-[3.75rem] xl:my-24 mx-[5%]'>
            <div className='opacity-0 fade'>
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
                            <Article item={item} textStyle={textStyle} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
