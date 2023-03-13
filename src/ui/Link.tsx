import React from "react";

export const Link = ({children, ...props}: React.LinkHTMLAttributes<HTMLAnchorElement>) =>
    <a target="_blank" {...props}>
        {children}
    </a>
