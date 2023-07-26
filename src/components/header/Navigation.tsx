import { useState } from "react";
import samsegun from "../../assets/samsegun-logo.png";
import navIcon from "../../assets/navIcon.svg";

const Navigation = () => {
    const [navIsActive, setNavIsActive] = useState(false);

    const navHandler = () => {
        setNavIsActive(prev => !prev);
    };

    return (
        <nav className='flex justify-between items-center flex-wrap py-4'>
            <div className='w-32'>
                {/* <a href='/'> */}
                <img src={samsegun} alt='' />
                {/* </a> */}
            </div>

            <div>
                <button type='button' onClick={navHandler}>
                    <img src={navIcon} alt='' />
                </button>
            </div>

            <div
                className={`basis-full ${
                    navIsActive ? "h-[15.7rem] opacity-100" : "h-0 opacity-0"
                } text-center flex items-center justify-center duration-300 transition-all ease-linear`}>
                <ul
                    className='text-white capitalize font-lexend
                         text-sm -tracking-[0.3px]'>
                    <li
                        className={`my-8 ${
                            navIsActive
                                ? "translate-x-0 scale-100"
                                : "translate-x-8 scale-125"
                        }  duration-700 transition-all ease-linear`}>
                        about me
                    </li>
                    <li
                        className={`my-8 ${
                            navIsActive
                                ? "translate-x-0 scale-100"
                                : "translate-x-6 scale-125"
                        } duration-700 transition-all ease-linear`}>
                        projects
                    </li>
                    <li
                        className={`my-8 bg-[#6863FD] px-5 py-2 font-bold rounded-lg tracking-wider ${
                            navIsActive
                                ? "translate-x-0 scale-100"
                                : "translate-x-4 scale-125"
                        } duration-700 transition-all ease-linear`}>
                        contact
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
