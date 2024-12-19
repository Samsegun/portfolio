import { Outlet } from "react-router-dom";
import FooterLinks from "./FooterLinks";
import Header from "./header/header";
import { Analytics } from "@vercel/analytics/react";
import { SnowOverlay } from "react-snow-overlay";

const Layout = () => {
    return (
        <div className='bg-[#1a1a1a]'>
            <SnowOverlay maxParticles={50} />

            <Header />

            <div className='w-11/12 mx-auto lg:w-4/5 max-w-[1920px] min-h-screen'>
                <main>
                    <Outlet />
                </main>

                <footer className='text-[#ffffffcc] mt-16'>
                    <hr />

                    <FooterLinks />
                </footer>
            </div>
            <Analytics />
        </div>
    );
};

export default Layout;
