import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  CartButton,
  CartIcon,
  CartIconCount,
  CartText,
} from './styles';

class Main extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Product>
          <ProductImage
            source={{
              uri:
                'https://static.netshoes.com.br/produtos/tenis-vr-sneaker-meia-leve/06/E74-0492-006/E74-0492-006_detalhe2.jpg',
            }}
            resizeMode="contain"
          />
          <ProductTitle>Título do Produto</ProductTitle>
          <ProductPrice>R$ 200,00</ProductPrice>
          <CartButton onPress={() => {}}>
            <CartIcon>
              <Icon name="add-shopping-cart" size={20} color="#FFF" />
              <CartIconCount>2</CartIconCount>
            </CartIcon>
            <CartText>Adicionar</CartText>
          </CartButton>
        </Product>
      </Container>
    );
  }
}

export default Main;
