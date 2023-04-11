const teste = () => {
  const min = 0;
  const max = 6;
  const mult = 10;
  let arrayTest = [];
  for (let i = min; i < max; i += 1) {
    const attr = (i * mult).toString();
    arrayTest = [...arrayTest, {
      cardName: `name_${i}`,
      cardDescription: `descrition_${1}`,
      cardAttr1: attr,
      cardAttr2: attr,
      cardAttr3: attr,
      cardRare: 'normal',
      cardVisible: true,
      cardImage: `image_${1}`,
      cardTrunfo: false,
    }];
  } return arrayTest;
};

export default teste;
