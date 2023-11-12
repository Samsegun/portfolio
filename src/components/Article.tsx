import { FC, useRef, MouseEvent, useState } from "react";
import { useInView } from "framer-motion";

type ArticleTypes = {
    item: { img: string; title: string; link: string; text: string };
    textStyle: { basis?: string; width?: string; mt?: string };
};

const Article: FC<ArticleTypes> = ({ item, textStyle }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [isHovered, setIsHovered] = useState(false);

    const mouseHandler = (e: MouseEvent) => {
        if (e.type === "mouseenter") {
            setIsHovered(true);
            return;
        }

        setIsHovered(false);
    };

    return (
        <article
            ref={ref}
            onMouseEnter={mouseHandler}
            onMouseLeave={mouseHandler}
            className={`mt-16 border-b-[1px] border-[grey] border-opacity-30
     transition-all duration-[900ms] project 
    ${isInView ? "translate-y-0 opacity-100" : "translate-y-48 opacity-0"} 
     `}>
            <a
                href={item.link}
                target='_blank'
                className='flex flex-col items-center justify-between gap-4 lg:flex-row
                 pb-8 transition-all duration-[900ms] project-link'>
                <div className='pb-5 lg:pb-0'>
                    <img
                        src={item.img}
                        alt={item.title}
                        className='rounded-2xl w-[298px] h-[345px]'
                    />
                </div>

                <div className='flex items-center gap-4 lg:gap-2'>
                    <h3 className='text-lg font-medium md:text-[1.4rem]'>
                        {item.title}
                    </h3>

                    <span
                        className={`transition-all duration-[900ms]
                 ${
                     isHovered
                         ? "translate-x-1 -translate-y-1"
                         : "translate-x-0 translate-y-0"
                 }`}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 256 256'
                            width={"20px"}
                            fill='rgb(253, 249, 176)'>
                            <g>
                                <path d='M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z'></path>
                            </g>
                        </svg>
                    </span>
                </div>

                <div
                    className={`${textStyle?.basis} font-lexend text-lg text-center lg:text-left
         tracking-[-0.3px] ${textStyle?.width}`}>
                    <p
                        className={`font-extralight text-[#ffffffcc] ${textStyle?.mt}`}>
                        {item.text}
                    </p>
                </div>
            </a>
        </article>
    );
};

export default Article;
