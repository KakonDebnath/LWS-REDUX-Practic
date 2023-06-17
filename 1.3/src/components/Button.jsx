
const Button = ({children, handler, bgColor}) => {
    return (
        <button
            onClick={handler}
            className={` ${bgColor} text-white px-3 py-2 rounded shadow`} id="increment"
        >
            {children}
        </button>
    );
};

export default Button;