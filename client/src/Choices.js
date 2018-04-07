import React, { Component } from 'react';

// this component will host the randomly drawn restaurants
// that were either liked or yet unmarked

class Choices extends Component {
    render() {
        return (
            <div>
                {JSON.stringify(this.props.businesses.filter(business => business.isLiked))}
            </div>
        )
    }
}

export default Choices;