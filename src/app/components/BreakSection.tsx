import { ReactNode } from "react";
import Container from "./Container"

interface BreakSectionProps {
    align?: "left" | "center",
    pretitle?: string,
    title?: string,
    children?: ReactNode,
}

export default function BreakSection({ align, pretitle, title, children }: BreakSectionProps) {

    return (
        <Container
            className={`flex w-full flex-col mt-4 ${align === "left" ? "" : "items-center justify-center text-center"
                }`}>
            {pretitle && (
                <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
                    {pretitle}
                </div>
            )}

            {title && (
                <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
                    {title}
                </h2>
            )}

            {children && (
                <div className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
                    {children}
                </div>
            )}
        </Container>
    );
}