import React from "react";

export const Form = ({children, ...props}: React.FormHTMLAttributes<HTMLFormElement>) => (
    <form {...props}>
        {children}
    </form>
)
