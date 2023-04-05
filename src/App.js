import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
    };
  }

  handleChanges = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form argumentos={this.state} onInputChange={this.handleChanges} />
        <Card argumentos={this.state} />
      </div>
    );
  }
}

export default App;
