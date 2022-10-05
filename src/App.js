import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardDate: [],
      hasACardTrunfo: false,
      filterName: '',
      filterRare: '',
    };
  }

  verifyButtonDisable = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const v = cardName.length < 1 || cardDescription.length < 1 || cardImage.length < 1;
    const limitAll = 210;
    const limit = 90;
    const iB210 = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > limitAll;
    const attr1 = cardAttr1 < 0 || cardAttr1 > limit;
    const attr2 = cardAttr2 < 0 || cardAttr2 > limit;
    const attr3 = cardAttr3 < 0 || cardAttr3 > limit;
    const allAttr = attr1 || attr2 || attr3;
    const isButtonDisable = v || allAttr || iB210;

    this.setState({
      isSaveButtonDisabled: isButtonDisable,
    });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, () => {
      this.verifyButtonDisable();
    });
  }

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
      isSaveButtonDisabled,
    } = this.state;
    const objCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    };
    this.setState((prevState) => {
      this.setState({
        cardDate: [...prevState.cardDate, objCard],
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      }, () => {
        this.hasTrunfo();
      });
    });
  }

  hasTrunfo = () => {
    const { cardDate, hasACardTrunfo } = this.state;
    const listOfTrunfo = cardDate.filter((card) => card.cardTrunfo === true);
    const hasTrunfo = listOfTrunfo.length > 0;
    this.setState(() => ({
      hasACardTrunfo: hasTrunfo,
    }));
    return hasACardTrunfo;
  }

  removeCard = (nameOfCard) => {
    const { cardDate } = this.state;
    const newDates = cardDate.filter((card) => {
      if (nameOfCard !== card.cardName) {
        return card;
      }
      return '';
    });
    const listOfTrunfo = cardDate.filter((card) => card.cardTrunfo === true);
    const hasTrunfo = listOfTrunfo.length > 0;

    this.setState(() => ({
      cardDate: newDates,
      hasACardTrunfo: !hasTrunfo,
    }));
  }

  setFilterValue = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      cardImage,
      cardRare,
      isSaveButtonDisabled,
      cardDate,
      hasACardTrunfo,
      filterName,
      filterRare,
    } = this.state;

    const allRenderedCards = cardDate.filter((card) => {
      const name = card.cardName;
      return name.includes(filterName);
    });

    const selectRare = allRenderedCards.filter((card) => {
      const rare = card.cardRare[0];
      if (filterRare.length > 0) {
        return rare.includes(filterRare[0]);
      }
      return rare.includes(filterRare);
    });

    return (
      <main>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
          cardImage={ cardImage }
          cardRare={ cardRare }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasACardTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
          cardImage={ cardImage }
          cardRare={ cardRare }
        />
        <section>
          <hr />
          Nome da carta:
          <br />
          <input
            data-testid="name-filter"
            name="filterName"
            type="text"
            value={ filterName }
            onChange={ this.setFilterValue }
            placeholder="Nome da carta"
          />
          <br />
          <label htmlFor="filterRare">
            Raridade:
            <select
              data-testid="rare-filter"
              name="filterRare"
              onChange={ this.setFilterValue }
              value={ filterRare }
            >
              <option name="filterRare" value="">todas</option>
              <option name="filterRare" value="normal">normal</option>
              <option name="filterRare" value="raro">raro</option>
              <option name="filterRare" value="muito raro">muito raro</option>
            </select>
          </label>
          <CardList
            cardDate={ selectRare }
            removeCard={ this.removeCard }
          />
        </section>
      </main>
    );
  }
}

export default App;
