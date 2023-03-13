import React from "react";

export const Form = ({children, ...props}: React.FormHTMLAttributes<HTMLFormElement>) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        props.onSubmit?.(e)
    }


    return (
        <form {...props} onSubmit={handleSubmit}>
            {children}
        </form>
    )
}
