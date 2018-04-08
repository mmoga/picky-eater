import React, { Component } from "react";

// this component will host the randomly drawn restaurants
// that were either liked or yet unmarked

class Choices extends Component {
  render() {
    const likedChoices = this.props.businesses.map(
      business =>
        business.isLiked ? (
          <div>
            <p>{business.name}</p>
          </div>
        ) : (
          <div />
        )
    );

    return (
      <div>
        {/* {JSON.stringify(this.props.businesses.filter(business => business.isLiked))} */}
        {likedChoices}
      </div>
    );
  }
}

export default Choices;
