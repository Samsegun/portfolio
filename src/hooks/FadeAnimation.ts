import { useEffect } from "react";
import { useAnimate } from "framer-motion";

export const useFadeAnimation = () => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(".fade", { opacity: 1 }, { duration: 1 });
    }, [animate]);

    return scope;
};
