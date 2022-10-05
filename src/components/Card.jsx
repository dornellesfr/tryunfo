import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
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
    } = this.props;

    const secTrunfo = (
      <section
        id="trunfo"
        data-testid="trunfo-card"
      >
        { 'Super Trunfo '}
      </section>
    );

    return (
      <article>
        <section className="cardName" data-testid="name-card">{ cardName }</section>
        <img
          className="cardImage"
          src={ cardImage }
          data-testid="image-card"
          alt={ cardName }
          height="300"
          // GOJO - https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.6435-9/127925083_119643859962204_8282253375050605885_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WsJRA0ynVfsAX8t4RgO&_nc_ht=scontent.fbnu1-1.fna&oh=00_AT8fXE_rhhwy6f-BZostIds0vW1CVCyToi5ZmX988RBacQ&oe=631CADC4
          // NOBARA - http://pm1.narvii.com/7959/1a0298070153bd140a995e994546258ba0491f6cr1-554-554v2_uhq.jpg
          // MEGUMI - https://i.pinimg.com/736x/34/bc/27/34bc279b81171a27eb4c8c58b61cbda6.jpg
          // ITADORI - https://i.pinimg.com/736x/ec/61/c9/ec61c93e2343cde401e73c5272ca3cd0.jpg
          // MAKI - https://johto.legiaodosherois.com.br/wp-content/uploads/2022/05/legiao_cGfT5gXI4hJz.jpg
        />
        <section
          className="cardDescription"
          data-testid="description-card"
        >
          { cardDescription }
        </section>
        <section className="attr" data-testid="attr1-card">
          <span> Força: </span>
          <span>{ cardAttr1 }</span>
        </section>
        <section className="attr" data-testid="attr2-card">
          <span> Jujustsu: </span>
          <span>{ cardAttr2 }</span>
        </section>
        <section className="attr" data-testid="attr3-card">
          <span> Técnica: </span>
          <span>{ cardAttr3 }</span>
        </section>

        <section className="rare" data-testid="rare-card">
          <span>Raridade: </span>
          <span>{ cardRare }</span>
        </section>
        { cardTrunfo ? secTrunfo : '' }
      </article>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.bool.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
