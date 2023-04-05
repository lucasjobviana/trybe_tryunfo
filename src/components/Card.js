import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      /* cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo, */
    } = this.props;

    return (
      <div>{cardName}</div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
};
export default Card;
