import "./App.css";
import Projects from "./components/Projects";
import Layout from "./components/Layout";
import Hero from "./components/hero";

function App() {
    return (
        <div className='bg-black'>
            <Layout>
                <main>
                    {/* <div id='detail'>
                <Outlet />
            </div> */}
                    <Hero />

                    <Projects />
                </main>
            </Layout>
        </div>
    );
}

export default App;
