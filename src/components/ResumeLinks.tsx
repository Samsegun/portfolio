import { Link } from "react-router-dom";

const ResumeLinks = () => {
    return (
        <div className='my-[3.75rem] xl:mt-20'>
            <h2
                className='text-white font-lexend 
                    text-3xl lg:text-[2rem] tracking-[-0.4px] mb-4'>
                Resume
            </h2>

            <section className='flex gap-4 flex-col md:flex-row'>
                <button
                    className='bg-[#6863FD] hover:bg-[#7e7aff] font-lexend rounded-lg tracking-wider
                      duration-150 transition-colors ease-linear'>
                    <Link className='p-4 inline-block' to='/resume'>
                        View Resume
                    </Link>
                </button>

                <button
                    className='bg-[#6863FD] hover:bg-[#7e7aff] font-lexend rounded-lg tracking-wider
                      duration-150 transition-colors ease-linear'>
                    <a
                        href='/assets/Samuel_Oyebade_CV.pdf'
                        download='SAMUEL_OYEBADE_CV.pdf'
                        className='p-4 inline-block'>
                        Download Resume
                    </a>
                </button>
            </section>
        </div>
    );
};

export default ResumeLinks;
