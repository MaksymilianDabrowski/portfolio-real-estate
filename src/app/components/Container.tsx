import { ReactNode } from "react"


interface ContainerProps {
    children: ReactNode,
    className?: string,
}

export default function Container({ children, className }: ContainerProps) {
    return (
        <div
            className={`container p-4 mx-auto xl:px-0 ${className || ""}`}>
            {children}
        </div >
    )
}
