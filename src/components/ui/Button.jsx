import React from 'react';

export function Button({
    children,
    variant = 'primary',
    className = '',
    icon: Icon,
    ...props
}) {
    return (
        <button
            className={`btn btn-${variant} ${className}`}
            {...props}
        >
            {Icon && <Icon size={18} style={{ marginRight: '8px' }} />}
            {children}
        </button>
    );
}
