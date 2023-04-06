import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: 'normal',
      cardImage: '',
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      cardTrunfo: false,
    };
  }

  onSaveButtonClick = () => null;

  verify = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      // isSaveButtonDisabled,
    } = this.state;
    const haveName = cardName.length > 0 && cardName[0] !== ' ';
    const hD = cardDescription.length > 0 && cardDescription[0] !== ' ';
    const haveImage = cardImage.length > 0 && cardImage[0] !== ' ';
    const haveRare = cardRare.length > 0;
    const a1Number = Number.parseInt(cardAttr1, 10);
    const a2Number = Number.parseInt(cardAttr2, 10);
    const a3Number = Number.parseInt(cardAttr3, 10);
    const max = 210;
    const maxForce = 90;
    const totalPwIsLessThanMax = (a1Number + a2Number + a3Number) <= max;
    const pN = a1Number <= maxForce && a2Number <= maxForce && a3Number <= maxForce;
    const pZero = (a1Number >= 0) && (a2Number >= 0) && (a3Number >= 0);

    const valid = !((
      haveName && hD
      && haveImage
      && haveRare
      && totalPwIsLessThanMax
      && pN && pZero
    ));
    console.log(valid);
    // this.setState({ [name]: value });
    // this.setState((estadoAnterior, _props) => ({
    //   numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    // }));

    // this.setState((estadoAnterior) => ({
    //   isSaveButtonDisabled: estadoAnterior.isSaveButtonDisabled,
    // }));

    this.setState(() => ({
      isSaveButtonDisabled: valid,
    }));
  };

  handleChanges = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.verify);
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

    // this.setState({
    //   isSaveButtonDisabled: valid,
    // });

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onSaveButtonClick={ this.onSaveButtonClick }
          salvar={ this.salvar }
          onInputChange={ this.handleChanges }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
