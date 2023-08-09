import Link from 'next/link';
/* eslint-disable react/no-unescaped-entities */
import utils from '../styles/utils.module.css';

const Hero = () => {
    return (
        <section>
            <div className="herofooter">
                <img
                    src="https://res.cloudinary.com/petrepan/image/upload/v1601566765/footer-pttrn.09157649_dea0ok.svg"
                    alt="african pattern"
                />
            </div>
            <div className={utils.container}>
                <div className="article">
                    <article>
                        <h6 className={utils.fontSm}>Hi! My Name is Peter, I'm a</h6>
                        <h1 className={utils.fontLg}>
                            Software Engineer<span>.</span>
                        </h1>
                        <p className={utils.fontLg}>I enjoy building products for the web.</p>
                        <div className="btn-wrapper">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                className="button"
                                href="https://docs.google.com/document/d/1YGy_ZGVJWzabP1b5X1TLepozSb58Ehq_jXr9uy8HORQ/edit?usp=sharing">
                                <span>View Resume</span>
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
                            </a>
                            <Link href="/project">
                                <a className="project-btn">
                                    <span>Featured Work</span>
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
                                </a>
                            </Link>
                        </div>
                    </article>
                </div>
            </div>
            <style jsx>{`
                section {
                    position: relative;
                    height: 80vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #c6f6d5;
                    overflow: hidden;
                }

                .herofooter {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 45px;
                }

                img {
                    width: 100%;
                    object-fit: cover;
                    height: 100%;
                }

                .article {
                    display: flex;
                    margin-top: -7em;
                }

                .article p {
                    line-height: 0.9;
                    margin-top: 20px;
                }

                article {
                }

                h6 {
                    font-weight: 800;
                    padding-left: 0.1em;
                    margin-bottom: 10px;
                    color: #e7ab54;
                }

                .btn-wrapper {
                    display: flex;
                }

                a {
                    background: transparent;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #e7ab54;
                    // height: 65px;
                    // padding: 1em 2em;
                    font-weight: 600;
                    text-transform: uppercase;
                    color: #e7ab54;
                    cursor: pointer;
                    font-size: 18px;
                    margin-top: 32px;
                }

                .project-btn {
                    margin-left: 30px;
                    background: #e7ab54;
                    color: #22543d;
                }

                svg {
                    width: 1.5em;
                    margin-left: 20px;
                }
                // .button {
                //     display: flex;
                //     align-items: center;
                // }

                @media screen and (max-width: 500px) {
                    .btn-wrapper svg {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
