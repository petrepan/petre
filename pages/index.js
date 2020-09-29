import Head from 'next/head';
import Layout from '../component/Layout';
import Hero from '../component/Hero';
import About from '../component/About';
import Showcase from '../component/Showcase';
import Contact from '../component/Contact';

const Home = () => {
    return (
        <Layout>
            <div>
                <Head>
                    <title>Peter Awotola: Frontend Developer</title>
                    <meta
                        name="description"
                        content="I'm a Front End Developer that specializes in building products for the web using current best practices in web development."
                    />
                </Head>
                <Hero />
                <About />
                <Showcase />
                <Contact />
            </div>
        </Layout>
    );
};

export default Home;
