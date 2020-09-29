/* eslint-disable react/prop-types */

const ScrollIndicator = ({ scrolled }) => {
    const progressBar = {
        height: '4.5px',
        backgroundColor: '#e7ab54',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: scrolled,
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999999999
    };

    return <div style={progressBar}></div>;
};

export default ScrollIndicator;
