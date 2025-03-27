function Button({ className = "", href, children, props }) {
    if (href) {
        return (
            <a href={href} className={className} {...props}>
                {children}
            </a>
        );
    }
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
}

export default Button;
