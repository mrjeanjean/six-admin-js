import React from "react";

export const Content = ({children})=>{
    return (
        <main>
            <div className="main-content">
                {children}
            </div>
        </main>
    )
}
