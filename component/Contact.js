/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import utils from '../styles/utils.module.css';

const encode = (data) => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
};

const Contact = () => {
    const [value, setValue] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        return setValue({ ...value, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...value })
        })
            .then(() => alert('Form has been submitted successfully!'))
            .catch((error) => alert(error));

        e.preventDefault();
    };
    return (
        <section id="contact">
            <div className={utils.container}>
                <div className="wrapper">
                    <article>
                        <h2>i'd really love to hear from you</h2>
                        <p>
                            I'm currently open to opportunities, <br /> I would love to learn more
                            about what you're building.
                        </p>
                    </article>
                    <form onSubmit={onSubmit} name="contact" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="nameemail">
                            <div>
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    value={value.name}
                                    placeholder="name"
                                    name="name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    value={value.email}
                                    placeholder="email"
                                    name="email"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="textarea">
                            <label htmlFor="message">Your message</label>
                            <textarea
                                name="message"
                                onChange={handleChange}
                                value={value.message}
                                rows="5"
                                required></textarea>
                        </div>
                        <button type="submit">
                            <div className="button">
                                SEND
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
                        </button>
                    </form>
                </div>
            </div>

            <style jsx>
                {`
                    section {
                        background: #f0fff4;
                        color: #22543d;
                        min-height: 80vh;
                        text-align: center;
                        padding: 30px;
                        position: sticky;
                        top: 0px;
                        z-index: 7;
                        border-top: 7px solid #b2f5ea;
                    }
                    .wrapper {
                        margin-top: 20px;
                    }

                    article {
                        margin-bottom: 70px;
                    }
                    h2 {
                        font-size: 2.5em;
                        padding-bottom: 8px;
                    }
                    form {
                        width: 60%;
                        max-width: 500px;
                        margin: auto;
                    }

                    input,
                    textarea {
                        background: transparent;
                        border: none;
                        border-bottom: 1px solid #22543d;
                        color: #22543d;
                        width: 100%;
                        outline: none;
                    }

                    input:focus,
                    input:hover,
                    textarea:focus,
                    textarea:hover {
                        border-bottom: 1px solid green;
                    }

                    .nameemail {
                        display: flex;
                        margin-bottom: 4em;
                        justify-content: space-between;
                        width: 100%;
                    }

                    .nameemail > div {
                        display: flex;
                        flex-direction: column;
                        width: 47%;
                    }

                    label {
                        font-size: 13px;
                        align-self: start;
                        margin-bottom: 7px;
                    }

                    input {
                        padding: 0.6em;
                        padding-left: 0;
                    }

                    ::placeholder {
                        color: #22543d;
                        opacity: 0.4;
                    }
                    .textarea {
                        display: flex;
                        flex-direction: column;
                    }

                    textarea {
                        width: 100%;
                    }

                    button {
                        margin-top: 60px;
                        background: transparent;
                        outline: none;
                        border: 1px solid #22543d;
                        padding: 0.5em 1em;
                        text-transform: uppercase;
                        color: #22543d;
                        cursor: pointer;
                    }
                    svg {
                        width: 5em;
                        margin-left: 3px;
                    }
                    .button {
                        display: flex;
                        align-items: center;
                    }

                    @media screen and (max-width: 900px) {
                        h2 {
                            font-size: 2em;
                            line-height: 1.2;
                        }

                        p {
                            font-size: 15px;
                        }

                        form {
                            width: 100%;
                        }
                    }

                    @media screen and (max-width: 500px) {
                        section {
                            top: -10vh;
                            padding: 30px 10px;
                        }
                        h2 {
                            font-size: 1.5em;
                        }

                        p {
                            font-size: 14px;
                        }

                        .nameemail {
                            flex-direction: column;
                            margin-bottom: 2em;
                        }

                        .nameemail > div {
                            width: 100%;
                            margin-bottom: 25px;
                        }

                        button {
                            margin-top: 30px;
                            font-size: 12px;
                        }
                    }
                `}
            </style>
        </section>
    );
};

export default Contact;
