import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class CardList extends Component {
  render() {
    const { cardDate, removeCard } = this.props;
    const cards = cardDate.map((obj) => (
      <div key={ obj.cardName }>
        <hr />
        <Card
          cardName={ obj.cardName }
          cardDescription={ obj.cardDescription }
          cardAttr1={ obj.cardAttr1 }
          cardAttr2={ obj.cardAttr2 }
          cardAttr3={ obj.cardAttr3 }
          cardTrunfo={ obj.cardTrunfo }
          cardImage={ obj.cardImage }
          cardRare={ obj.cardRare }
        />
        <button
          data-testid="delete-button"
          type="button"
          onClick={ () => removeCard(obj.cardName) }
        >
          Excluir
        </button>
      </div>
    ));
    return (
      <section>{ cards }</section>
    );
  }
}

CardList.propTypes = {
  cardDate: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeCard: PropTypes.func.isRequired,
};
