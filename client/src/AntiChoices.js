import React, { Component } from 'react';

// this component will host the restaurants
// that have been disliked

class AntiChoices extends Component {
    render() {
        const dislikedChoices = this.props.marked.map(
          business =>
          business.isLiked != null && !business.isLiked ? (
              <div className="AntiChoices--item" key={business._id || business.id}>
                <p>{business.name}</p>
              </div>
            ) : (
              null
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