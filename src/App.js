import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';
// import teste from './teste';

class App extends React.Component {
  constructor() {
    super();
    const deckPre = [];// teste();
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
      cardVisible: true,
      deckVisible: deckPre,
      deck: deckPre,
    };
  }

  deleteCard = ({ target }) => {
    const { deck } = this.state;
    const cpDeck = deck.filter((card, ord) => {
      if (ord === +target.id) {
        console.log(card.cardTrunfo);
        if (card.cardTrunfo) {
          this.setState({ hasTrunfo: false });
        } return;
      } return card;
    });
    this.setState({
      deck: cpDeck,
      deckVisible: cpDeck,
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
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
      cardVisible,
      deckVisible,
      deck,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardTrunfo,
      cardRare,
      cardVisible,
    };
    const isTrunfo = cardTrunfo === true;
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      hasTrunfo: isTrunfo ? true : hasTrunfo,
      deck: [...deck, newCard],
      deckVisible: [...deckVisible, newCard],
    });
  };

  verify = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
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

    this.setState(() => ({
      isSaveButtonDisabled: valid,
    }));
  };

  handleChanges = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, this.verify);
  };

  filterCards = ({ target }, filterName = 'cardName') => {
    console.log('filter cards aqui', target.value, filterName);
    let value = target.value === ' ' ? '' : target.value;
    value = filterName === 'cardTrunfo' ? target.checked : value;
    const { deck } = this.state;
    let filterDeck = [];

    deck.forEach((card) => {
      if (filterName === 'cardName') {
        if (card[filterName].includes(value)) { // target.value
          filterDeck = [...filterDeck, card];
        }
      } else if (card[filterName] === value || value === 'all') {
        filterDeck = [...filterDeck, card];
      }
    });

    this.setState({
      deckVisible: filterDeck,
    });
  };

  // filterCard = (event) => {
  //   this.filterCards(event, 'cardRare');
  // };

  // filterTrunfo = (event) => {
  //   console.log('estou chamando minha função filterTrunfo');
  //   console.log(event);
  //   console.log(event.target.checked);
  //   const filters = document.querySelectorAll('.filter');

  //   filters.forEach((filter) => {
  //     filter.disabled = !!event.target.checked;
  //   });

  //   this.filterCards(event, 'cardTrunfo');
  // };

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
      deckVisible,
      hasTrunfo,
      cardTrunfo,
    } = this.state;

    const cards = deckVisible.map((card, ord) => (
      <div key={ ord + ord }>
        <Card
          key={ card.cardName + ord }
          cardName={ card.cardName }
          cardDescription={ card.cardDescription }
          cardAttr1={ card.cardAttr1 }
          cardAttr2={ card.cardAttr2 }
          cardAttr3={ card.cardAttr3 }
          cardImage={ card.cardImage }
          cardRare={ card.cardRare }
          cardTrunfo={ card.cardTrunfo }
          cardVisible={ card.cardVisible }
          isView={ false }
        />
        <button
          key={ `del${ord}${card.cardName}` }
          id={ ord }
          data-testid="delete-button"
          onClick={ this.deleteCard }
        >
          Excluir
        </button>
      </div>

    ));

    const verdade = true;

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
          isView={ verdade }
        />
        <Filter filterCards={ this.filterCards } />
        <section id="deck">
          {cards}
        </section>
      </div>
    );
  }
} export default App;
