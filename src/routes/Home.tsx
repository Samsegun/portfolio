import Projects from "../components/Projects";
import { ScrollToTop } from "../components/ScrollToTop";
import Hero from "../components/hero";

const Home = () => {
    return (
        <>
            <Hero />

            <Projects />

            <ScrollToTop />
        </>
    );
};

export default Home;
