/* eslint-disable react/no-unescaped-entities */
import { Fragment } from 'react';
import Head from 'next/head';
import Layout from '../component/Layout';
import MainProject from '../component/Project';
import utils from '../styles/utils.module.css';

const Project = () => {
    return (
        <Fragment>
            <Layout>
                <Head>
                    <title>Peter Awotola: Project</title>
                </Head>
                <section>
                    <div className={utils.container}>
                        <h3>Recent works</h3>
                        <MainProject />
                        <h3 className="header">Other projects</h3>
                        <div className="otherProject">
                            <h4>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://codepen.io/petrepan/pen/QWjreMW">
                                    Random Quote Generator{' '}
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
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                </a>
                            </h4>
                            <div>
                                <div>
                                    <span>Built with: </span>React, SCSS
                                </div>
                            </div>
                        </div>
                        <div className="otherProject">
                            <h4>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://codepen.io/petrepan/pen/MWaXobz">
                                    Markdown Previewer{' '}
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
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                </a>
                            </h4>
                            <div>
                                <div>
                                    <span>Built with: </span>React, Markedjs, CSS
                                </div>
                            </div>
                        </div>
                        <div className="otherProject">
                            <h4>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://hse-aid.herokuapp.com/">
                                    HSE_Aid "Coming soon page"{' '}
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
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                </a>
                            </h4>
                            <div>
                                <div>
                                    <span>Built with: </span>PHP, SQL, Heroku
                                </div>
                            </div>
                        </div>
                        <div className="otherProject">
                            <h4>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://codepen.io/petrepan/pen/NWGLdQy">
                                    Javascript Calculator{' '}
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
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                </a>
                            </h4>
                            <div>
                                <div>
                                    <span>Built with: </span>Javascript, CSS
                                </div>
                            </div>
                        </div>
                        <div className="otherProject">
                            <h4>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://codepen.io/petrepan/pen/dyYjYpP">
                                    Drum Machine{' '}
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
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                </a>
                            </h4>
                            <div>
                                <div>
                                    <span>Built with: </span>React, CSS
                                </div>
                            </div>
                        </div>
                        <div className="otherProject">
                            <h4>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://codepen.io/petrepan/pen/poJEvrg">
                                    Moment Replica{' '}
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
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                </a>
                            </h4>
                            <div>
                                <div>
                                    <span>Built with: </span>Javascript, CSS
                                </div>
                            </div>
                        </div>
                        <div className="otherProject">
                            <h4>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://codepen.io/petrepan/pen/NWGOKKo">
                                    Pomodoro Clock{' '}
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
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                </a>
                            </h4>
                            <div>
                                <div>
                                    <span>Built with: </span>React, SCSS
                                </div>
                            </div>
                        </div>
                        <div className="otherProject">
                            <h4>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://hoteltemplate.netlify.app/">
                                    Hotel Template{' '}
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
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                </a>
                            </h4>
                            <div>
                                <div>
                                    <span>Built with: </span>HTML, CSS, Javascript, Google Map Api
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
            <style jsx>{`
                .project-wrapper {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
                    grid-gap: 3rem;
                    margin: 6em 0;
                    margin-top: 2em;
                }

                .project {
                    position: relative;
                    box-shadow: 0px 8px 6px -6px rgba(235, 234, 242, 0.58);
                    border-radius: 3px;
                    background: white;
                    cursor: pointer;
                }

                .name {
                    position: absolute;
                    bottom: -30px;
                }

                .project-img {
                    width: 100%;
                }

                img {
                }

                .project-img svg {
                    width: 10em;
                }

                .w-6 {
                    width: 1em;
                    height: 1em;
                }

                .project-details {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    transform: scaleY(0);
                    flex-direction: column;
                    background: green;
                    overflow: hidden;
                    padding: 10px;
                    transition: all 0.4s ease-in-out;
                    opacity: 0;
                }

                .project:hover .project-details {
                    opacity: 0.9;
                    transform: scaleY(1);
                }

                .project-details p {
                    overflow-y: scroll;
                    margin-bottom: 40px;
                    padding-bottom: 10px;
                }

                .tools {
                    display: flex;
                    flex-wrap: wrap;
                    position: absolute;
                    bottom: 0;
                    padding: 10px 0;
                    padding-top: 20px;
                    margin-top: 30px;
                }

                .tools div {
                    margin-right: 8px;
                    border-bottom: 1px solid #fff;
                }

                .header {
                    margin-bottom: 10px;
                }

                .otherProject {
                    margin-bottom: 20px;
                    font-weight: 400;
                    font-size: 16px;
                    padding: 10px;
                    padding-left: 1px;
                }

                .otherProject h4 {
                    cursor: pointer;
                    display: inline-block;
                }

                .otherProject h4:before {
                    content: '>';
                    padding-right: 6px;
                }

                .otherProject h4:hover {
                    border-bottom: 1px solid #fff;
                }
            `}</style>
        </Fragment>
    );
};

export default Project;
