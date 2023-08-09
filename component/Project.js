/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const project = [
    {
        name: 'Recruitment Portal',
        about: 'A recruitment plaform used by applicant and admin.',
        link: 'https://recruit.decagon.institute/',
        tools: ['React', 'Remix Run', 'Tailwindcss', 'Keycloak']
    },
    {
        name: 'Nexthandle',
        about: 'Nexthandle is an ecommerce application for trading gadgets between vendors and users.',
        link: 'https://www.nexthandle.com/',
        tools: ['React', 'Next.js', 'Nodejs/Express', 'React-Query']
    },
    {
        name: 'Symfony',
        about: 'Landing page and application page for an Ed-tech company',
        link: 'https://symfonyhq.com/',
        tools: ['React', 'Next.js', 'Nodejs/Express']
    },
    {
        name: 'Wedevelopers',
        about:
            'Wedeveloper is a platform for developers across the globe to enhance their skills, get jobs, work on project hereby gaining a lot of experience that is needed in the technology world.',
        link: 'https://wedevelopers.netlify.app/',
        tools: ['React', 'Redux', 'Nodejs/Express', 'MongoDB', 'Wordpress Api']
    },
    {
        name: 'MERN Auth Starter',
        about: 'A MERN stack boilerplate with authentication and authorization functionality.',
        link: 'https://mern-auth-starter.netlify.app/',
        img: '/images/mern.png',
        tools: ['React', 'Redux', 'Nodejs/Express', 'Sendgrid', 'MongoDB']
    },
    {
        name: 'Portfolio',
        about: 'Yeah, this website.',
        link: '/',
        tools: ['Next.js', 'Css', 'Netlify form']
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
                    <h3 className="name">{projects.name}</h3>
                    <div className="project-details">
                        <p>{projects.about}</p>
                        <div>
                            <div className="tools">{projects.tools.join(', ')}</div>
                            <a target="_blank" rel="noopener noreferrer" href={projects.link}>
                                Live
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
                        </div>
                    </div>
                </div>
            ))}

            <style jsx>
                {`
                    .project-wrapper {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-gap: 1rem;
                        margin-bottom: 6em;
                    }

                    .project {
                        padding: 1.5em 2.5em;
                        border-radius: 3px;
                        background: #276749;
                    }

                    .name {
                        font-size: 30px;
                    }

                    .tools {
                        display: flex;
                    }

                    .w-6 {
                        width: 1em;
                        height: 1em;
                    }

                    .project-details {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        min-height: 150px
                    }

                    .header {
                        margin-bottom: 10px;
                    }

                    a {
                        color: #f0fff4;
                        border-bottom: 1px solid #e7ab54;
                        color: #e7ab54;
                    }

                    @media screen and (max-width: 800px){
                        .project-wrapper {
                            grid-template-columns: 1fr;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default MainProject;
