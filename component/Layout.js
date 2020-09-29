/* eslint-disable react/prop-types */
import { useState, useEffect, Fragment } from 'react';
import ScrollIndicator from './ScrollIndicator';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
    const [scrolled, setScrolled] = useState(0);
    const [navScroll, setNavScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', scrollProgress);
        return () => {
            window.removeEventListener('scroll', scrollProgress);
        };
    });

    const scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPX =
            document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = `${(scrollPx / winHeightPX) * 100}%`;

        setScrolled(scrolled);
        setNavScroll(scrollPx);
    };

    return (
        <Fragment>
            <ScrollIndicator scrolled={scrolled} setScrolled={setScrolled} />
            <Navbar scrolled={scrolled} setScrolled={setScrolled} navScroll={navScroll} />
            <main>{props.children}</main>
            <Footer />
        </Fragment>
    );
};

export default Layout;
