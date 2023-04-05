import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: 'Nome do Pokemom',
      cardDescription: 'Qual é esse pokemom?',
      cardAttr1: '50',
      cardAttr2: '40',
      cardAttr3: '30',
      cardRare: 'normal',
      hasTrunfo: false,
      cardTrunfo: false,
      /*
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
      */

    };
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form argumentos={this.state} />
        <Card />
      </div>
    );
  }
}

export default App;
