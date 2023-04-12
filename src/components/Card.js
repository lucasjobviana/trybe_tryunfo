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
      // cardVisible,
      isView,
    } = this.props;

    const view = isView ? 'card view' : 'card';

    const tElement = cardTrunfo
      ? <span data-testid="trunfo-card">Super Trunfo</span>
      : '';

    // const visibleCardCss = !cardVisible
    //   ? { display: 'none' } : { display: 'flex' };
    //   id={ `${cardName}-id` }
    return (
      <div className={view}>
        <label>Nome:
          <span>{cardName}</span>
        </label>

        <img src={cardImage} alt={cardName} data-testid="image-card" />


        <label>Descrição:
          <span>{cardDescription}</span>
          {cardDescription}
        </label>

        <label>Combo:
          <span>{cardAttr1}</span>
        </label>

        <label>Golpe:
          <span>{cardAttr2}</span>
        </label>

        <label>Especial:
          <span>{cardAttr3}</span>
        </label>

        <label>Especial:
          <span>{cardAttr3}</span>
        </label>

        <label>Tipo:
          <span>{cardRare}</span>
        </label>

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
  isView: PropTypes.bool.isRequired,
  // cardVisible: PropTypes.bool.isRequired,
};
export default Card;
