/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const project = [
    {
        name: 'MERN Auth Starter',
        about: 'A MERN stack boilerplate with authentication and authorization functionality.',
        link: 'https://mern-auth-starter.netlify.app/',
        img: '/images/mern.png',
        tools: ['React', 'Nodejs', 'Express', 'Redux', 'Mongoose']
    },
    {
        name: 'Headless Blog App',
        about: 'A JAMstack Blog Site built with Next js and Ghost CMS.',
        link: 'https://bloggy.vercel.app/',
        img: '/images/blog.png',
        tools: ['Next js', 'Ghost CMS', 'JAMstack', 'Vercel']
    },
    {
        name: 'Geosearch',
        about:
            'geosearch is weather app that provides real time information about a particular location, weather information spanning upto the next seven daysof the location.',
        link: 'https://geoweatherapp.netlify.app',
        img: '/images/Geo-Search.png',
        tools: ['Javascript', 'Babel', 'Webpack', 'Netlify']
    },
    {
        name: 'Portfolio',
        about: 'Yeah, this very website.',
        link: '/',
        img: '/images/Portfolio.png',
        tools: ['Nextjs', 'Css', 'Netlify', 'Eslint', 'Prettier']
    },
    {
        name: 'Greeen',
        about:
            "Greeen is an online platform where users share their knowledge on everything agriculture. It's a community of individuals passionate about the greenlife.",
        link: 'https://github.com/petrepan/Greeen',
        img: '/images/greeen.png',
        tools: ['React', 'Redux', 'Express', 'Mongoose', 'Tailwind', 'NodeJs']
    },
    {
        name: 'Sitemarker',
        about:
            'A progressive web application that bookmarks all your favourite websites in one place for easy access. Features: Dark mode, offline mode, mobile app, localstorage.',
        link: 'https://sitemarker.netlify.app',
        img: '/images/SiteMarker.png',
        tools: ['Javascript', 'PWA', 'HTML/SCSS', 'Netlify']
    }
];

const MainProject = () => {
    // const refPlaceholder = React.useRef();

    // const removePlaceholder = () => {
    //     refPlaceholder.current.remove();
    // };

    return (
        <div className="project-wrapper">
            {project.map((projects, i) => (
                <div key={i} className="project">
                    <div className="project-img">
                        <img
                            src={projects.img}
                            alt={projects.img}
                            layout="responsive"
                        />
                    </div>
                    <div>
                        <p className="name">{projects.name}</p>
                    </div>
                    <div className="project-details">
                        <h3>
                            <a target="_blank" rel="noopener noreferrer" href={projects.link}>
                                {projects.name}
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
                        </h3>
                        <p>{projects.about}</p>
                        <div className="tools">
                            {projects.tools.map((tool, i) => (
                                <div key={i}> {tool}</div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            <style jsx>
                {`
                    .project-wrapper {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
                        grid-gap: 3rem;
                        margin: 6em 0;
                        margin-top: 2em;
                    }

                    .project {
                        position: relative;
                        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4), -1px -1px 2px rgba(0, 0, 0, 0.4);
                        border-radius: 3px;
                        background: white;
                        cursor: pointer;
                    }

                    .name {
                        position: absolute;
                        bottom: -30px;
                    }

                    h3 {
                        margin-bottom: 10px;
                    }

                    .project-img {
                        width: 100%;
                        height: 100%;
                    }

                    img {
                        height: 100%;
                        width: 100%;
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

                    a {
                        color: #f0fff4;
                        border-bottom: 1px solid;
                    }

                    .lazyimage {
                        position: absolute;
                        left: 0;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        animation: loadingAnimation 1s infinite;
                    }

                    @keyframes loadingAnimation {
                        0% {
                            background-color: #fff;
                        }
                        50% {
                            background-color: #ccc;
                        }
                        100% {
                            background-color: #fff;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default MainProject;
