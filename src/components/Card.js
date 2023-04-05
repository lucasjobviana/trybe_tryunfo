import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props.argumentos;

    console.log(
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    );
    const tElement = cardTrunfo
      ? <span data-testid="trunfo-card">Super Trunfo</span>
      : '';

    return (
      <div>
        <p data-testid="name-card">
          Nome:
          {cardName}
        </p>
        <img src={cardImage} alt={cardName} data-testid="image-card" />
        <p data-testid="description-card">
          Descrição:
          {cardDescription}
        </p>
        <p data-testid="attr1-card">
          ATK:
          {cardAttr1}
        </p>
        <p data-testid="attr2-card">
          DEF:
          {cardAttr2}
        </p>
        <p data-testid="attr3-card">
          SPD:
          {cardAttr3}
        </p>
        <p data-testid="rare-card">
          Tipo:
          {cardRare}
        </p>
        {tElement}

      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
export default Card;
