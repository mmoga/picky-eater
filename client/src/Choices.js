import React, { Component } from "react";

// this component will host the randomly drawn restaurants
// that were either liked or yet unmarked

class Choices extends Component {
  render() {
    const likedChoices = this.props.marked.map(
      business =>
        business.isLiked ? (
          <div className="Choices--item" key={business.id}>
            <p>{business.name}</p>
          </div>
        ) : (
          null
        )
    );

    return (
      <div className="Choices">
        {/* {JSON.stringify(this.props.businesses.filter(business => business.isLiked))} */}
        {likedChoices}
      </div>
    );
  }
}

export default Choices;
