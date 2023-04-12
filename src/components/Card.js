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
      <div className={ view }>
        Nome:
        <p data-testid="name-card">
          {cardName}
        </p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        Descrição:
        <p data-testid="description-card">
          {cardDescription}
        </p>
        Ataque:
        <p data-testid="attr1-card">
          {cardAttr1}
        </p>
        Defesa:
        <p data-testid="attr2-card">
          {cardAttr2}
        </p>
        Magia:
        <p data-testid="attr3-card">
          {cardAttr3}
        </p>
        Raridade:
        <p data-testid="rare-card">
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
  isView: PropTypes.bool.isRequired,
  // cardVisible: PropTypes.bool.isRequired,
};
export default Card;
