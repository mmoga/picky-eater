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
          <h1>Popup launched!</h1>
        </div>
        <div className="PickerPopup--btns">
          <button onClick={() => console.log("do it over!")}>
            Eh... try it again
          </button>
          <button onClick={() => console.log("close!")}>Close</button>
        </div>
      </div>
    );
  }
}

export default PickerPopup;
