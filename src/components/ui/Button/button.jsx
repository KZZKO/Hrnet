import './index.scss';

export const Button = ({
    children,
    type = 'button',
    variant = 'primary',
    icon = null,
    onClick,
}) => {
    return (
        <button
            type={type}
            className={`btn btn--${variant}`}
            onClick={onClick}
        >
            <span>{children}</span>
            {icon && <i className={icon}></i>}
        </button>
    );
};