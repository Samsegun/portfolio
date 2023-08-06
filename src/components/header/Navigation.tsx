import { FC } from "react";
import samsegun from "../../assets/samsegun-logo.png";
import navIcon from "../../assets/navIcon.svg";
import { Link } from "react-router-dom";

type NavProps = {
    navIsActive: boolean;
    navHandler: () => void;
};

const Navigation: FC<NavProps> = ({ navHandler, navIsActive }) => {
    return (
        <nav className='relative flex flex-wrap items-center justify-between py-4 md:py-8'>
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
                    <li className='bg-[#6863FD] rounded-lg'>
                        <Link to={"/contact"} className='block px-6 py-3'>
                            contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* mobile nav section starts here */}
            <div className='md:hidden'>
                <button type='button' onClick={navHandler}>
                    <img src={navIcon} alt='' />
                </button>
            </div>

            <div
                className={`bg-black absolute h-72 left-0 right-0 top-0 -z-10 ${
                    navIsActive ? "-translate-y-0" : "-translate-y-full"
                } text-center flex items-center justify-center md:hidden
                 duration-300 transition-all ease-linear`}>
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
                        className={`my-8 bg-[#6863FD] font-bold rounded-lg tracking-wider ${
                            navIsActive
                                ? "translate-x-0 scale-100"
                                : "translate-x-4 scale-125"
                        } duration-700 transition-all ease-linear`}>
                        <Link to={"/contact"} className='block px-5 py-2'>
                            contact
                        </Link>
                    </li>
                </ul>
            </div>
            {/* mobile nav section ends here */}
        </nav>
    );
};

export default Navigation;
