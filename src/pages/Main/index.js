import React, { Component } from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Header,
  Card,
  Product,
  ProductTitle,
  ProductPrice,
  CartButton,
  CartIcon,
  CartIconCount,
  CartText,
} from './styles';

class Main extends Component {
  state = {};

  handleChangePage = item => {
    const { navigation } = this.props;

    navigation.navigate('Main', { item });
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Header>
          <Text>Teste</Text>
          <Text>Teste</Text>
        </Header>

        <ScrollView horizontal>
          <Card>
            <Product
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
          </Card>
        </ScrollView>

        <TouchableOpacity
          style={{ height: 50, backgroundColor: 'red' }}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text>Ir para a página de carrinho</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default Main;
