import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./header/Navigation";
import FooterLinks from "./FooterLinks";

// type LayoutProps = {
//     children: React.ReactNode;
// };

const Layout = () => {
    const [navIsActive, setNavIsActive] = useState(false);
    const location = useLocation();

    const navHandler = () => {
        setNavIsActive(prev => !prev);
    };

    useEffect(() => {
        setNavIsActive(false);
    }, [location]);

    return (
        <div className='bg-[#1a1a1a]'>
            <div className='w-11/12 mx-auto lg:w-4/5 max-w-[1920px] min-h-screen'>
                <header className='sticky top-0 z-20 bg-[#1a1a1a]'>
                    <Navigation
                        navHandler={navHandler}
                        navIsActive={navIsActive}
                    />
                </header>

                <main>
                    <Outlet />
                </main>

                <footer className='text-[#ffffffcc] mt-16'>
                    <hr />

                    <FooterLinks />
                </footer>
            </div>
        </div>
    );
};

export default Layout;
