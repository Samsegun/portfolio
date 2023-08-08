import { useEffect } from "react";
import { useAnimate } from "framer-motion";
import dp from "../assets/samsegun-fotor-20230726194147.png";

const useHeroAnimation = () => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(".hero", { opacity: 1 }, { duration: 1.5 });
    }, [animate]);

    return scope;
};

const Hero = () => {
    const scope = useHeroAnimation();

    return (
        <section className='my-[3.75rem] mx-[5%] xl:my-24' ref={scope}>
            <span className='block w-28 opacity-0 hero'>
                <img src={dp} alt='developer profile' />
            </span>

            <div className='opacity-0 hero'>
                <h1 className='heading'>
                    i'm sam. <br />
                    front-end developer.
                </h1>

                <p className='text-xl md:text-2xl lg:text-4xl leading-6 md:leading-[30px] text-[#ffffffcc] font-lexend font-extralight'>
                    I build User-Interfaces, drink coffee, oh and a music
                    enthusiast.
                </p>
            </div>
        </section>
    );
};

export default Hero;
