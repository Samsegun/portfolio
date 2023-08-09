import { FC, useRef } from "react";
import { useInView } from "framer-motion";

type ArticleTypes = {
    item: { img: string; title: string; text: string };
    textStyle: { basis?: string; width?: string; mt?: string };
};

const Article: FC<ArticleTypes> = ({ item, textStyle }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <article
            ref={ref}
            className={`mt-12 pb-8 border-b-[1px] border-[grey] border-opacity-30
     flex flex-col items-center justify-between gap-4 lg:flex-row
     transition-all duration-[900ms] project
    ${isInView ? "transform-none opacity-100" : "translate-y-48 opacity-0"}
     `}>
            <div>
                <img
                    src={item.img}
                    alt={item.title}
                    className='rounded-2xl w-[298px] h-[345px]'
                />
            </div>

            <h3 className='text-lg font-medium md:text-[1.4rem]'>
                {item.title}
            </h3>

            <div
                className={`${textStyle?.basis} font-lexend text-lg text-center lg:text-left
         tracking-[-0.3px] ${textStyle?.width}`}>
                <p
                    className={`font-extralight text-[#ffffffcc] ${textStyle?.mt}`}>
                    {item.text}
                </p>
            </div>
        </article>
    );
};

export default Article;
