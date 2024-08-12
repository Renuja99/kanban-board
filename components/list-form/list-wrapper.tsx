import React from "react";

interface ListWrapperProps{
    children: React.ReactNode;
};

export const ListWrapper = ({children}: ListWrapperProps) => {

    return (
        <div className="shrink-0 h-full w-[272px] select-none border-2 border-gray-200 border-dashed">
        {children}
        </div>
    )

}

