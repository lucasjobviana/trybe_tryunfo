import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: 'Qual é esse pokemom?',
      cardAttr1: '50',
      cardAttr2: '40',
      cardAttr3: '30',
      cardRare: 'normal',
      cardImage: 'bulba.png',
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      cardTrunfo: false,
    };
  }

  handleChanges = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardImage,
      isSaveButtonDisabled,
      hasTrunfo,
      cardTrunfo,

    } = this.state;
    console.log(cardAttr1);
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={this.handleChanges}
          cardName={cardName}
          cardDescription={cardDescription}
          cardAttr1={cardAttr1}
          cardAttr2={cardAttr2}
          cardAttr3={cardAttr3}
          cardImage={cardImage}
          cardRare={cardRare}
          cardTrunfo={cardTrunfo}
          hasTrunfo={hasTrunfo}
          isSaveButtonDisabled={isSaveButtonDisabled}
        />
        <Card
          cardName={cardName}
          cardDescription={cardDescription}
          cardAttr1={cardAttr1}
          cardAttr2={cardAttr2}
          cardAttr3={cardAttr3}
          cardImage={cardImage}
          cardRare={cardRare}
          cardTrunfo={cardTrunfo}
        />
      </div>
    );
  }
}

export default App;
