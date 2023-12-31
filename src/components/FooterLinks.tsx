const FooterLinks = () => {
    return (
        <div className='flex flex-wrap items-center justify-center gap-4 py-8'>
            <div
                className='border-[#ffffff28] border-[1px] hover:border-[#ffffffd9]
            transition-all duration-300
             opacity-75 hover:opacity-100 w-fit'>
                <a
                    href='https://twitter.com/samsegun10'
                    target='_blank'
                    className=' block w-full p-2'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 256 256'
                        focusable='false'
                        fill='#fff'
                        width={"20px"}>
                        <g>
                            <path d='M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z'></path>
                        </g>
                    </svg>
                </a>
            </div>

            <div
                className='border-[#ffffff28] border-[1px] hover:border-[#ffffffd9]
            transition-all duration-300
             opacity-75 hover:opacity-100 w-fit'>
                <a
                    href='https://linkedin.com/in/samuel-oyebade'
                    target='_blank'
                    className=' block w-full p-2'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 256 256'
                        focusable='false'
                        fill='#fff'
                        width={"20px"}>
                        <g>
                            <path d='M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z'></path>
                        </g>
                    </svg>
                </a>
            </div>

            <div
                className='border-[#ffffff28] border-[1px] hover:border-[#ffffffd9]
            transition-all duration-300
             opacity-75 hover:opacity-100 w-fit'>
                <a
                    href='https://github.com/samsegun'
                    target='_blank'
                    className=' block w-full p-2'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 30 30'
                        fill='#fff'
                        width={"20px"}>
                        {" "}
                        <path d='M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z' />
                    </svg>
                </a>
            </div>

            <p className='text-sm text-center font-lexend basis-full'>
                &copy;{new Date().getUTCFullYear()} Samuel Oyebade.
            </p>
        </div>
    );
};

export default FooterLinks;
