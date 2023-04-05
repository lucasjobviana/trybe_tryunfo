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
      nome: '',
      descricao: '',
      ataque: '',
      defesa: '',
      velocidade: '',
      tipo: '',
      superTrunfo: false,

    };
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
