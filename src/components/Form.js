import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    console.log(hasTrunfo);
    return (
      <form>
        <h1>Olá, mundo!</h1>
        <label htmlFor="ipt-name">
          Nome:
          <input
            type="text"
            name="nome"
            onChange={onInputChange}
            data-testid="name-input"
            id="ipt-name"
            value={cardName}
          />
        </label>
        <label htmlFor="ipt-descrition">
          Descrição:
          <input
            type="text"
            name="descricao"
            onChange={onInputChange}
            data-testid="description-input"
            id="ipt-descrition"
            value={cardDescription}
          />
        </label>
        <label htmlFor="ipt-atk">
          Força de Ataque:
          <input
            type="number"
            name="ataque"
            onChange={onInputChange}
            data-testid="attr1-input"
            id="ipt-atk"
            value={cardAttr1}
          />
        </label>
        <label htmlFor="ipt-dfs">
          Força de Defesa:
          <input
            name="defesa"
            type="number"
            onChange={onInputChange}
            data-testid="attr2-input"
            id="ipt-dfs"
            value={cardAttr2}
          />
        </label>
        <label htmlFor="ipt-vlc">
          Velocidade:
          <input
            type="number"
            name="velocidade"
            onChange={onInputChange}
            data-testid="attr3-input"
            id="ipt-vlc"
            value={cardAttr3}
          />
        </label>
        <label htmlFor="ipt-src-img">
          Imagem:
          <input
            name="imagem"
            type="text"
            onChange={onInputChange}
            data-testid="image-input"
            id="ipt-src-img"
            value={cardImage}
          />
        </label>
        <label htmlFor="slc-tipo">
          Tipo:
          <select
            onChange={onInputChange}
            value={cardRare}
            data-testid="rare-input"
            name="tipo"
            id="slc-tipo"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="ipt-trunfo">
          Super Trunfo
          <input
            name="superTrunfo"
            data-testid="trunfo-input"
            onChange={onInputChange}
            type="checkbox"
            id="ipt-trunfo"
            checked={cardTrunfo}
          />
        </label>
        <button
          data-testid="save-button"
          onClick={onSaveButtonClick}
          disabled={isSaveButtonDisabled}
        >

          Salvar

        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;
/*
cardName, uma string;
cardDescription, uma string;
cardAttr1, uma string;
cardAttr2, uma string;
cardAttr3, uma string;
cardImage, uma string;
cardRare, uma string;
cardTrunfo, um boolean;
hasTrunfo, um boolean;
isSaveButtonDisabled, um boolean;
onInputChange, uma callback;
onSaveButtonClick, uma callback;
*/
