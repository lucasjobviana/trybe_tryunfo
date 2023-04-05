import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <h1>Olá, mundo!</h1>
        <label htmlFor="ipt-name">
          Nome:
          <input type="text" data-testid="name-input" id="ipt-name" />
        </label>
        <label htmlFor="ipt-descrition">
          Nome:
          <input type="text" data-testid="description-input" id="ipt-descrition" />
        </label>
        <label htmlFor="ipt-atk">
          Força de Ataque:
          <input type="number" data-testid="attr1-input" id="ipt-atk" />
        </label>
        <label htmlFor="ipt-dfs">
          Força de Defesa:
          <input type="number" data-testid="attr2-input" id="ipt-dfs" />
        </label>
        <label htmlFor="ipt-vlc">
          Velocidade:
          <input type="number" data-testid="attr3-input" id="ipt-vlc" />
        </label>
        <label htmlFor="ipt-src-img">
          Imagem:
          <input type="text" data-testid="image-input" id="ipt-src-img" />
        </label>
        <label htmlFor="slc-tipo">
          Tipo:
          <select data-testid="rare-input" name="tipo" id="slc-tipo">
            <option value="normal" selected>normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="ipt-trunfo">
          Super Trunfo
          <input data-testid="trunfo-input" type="checkbox" id="ipt-trunfo" />
        </label>
        <button data-testid="save-button">Salvar</button>

      </form>
    );
  }
}

export default Form;
