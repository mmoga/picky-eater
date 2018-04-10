import React, { Component } from "react";

class PickerPopup extends Component {
  render() {
    return (
      <div
        className={`PickerPopup--container ${
          this.props.isShown
            ? "PickerPopup--container-shown"
            : "PickerPopup--container-hidden"
        }`}
      >
        <div className="PickerPopup--title">
          <h1>{this.props.name}</h1>
        </div>
        <div className="PickerPopup--btns">
          <button onClick={this.props.onNext}>
            Eh... try it again
          </button>
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>
    );
  }
}

export default PickerPopup;
