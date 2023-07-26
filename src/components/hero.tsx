import dp from "../assets/samsegun-fotor-20230726194147.png";

const Hero = () => {
    return (
        <section className='my-[3.75rem] mx-[5%]'>
            <span className='block w-28'>
                <img src={dp} alt='developer profile' />
            </span>

            <div>
                <h1
                    className='font-lora font-medium text-[2.88rem]
                         -tracking-[0.3px] text-white capitalize leading-[52.9px] my-4'>
                    i'm sam. <br />
                    front-end developer.
                </h1>

                <p className='font-lexend font-extralight text-xl text-white leading-6'>
                    I build User-Interfaces, drink coffee, oh and a music
                    enthusiast.
                </p>
            </div>
        </section>
    );
};

export default Hero;
