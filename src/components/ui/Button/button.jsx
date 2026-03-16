import './index.scss';

export const Button = ({
    children,
    type = 'button',
    variant = 'primary',
    icon = null,
    onClick,
    ariaLabel = null,
}) => {
    return (
        <button
            type={type}
            className={`btn btn--${variant}`}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            <span>{children}</span>
            {icon && <i className={icon}></i>}
        </button>
    );
};