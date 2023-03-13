import React from "react";

export const Link = ({children, ...props}: React.LinkHTMLAttributes<HTMLAnchorElement>) =>
    <a {...props}>
        {children}
    </a>
