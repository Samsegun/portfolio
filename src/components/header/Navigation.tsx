import { useState } from "react";
import samsegun from "../../assets/samsegun-logo.png";
import navIcon from "../../assets/navIcon.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
    const [navIsActive, setNavIsActive] = useState(false);

    const navHandler = () => {
        setNavIsActive(prev => !prev);
    };

    return (
        <nav className='flex flex-wrap items-center justify-between py-4 md:py-8'>
            <div className='w-32 md:w-36'>
                <Link to='/'>
                    <img src={samsegun} alt='' />
                </Link>
            </div>

            <div className='hidden md:block md:basis-[45%] lg:basis-[40%] xl:basis-[30%] pr-8 lg:pr-0'>
                <ul
                    className='flex justify-between items-center text-white capitalize font-lexend
                          -tracking-[0.4px]'>
                    <li>
                        <Link to={"/about"}>about me</Link>
                    </li>
                    <li>
                        <Link to={"/projects"}>projects</Link>
                    </li>
                    <li className='bg-[#6863FD] px-6 py-3 rounded-lg'>
                        <Link to={"/contact"}>contact</Link>
                    </li>
                </ul>
            </div>

            {/* mobile nav section */}
            <div className='md:hidden'>
                <button type='button' onClick={navHandler}>
                    <img src={navIcon} alt='' />
                </button>
            </div>

            <div
                className={`basis-full ${
                    navIsActive ? "h-[15.7rem] opacity-100" : "h-0 opacity-0"
                } text-center flex items-center justify-center md:hidden duration-300 transition-all ease-linear`}>
                <ul
                    className='text-white capitalize font-lexend
                         text-sm -tracking-[0.3px]'>
                    <li
                        className={`my-8 ${
                            navIsActive
                                ? "translate-x-0 scale-100"
                                : "translate-x-8 scale-125"
                        }  duration-700 transition-all ease-linear`}>
                        <Link to={"/about"}>about me</Link>
                    </li>
                    <li
                        className={`my-8 ${
                            navIsActive
                                ? "translate-x-0 scale-100"
                                : "translate-x-6 scale-125"
                        } duration-700 transition-all ease-linear`}>
                        <Link to={"/projects"}>projects</Link>
                    </li>
                    <li
                        className={`my-8 bg-[#6863FD] px-5 py-2 font-bold rounded-lg tracking-wider ${
                            navIsActive
                                ? "translate-x-0 scale-100"
                                : "translate-x-4 scale-125"
                        } duration-700 transition-all ease-linear`}>
                        <Link to={"/contact"}>contact</Link>
                    </li>
                </ul>
            </div>
            {/* mobile nav section */}
        </nav>
    );
};

export default Navigation;
