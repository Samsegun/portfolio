import { useFadeAnimation } from "../hooks/FadeAnimation";
import dp from "/assets/samsegun-fotor-20230726194147.png";
// import dp from "./assets/samsegun-fotor-20230726194147.png";

const Hero = () => {
    const scope = useFadeAnimation();

    return (
        <section className='my-[3.75rem] mx-[5%] xl:my-24' ref={scope}>
            <span className='block opacity-0 w-28 fade'>
                <img src={dp} alt='developer profile' />
            </span>

            <div className='opacity-0 fade'>
                <h1 className='heading'>
                    i'm sam. <br />
                    frontend developer.
                </h1>

                <p className='text-xl md:text-2xl lg:text-4xl leading-6 md:leading-[30px] text-[#ffffffcc] font-lexend font-extralight'>
                    I build User-Interfaces, an ardent reader, and a music
                    enthusiast.
                </p>
            </div>
        </section>
    );
};

export default Hero;
