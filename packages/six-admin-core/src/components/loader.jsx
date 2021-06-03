import React from "react";

export const Loader = ({isLoading})=>{

    if(!isLoading){
        return null;
    }

    return (
        <div className="loader">
            <div className="loader__inner">
                <div/>
                <div/>
            </div>
        </div>
    )
}
