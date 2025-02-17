import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const onTop = () => {
    window.scroll(0, 0);
};

export const ScrollToTop = () => {
    const routePath = useNavigate();

    useEffect(() => {
        onTop();
    }, [routePath]);

    return null;
};
