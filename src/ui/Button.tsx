import React from "react";

export const Button = ({children, ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>) =>
    <button style={style} {...props}>
        {children}
    </button>

const style = {
    border: 'none',
    borderRadius: '4px',
    padding: '6px',
}
