import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./header/Navigation";
import FooterLinks from "./FooterLinks";

// type LayoutProps = {
//     children: React.ReactNode;
// };

const Layout = () => {
    return (
        <div className='bg-black'>
            <div className='w-11/12 mx-auto lg:w-4/5 max-w-[1920px] min-h-screen'>
                <header className='sticky top-0 bg-black'>
                    <Navigation />
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
