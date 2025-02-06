import { Fragment } from "react";
import Article from "./Article";
import { projectData } from "../appData/projectsInfo";

const skippedData = projectData.filter(
    (_, idx) => idx !== 3 && idx !== projectData.length - 1
);

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
                {skippedData.map((item, idx) => (
                    <Fragment key={idx}>
                        <Article item={item} textStyle={textStyle} />
                    </Fragment>
                ))}
            </div>
        </section>
    );
};

export default Projects;
