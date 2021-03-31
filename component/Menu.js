/* eslint-disable react/prop-types */
import Link from 'next/link';
import menu from '../styles/menu.module.css';

const Menu = ({ open }) => (
    <nav className={`${!open ? menu.menuClose : menu.menuOpen}`}>
        <div className="bg"></div>
        <div className="wrapper">
            <div className="navItem">
                <div className="navLinks">
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/project">
                                <a>Project</a>
                            </Link>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://dev.to/petrepan_">
                                Blog
                            </a>
                        </li>
                        <li>
                            <Link
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://res.cloudinary.com/petrepan/image/upload/v1617199764/Peter_Awotola_Resume.pdf">
                                <a>Resume</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>SAY HELLO</h3>
                    <ul>
                        <li>
                            <a rel="noopener noreferrer" href="mailto:peterawotola@gmail.com">
                                peterawotola@gmail.com
                            </a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="https://wa.me/08101211029">
                                08101211029
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="social">
                <ul>
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/petrepan">
                            <svg
                                width="77"
                                height="22"
                                aria-hidden="true"
                                data-icon="github-alt"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 480 512">
                                <path
                                    fill="#276749"
                                    d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://dev.to/petrepan_">
                            <svg
                                width="77"
                                height="22"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="dev"
                                className="svg-inline--fa fa-dev fa-w-14"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path
                                    fill="currentColor"
                                    d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://linkedin.com/in/petrepan">
                            <svg
                                width="77"
                                height="22"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="linkedin-in"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path
                                    fill="#276749"
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://twitter.com/petrepan_">
                            <svg
                                width="77"
                                height="22"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="twitter"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path
                                    fill="#276749"
                                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://codepen.io/petrepan">
                            <svg
                                width="77"
                                height="22"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="codepen"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path
                                    fill="#276749"
                                    d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <style jsx>{`
            nav {
                position: fixed;
                top: 0px;
                right: 0px;
                color: var(--primary-deep-colour);
                background: var(--primary-light-colour);
                width: 100%;
                height: 100vh;
                transition: all 0.4s ease-in-out;
                z-index: 11;
            }

            .bg {
                position: absolute;
                left: 0;
                width: 100%;
                color: #22543d;
                clip-path: polygon(9% 0, 46% 42%, 62% 100%, 0 100%, 0 0);
                -webkit-clip-path: polygon(9% 0, 46% 42%, 62% 100%, 0 100%, 0 0);
                height: 100%;
                background: #c6f6d5;
                z-index: 12;
            }

            .navItem {
                display: flex;
                flex-direction: column;
                text-align: right;
                padding: 2em;
                padding-right: 2.5em;
                position: absolute;
                right: 0;
                top: 15%;
                z-index: 34;
            }

            a {
                color: var(--primary-deep-colour);
            }

            li {
                transition: all 0.4s;
            }

            li:hover {
                transform: scale(1.06);
            }

            svg {
                width: 3em;
                height: 2em;
                opacity: 0.8;
            }

            svg:hover {
                opacity: 1;
            }

            .navLinks {
                margin-bottom: 1.5em;
            }
            .navLinks a {
                font-size: 46px;
                font-weight: 700;
            }

            .social {
                z-index: 67;
                position: absolute;
                bottom: 20px;
                padding: 1em;
            }

            .social:after {
                content: '';
                width: 3px;
                height: 6em;
                display: inline-block;
                background: #276749;
                margin-left: 1.4em;
            }

            .social li {
                margin-bottom: 10px;
                cursor: pointer;
            }

            .contact h3 {
                font-size: 28px;
                position: relative;
                margin-bottom: 10px;
            }

            .contact h3:after {
                content: '';
                width: 90%;
                height: 10px;
                background: #276749;
                position: absolute;
                left: 24px;
                bottom: 0.3em;
                z-index: -99;
            }

            .contact li {
                margin-bottom: 5px;
            }

            .contact a {
                border-bottom: 1px solid;
                opacity: 0.7;
            }

            .contact a:hover {
                opacity: 1;
            }

            @media screen and (max-width: 600px) {
                .navLinks a {
                    font-size: 28px;
                    font-weight: 700;
                }

                svg {
                    width: 2em;
                    height: 1.5em;
                }

                .social:after {
                    width: 2px;
                    height: 6em;
                    margin-left: 0.9em;
                }

                .navItem {
                    padding-right: 1.6em;
                    top: 13%;
                }

                .contact h3 {
                    font-size: 24px;
                }
            }
        `}</style>
    </nav>
);

export default Menu;
