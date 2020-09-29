/* eslint-disable react/no-unescaped-entities */
const Showcase = () => {
    return (
        <section>
            <div>
                <div className="wrapper">
                    <article className="article">
                        <h2>
                            I build and <br /> work on
                        </h2>
                        <p>Open source projects, web applications.</p>
                        <a>
                            <div className="button">
                                see my work
                                <svg
                                    width="77"
                                    height="22"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </div>
                        </a>
                    </article>
                    <article className="article">
                        <h2>
                            Sometimes,
                            <br /> i write
                        </h2>
                        <p>About things i've learnt over my career.</p>
                        <a>
                            <div className="button">
                                read my articles
                                <svg
                                    width="77"
                                    height="22"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </div>
                        </a>
                    </article>
                </div>
            </div>
            <style jsx>{`
                section {
                    min-height: calc(100vh-8em);
                    position: sticky;
                    top: 10px;
                    z-index: 5;
                    background: #22543d;
                    border-top: 7px solid #b2f5ea;
                    overflow-x: hidden;
                }
                section > div {
                    display: flex;
                    justify-content: center;
                    padding: 8em 1em;
                    width: 100%;
                }
                .wrapper {
                    display: flex;
                    background: #276749;
                }

                .wrapper article:first-child {
                    border-right: 2px solid #22543d;
                }
                article {
                    width: 50%;
                    padding: 6em 5em;
                    white-space: nowrap;
                }

                h2 {
                    font-size: 2.5em;
                    line-height: 0.9;
                    padding-bottom: 16px;
                }

                p {
                    text-transform: lowercase;
                    padding-bottom: 16px;
                }
                a {
                    background: transparent;
                    display: inline-block;
                    border: 1px solid #e7ab54;
                    text-transform: uppercase;
                    color: #e7ab54;
                    cursor: pointer;
                    font-size: 14px;
                    white-space: nowrap;
                }
                svg {
                    width: 5em;
                    margin-left: 3px;
                }
                .button {
                    display: flex;
                    align-items: center;

                    padding: 0.5em 1em;
                }

                @media screen and (max-width: 700px) {
                    section {
                        top: -30vh;
                    }

                    section > div {
                        padding: 3.5em 1em;
                    }
                    .wrapper {
                        width: 100%;
                        flex-direction: column;
                    }

                    .wrapper article:first-child {
                        border-bottom: 2px solid #22543d;
                        border-right: none;
                    }
                    article {
                        width: 100%;
                        padding: 3.5em 13em;
                        padding-left: 3.5em;
                    }

                    h2 {
                        font-size: 2.2em;
                    }

                    a {
                        font-size: 13px;
                    }

                    @media screen and (max-width: 520px) {
                        section > div {
                            padding: 3.5em 1em;
                        }

                        article {
                            padding: 3.5em 6em;
                            padding-left: 2.5em;
                        }
                    }

                    @media screen and (max-width: 400px) {
                        article {
                            padding: 3.5em 3em;
                            padding-left: 2em;
                        }

                        h2 {
                            font-size: 1.7em;
                        }

                        p {
                            font-size: 13px;
                        }

                        a {
                            font-size: 11px;
                        }
                    }
                }
            `}</style>
        </section>
    );
};

export default Showcase;
