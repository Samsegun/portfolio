import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ScrollToTop = () => {
    const routePath = useNavigate();
    const onTop = () => {
        window.scroll(0, 0);
    };

    useEffect(() => {
        onTop();
    }, [routePath]);

    return null;
};
