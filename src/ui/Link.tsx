import React from "react";

export const Link = ({children, ...props}: React.LinkHTMLAttributes<HTMLAnchorElement>) =>
    <a style={style} {...props}>
        {children}
    </a>

const style = {
    color: 'white',
    textDecoration: 'none',
}
