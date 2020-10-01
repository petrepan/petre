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
                .w-6 {
                    width: 1em;
                    height: 1em;
                }
                a {
                    color: #f0fff4;
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
