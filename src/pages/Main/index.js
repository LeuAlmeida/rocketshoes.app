import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Container, Header } from './styles';

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

        <TouchableOpacity
          style={{ height: 150, backgroundColor: 'red' }}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text>Ir para a página de carrinho</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default Main;
