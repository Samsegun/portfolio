import dp from "../assets/samsegun-fotor-20230726194147.png";

const Hero = () => {
    return (
        <section className='my-[3.75rem] mx-[5%]'>
            <span className='block w-28'>
                <img src={dp} alt='developer profile' />
            </span>

            <div>
                <h1
                    className='font-lora font-medium text-[2.88rem] md:text-[3.6rem]
                         -tracking-[0.3px] text-white capitalize leading-[52.9px]
                          md:leading-[66.7px] my-4'>
                    i'm sam. <br />
                    front-end developer.
                </h1>

                <p className='text-xl md:text-2xl leading-6 md:leading-[30px] text-white font-lexend font-extralight'>
                    I build User-Interfaces, drink coffee, oh and a music
                    enthusiast.
                </p>
            </div>
        </section>
    );
};

export default Hero;
