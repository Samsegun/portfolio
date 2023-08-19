import React from "react";
import Article from "../components/Article";
import { useFadeAnimation } from "../hooks/FadeAnimation";
import { projectData } from "../appData/projectsInfo";
import { ScrollToTop } from "../components/ScrollToTop";

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
                    {projectData.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <Article item={item} textStyle={textStyle} />
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <ScrollToTop />
        </section>
    );
};

export default Projects;
