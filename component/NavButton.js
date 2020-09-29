import menu from '../styles/menu.module.css';

const NavButton = ({ open, setOpen }) => {
    return (
        <button
            className={`${open ? menu.rotateBtn : menu.parallelBtn}`}
            onClick={() => setOpen(!open)}>
            <style jsx>{`
                button {
                    position: relative;
                    width: 2.5em;
                    height: 1em;
                    color: #c6f6d5;
                    background: none;
                    border: none;
                    cursor: pointer;
                    z-index: 99;
                    outline: none;
                }
            `}</style>
        </button>
    );
};

export default NavButton;
