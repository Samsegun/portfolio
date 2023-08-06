const Contact = () => {
    return (
        <section className='text-white my-[3.75rem] xl:my-24 mx-[5%]'>
            <h1 className='heading'>Say Hello.</h1>

            <p
                className='md:text-2xl leading-6 md:leading-[30px]
             text-[#ffffffcc] font-lexend font-extralight'>
                Want to work together? Awesome! Send me a quick message.
            </p>

            <form className='mt-14 flex flex-col gap-4 xl:gap-6'>
                <div className='flex flex-col gap-4 xl:flex-row xl:gap-6'>
                    <input name='name' type='text' placeholder='Full Name' />
                    <input
                        name='email'
                        type='email'
                        placeholder='Email Address'
                    />
                </div>

                <textarea
                    name='message'
                    placeholder='Please enter your message'
                    className='h-36'></textarea>

                <button
                    type='button'
                    className='p-5 bg-[#6863FD] mt-8 rounded-md'>
                    Get in Touch
                </button>
            </form>
        </section>
    );
};

export default Contact;
