import ReactDOM from "react-dom";
import React from "react";

export const promptConfirmation = (messageData, callback) => {
    const data = JSON.parse(messageData);

    const container = document.createElement("div");
    document.querySelector(".portal--modal").appendChild(container);

    const closeModal = (confirm) => {
        ReactDOM.unmountComponentAtNode(container);
        container.remove()
        callback(confirm);
    };

    ReactDOM.render(
        <div className="popup__wrapper">
            <div className="popup">
                <p>{data.content}</p>
                <div className="buttons-wrapper">
                    <button className="button" onClick={e => closeModal(true)}>{data.confirmLabel}</button>
                    <button className="button" onClick={e => closeModal(false)}>{data.cancelLabel}</button>
                </div>
            </div>
        </div>,
        container
    );
}
