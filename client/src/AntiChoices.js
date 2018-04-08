import React, { Component } from 'react';

// this component will host the restaurants
// that have been disliked

class AntiChoices extends Component {
    render() {
        const dislikedChoices = this.props.businesses.map(
          business =>
          business.isLiked != null && !business.isLiked ? (
              <div className="AntiChoices--item">
                <p>{business.name}</p>
              </div>
            ) : (
              <div />
            )
        );
    
        return (
          <div className="AntiChoices">
            {dislikedChoices}
          </div>
        );
      }
}

export default AntiChoices;