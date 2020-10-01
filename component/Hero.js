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
                        <h6 className={utils.fontSm}>Hi, I'm a</h6>
                        <h1 className={utils.fontLg}>
                            Frontend Developer<span>.</span>{' '}
                        </h1>
                        <p className={utils.fontLg}>I enjoy building products for the web.</p>
                        <Link href="/resume">
                            <a>
                                <div className="button">
                                    View Resume{' '}
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
                        </Link>
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

                a {
                    background: transparent;
                    display: inline-block;
                    border: 1px solid #e7ab54;
                    padding: 0.5em 1em;
                    text-transform: uppercase;
                    color: #e7ab54;
                    cursor: pointer;
                    font-size: 14px;
                    margin-top: 32px;
                }
                svg {
                    width: 5em;
                    margin-left: 3px;
                }
                .button {
                    display: flex;
                    align-items: center;
                }

                @media screen and (max-width: 500px) {
                    section {
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
