import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Header,
  Card,
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

        {/* <TouchableOpacity
          style={{ height: 50, backgroundColor: 'red' }}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text>Ir para a página de carrinho</Text>
        </TouchableOpacity> */}
      </Container>
    );
  }
}

export default Main;
