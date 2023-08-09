import { Fragment } from "react";
import Article from "./Article";

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

const textStyle = { basis: "basis-1/2" };

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
                    <Fragment key={idx}>
                        <Article item={item} textStyle={textStyle} />
                    </Fragment>
                ))}
            </div>
        </section>
    );
};

export default Projects;
