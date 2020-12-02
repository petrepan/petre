/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Head from 'next/head';

const Resume = () => {
    return (
        <section>
            <Head>
                <title>Peter Awotola: Resume</title>
            </Head>
            <div className="wrapper">
                <div className="link">
                    <Link href="https://petre.netlify.app">
                        <a className="contact-sm">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="home"
                                className="svg-inline--fa fa-home fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    fill="currentColor"
                                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                            </svg>
                        </a>
                    </Link>
                    <a
                        className="contact-sm"
                        rel="noopener noreferrer"
                        href="mailto:peterawotola@gmail.com">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="envelope"
                            className="svg-inline--fa fa-envelope fa-w-16"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path
                                fill="currentColor"
                                d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                        </svg>
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://linkedin.com/in/petrepan">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="linkedin"
                            className="svg-inline--fa fa-linkedin fa-w-14"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <path
                                fill="#3182CE"
                                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                        </svg>
                    </a>
                    <a>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <span>Download</span>
                    </a>
                </div>
                <div className="skills">
                    <section className="contact">
                        <Link href="https://petre.netlify.app">
                            <a>petre.netlify.app</a>
                        </Link>
                        <a rel="noopener noreferrer" href="mailto:peterawotola@gmail.com">
                            peterawotola@gmail.com
                        </a>
                        <div>Lagos, Nigeria</div>
                    </section>
                    <section className="tech">
                        <h3>Core Technologies:</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>Sass</li>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>NodeJs</li>
                            <li>ExpressJs</li>
                            <li>MongoDb</li>
                            <li>CSS-in-JS</li>
                            <li>Bootstrap</li>
                            <li>JAMstack</li>
                        </ul>
                    </section>

                    <section className="others">
                        <h3>Others</h3>
                        <ul>
                            <li>Responsive web design</li>
                            <li>PWAs</li>
                            <li>Ejs</li>
                            <li>Heroku</li>
                            <li>SEO</li>
                            <li>CMS</li>
                        </ul>
                    </section>
                </div>
                <div className="about">
                    <section className="bio">
                        <h1>Awotola Peter</h1>
                        <p>Frontend Developer and Technical Writer</p>
                        <p>
                            Software developer with robust problem solving skills and passion for
                            building products with enhanced user experience and maximizing user
                            interface. I’m always ready to adapt according to project specifications
                            irrespective of stack.
                        </p>
                    </section>
                    <section className="tech-sm">
                        <h3>Core Technologies</h3>
                        <p>
                            JavaScript, Sass, React, Next.js, NodeJs, ExpressJs, MongoDb, CSS-in-JS,
                            PWAs, SEO, Performance Optimization, CMS, JAMstack
                        </p>
                    </section>
                    <section className="exp">
                        <h3>Experience</h3>
                        <div className="exp-wrapper">
                            <div>
                                <header>
                                    <h4>Build for SDG - Andela and Facebook</h4>{' '}
                                    <span>Aug 2020 - Nov 2020</span>
                                </header>
                                <p>
                                    Contributing to open source project and building industry-led
                                    projects that gives high value, high impact in real world
                                    experience.
                                </p>
                                <ul>
                                    <li>
                                        Collaborated with back-end engineers and contribute to the
                                        design of APIs to improve the user experience
                                    </li>
                                    <li>
                                        Crafted secure, performant, cross-platform browser
                                        applications
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <header>
                                    <h4>Google Africa Developer Scholarship</h4>{' '}
                                    <span>May 2020 - Oct 2020</span>
                                </header>
                                <p>
                                    One of 30000 developers supported by the Andela Learning
                                    Community to upskill on important Google technologies.
                                </p>
                                <ul>
                                    <li>Top 2000 developer in the weekly leaderboard challenge</li>
                                    <li>
                                        Aced Plurasight skill IQ with an IQ of 271 out of 300 in
                                        "Building websites with JavaScript"
                                    </li>
                                    <li>
                                        Hands on practice with standard core web technologies like
                                        JavaScript
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <header>
                                    <h4>
                                        HNG Internship <span>- Frontend Developer</span>
                                    </h4>{' '}
                                    <span>May 2020 - July 2020</span>
                                </header>
                                <p>
                                    I developed various frontend infrastructure, design and
                                    functionality over the course of the internship.
                                </p>
                                <ul>
                                    <li>
                                        Worked closely with designers and the management team to
                                        convert designs into pixel perfect mockups which was sold on
                                        envato market.
                                    </li>
                                    <li>
                                        Designed and implemented a cross-browser, IE 11 compatible
                                        marketing site for the product.
                                    </li>
                                    <li>
                                        Used various collaboration tools on a daily basis to
                                        communicate and work with product managers, developers and
                                        designers.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <header>
                                    <h4>DevCTrainingWithAndela</h4> <span>Aug 2019 - Dec 2019</span>
                                </header>
                                <ul>
                                    <li>
                                        Crafted and Orchestrated successful development of a web
                                        application with accesibility, responsive design, solid code
                                        structure as a priority
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="edu">
                        <h3>Education</h3>
                        <p>Ekiti State University - B.Agric</p>
                        <span>2013 - 2019</span>
                    </section>
                    <section className="project">
                        <h3>Projects</h3>
                        <p>
                            Links to my works can be found on{' '}
                            <Link href="https://petre.netlify.app/project">
                                <a>petre.netlify.app/projects</a>
                            </Link>
                        </p>
                    </section>
                </div>
            </div>
            <style jsx>{`
                .wrapper {
                    position: relative;
                    display: flex;
                    max-width: 1200px;
                    margin: 5em auto;
                    padding: 5em 5em;
                    background: #f0fff4;
                    color: #474747;
                }

                a {
                    cursor: pointer;
                }

                .link {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    display: inline-flex;
                    align-items: end;
                    font-size: 0.95em;
                }

                .link svg {
                    width: 1em;
                    height: 1em;
                    vertical-align: top;
                }

                .link a {
                    margin-left: 7px;
                }

                .link span {
                    font-size: 12px;
                }

                .link a:hover {
                    opacity: 0.7;
                }

                .contact-sm {
                    display: none;
                }

                .link a:last-child {
                    display: flex;
                }

                .skills {
                    margin-right: 4em;
                }

                .skills section {
                    margin-bottom: 2em;
                }

                .skills h3 {
                    color: green;
                    margin-bottom: 4px;
                }

                .skills .contact a {
                    cursor: pointer;
                    display: inline-block;
                    border-bottom: 1px solid green;
                    color: green;
                }

                .skills .contact a,
                .skills .contact div {
                    margin-bottom: 5px;
                    font-weight: normal;
                }

                .skills li {
                    font-size: 15px;
                    padding-bottom: 4px;
                }

                .skills li:before {
                    content: '◼';
                    font-size: 14px;
                    padding-right: 5px;
                    opacity: 0.8;
                }

                .about h3 {
                    color: green;
                    font-size: 24px;
                    padding: 8px 0;
                    padding-bottom: 10px;
                }

                .bio {
                    border-bottom: 1px solid green;
                }

                .bio h1,
                .bio p {
                    width: 80%;
                }

                .bio h1 {
                    font-size: 58px;
                    color: green;
                }

                .bio p {
                    padding-bottom: 22px;
                    line-height: 1.6;
                }

                .tech-sm {
                    display: none;
                }

                .exp {
                    padding: 22px 0;
                    line-height: 1.6;
                }

                .exp-wrapper div {
                    margin-bottom: 15px;
                }

                .exp header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-bottom: 5px;
                }

                .exp header h4 {
                    color: green;
                }

                .exp header span {
                    font-size: 15px;
                    opacity: 0.8;
                }

                .exp-wrapper div li {
                    line-height: 1.7;
                    margin-left: 1em;
                    text-indent: -1.1em;
                }

                .exp-wrapper div li:before {
                    content: '◼';
                    padding-right: 5px;
                    opacity: 0.8;
                    font-size: 14px;
                }

                .edu span {
                    font-size: 14px;
                    opacity: 0.8;
                }

                .project a {
                    color: green;
                    border-bottom: 1px solid;
                    cursor: pointer;
                }

                @media screen and (max-width: 900px) {
                    .wrapper {
                        flex-direction: column;
                    }

                    .contact-sm {
                        display: block;
                    }

                    .skills {
                        display: none;
                    }

                    .tech-sm {
                        display: block;
                        border-bottom: 1px solid green;
                        padding: 10px 0;
                        padding-bottom: 25px;
                    }

                    .bio h1,
                    .bio p {
                        width: 100%;
                    }
                }

                @media screen and (max-width: 700px) {
                    .wrapper {
                        max-width: 1200px;
                        margin: 5em 1em;
                        padding: 4em 2.2em;
                    }
                }

                @media screen and (max-width: 550px) {
                    .wrapper {
                        margin: 5em 0.5em;
                        padding: 4em 1.2em;
                    }

                    .bio h1 {
                        font-size: 40px;
                    }

                    .bio p {
                        padding-bottom: 14px;
                        line-height: 1.6;
                        font-size: 15px;
                    }

                    .about h3 {
                        font-size: 20px;
                    }

                    .about p {
                        font-size: 15px;
                    }

                    .exp-wrapper div li {
                        font-size: 14px;
                    }

                    .exp-wrapper div li:before {
                        font-size: 12px;
                    }

                    .exp header {
                        align-items: start;
                        flex-direction: column;
                        padding-bottom: 5px;
                    }

                    .exp header h4 {
                        font-size: 15px;
                        color: green;
                    }

                    .exp header span {
                        font-size: 12px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Resume;
