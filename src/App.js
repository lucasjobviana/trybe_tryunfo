import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    const deckPre = this.testeFunction();
    console.log(deckPre)
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
      deck: deckPre,
    };


  }

  testeFunction = () => {

    let arrayTest = [];
    for (let i = 0; i < 5; i += 1) {
      let attr = (i * 10).toString()
      arrayTest = [...arrayTest, {
        cardName: 'name_' + i,
        cardDescription: 'descrition_' + 1,
        cardAttr1: attr,
        cardAttr2: attr,
        cardAttr3: attr,
        cardRare: 'normal',
        cardImage: 'image_' + 1,
        cardTrunfo: false,
      }];

    } return arrayTest;
  }


  deleteCard = ({ target }) => {
    console.log(target);
    const { deck } = this.state;

    const cpDeck = deck.filter((card, ord) => {
      console.log(ord);
      if (ord === +target.id) {
        console.log(card.cardTrunfo);
        if (card.cardTrunfo) {
          this.setState({ hasTrunfo: false });
          // console.log('carTrunfo que estou exc:', cardTrunfo)
        } return;
      } return card;
    });
    console.log(cpDeck);
    console.log(+target.id);

    this.setState({
      deck: cpDeck,
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
    };

    const isTrunfo = cardTrunfo === true;
    console.log('verifiiiiicando', isTrunfo);
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

    this.setState(() => ({
      isSaveButtonDisabled: valid,
    }));
  };

  handleChanges = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, this.verify);
  };

  filterCards = ({ target }, filterName) => {
    console.log('filter cards aqui', target.value, filterName);

  }


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
      deck,
      hasTrunfo,
      cardTrunfo,

    } = this.state;

    const cards = deck.map((card, ord) => {
      console.log(card.cardName + ord);

      return (
        <div key={ord + ord}>
          <Card
            key={card.cardName + ord}
            cardName={card.cardName}
            cardDescription={card.cardDescription}
            cardAttr1={card.cardAttr1}
            cardAttr2={card.cardAttr2}
            cardAttr3={card.cardAttr3}
            cardImage={card.cardImage}
            cardRare={card.cardRare}
            cardTrunfo={card.cardTrunfo}
          />
          <button
            key={`del${ord}${card.cardName}`}
            id={ord}
            data-testid="delete-button"
            onClick={this.deleteCard}
          >
            Excluir

          </button>

        </div>

      );
    });

    //   <button
    //   data-testid="save-button"
    //   onClick={ onSaveButtonClick }
    //   disabled={ isSaveButtonDisabled }
    // >

    //   Salvar

    // </button>
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onSaveButtonClick={this.onSaveButtonClick}
          salvar={this.salvar}
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
          isView={true}
        />
        <div id="filters">
          <input id="filterName" type="text" data-testid="name-filter" onInput={() => { this.filterCards(event, "filterName") }} />
        </div>
        <section id="deck">
          {cards}

        </section>
      </div>
    );
  }

}


export default App;
