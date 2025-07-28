import { ElementType, ReactNode } from "react";

interface BenefitCompProps {
    children: ReactNode,
    title: string,
    icon: ElementType,
}

export default function BenefitComp({ title, children, icon: Icon }: BenefitCompProps) {
    return (
        <>
            <div className="flex items-start mt-8 space-x-3">
                <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-[#1E1E1F] rounded-md size-11">
                    <div className="text-gray-100">
                        <Icon />
                    </div>
                </div>
                <div>
                    <h4 className="text-xl font-medium text-gray-800">
                        {title}
                    </h4>
                    <p className="mt-1 text-gray-500">
                        {children}
                    </p>
                </div>
            </div>
        </>
    );
}