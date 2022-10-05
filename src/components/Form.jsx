import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
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
      onInputChange,
      onSaveButtonClick,
      hasTrunfo,
    } = this.props;

    const hasNotTrunfo = (
      <label htmlFor="checkbox-id">
        SuperTrunfo
        <input
          name="cardTrunfo"
          type="checkbox"
          data-testid="trunfo-input"
          id="checkbox-id"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>);

    const hasAlreadyTrunfo = (
      <span>
        Você já tem um Super Trunfo em seu baralho
      </span>
    );

    return (
      <section>
        <form>
          <h2>Add nova carta</h2>
          <br />

          <label htmlFor="name-card">
            Nome da carta
            <br />
            <input
              name="cardName"
              placeholder="Insira o nome do personagem de Jujustsu"
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />

          <label htmlFor="description">
            Descrição da carta
            <br />
            <textarea
              name="cardDescription"
              placeholder="Insira a descrição da carta"
              cols="30"
              rows="10"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />

          <label htmlFor="attr1">
            Força:
            <br />
            <input
              name="cardAttr1"
              placeholder="Força"
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />

          <label htmlFor="attr2">
            Jujutsu
            <br />
            <input
              name="cardAttr2"
              placeholder="Jujutsu"
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />

          <label htmlFor="attr3">
            Técnica:
            <br />
            <input
              name="cardAttr3"
              placeholder="Técnica"
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />

          <label htmlFor="cardImage">
            Imagem:
            <br />
            <input
              name="cardImage"
              placeholder="Src da imagem p/ a carta"
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <br />

          <label htmlFor="cardRare">
            Raridade:
            <br />
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option name="cardRare" value="normal">Normal</option>
              <option name="cardRare" value="raro">Raro</option>
              <option name="cardRare" value="muito raro">Muito raro</option>
            </select>
          </label>
          <br />

          { hasTrunfo ? hasAlreadyTrunfo : hasNotTrunfo }
          <br />

          <button
            name="button"
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>

        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
