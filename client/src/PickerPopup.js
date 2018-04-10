import React, { Component } from "react";

class PickerPopup extends Component {
    render() {
        return (
            <div className={`PickerPopup--container ${this.props.isShown ? "PickerPopup--container-shown" : "PickerPopup--container-hidden"}`}>
                <h1>
                    Popup launched!
                </h1>
            </div>
        );
    }
}

export default PickerPopup;