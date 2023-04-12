const teste = () => {
  const min = 0;
  const max = 10;
  const mult = 10;
  let arrayTest = [{
    cardName: 'iori',
    cardDescription: 'mr. yagami',
    cardAttr1: '50',
    cardAttr2: '30',
    cardAttr3: '40',
    cardRare: 'muito raro',
    cardVisible: true,
    cardImage: `image_${1}`,
    cardTrunfo: true,

  }];
  const raridade = ['normal', 'raro'];
  const nomes = [
    'inchu',
    'magali',
    'ronaldinho', 'defeito', 'donault', 'arroz', 'cogumelo', 'chumbinho', 'chumbo',
    'detonator'];

  for (let i = min; i < max; i += 1) {
    const attr = (i * mult).toString();
    const aleatorio = Math.round(Math.random() * 1);
    arrayTest = [...arrayTest, {
      cardName: nomes[i],
      cardDescription: `descrition_${1}`,
      cardAttr1: attr,
      cardAttr2: attr,
      cardAttr3: attr,
      cardRare: raridade[aleatorio],
      cardVisible: true,
      cardImage: `image_${1}`,
      cardTrunfo: false,
    }];
  } return arrayTest;
};

export default teste;
