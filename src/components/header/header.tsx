import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
    const [navIsActive, setNavIsActive] = useState(false);
    const [navShadow, setNavShadow] = useState(false);
    const location = useLocation();

    const navIsFixed = () => {
        if (window.scrollY >= 50) {
            setNavShadow(true);
        } else {
            setNavShadow(false);
        }
    };

    const navHandler = () => {
        setNavIsActive(prev => !prev);
    };

    useEffect(() => {
        setNavIsActive(false);
    }, [location]);

    // useEffect(() => {
    window.addEventListener("scroll", navIsFixed);

    // clean up might not be necessary because layout never unmounts
    // for this website
    //     return function cleanupListener() {
    //         window.removeEventListener("scroll", navIsFixed);
    //     };
    // }, []);

    return (
        <div
            className={`sticky top-0 z-20 bg-[#1a1a1a] transition-all duration-300 ease-in-out py-4 md:py-6 ${
                navShadow ? "shadow-navshadow" : "shadow-none"
            }`}>
            <header className='w-11/12 mx-auto lg:w-4/5 max-w-[1920px]'>
                <Navigation navHandler={navHandler} navIsActive={navIsActive} />
            </header>
        </div>
    );
};

export default Header;
