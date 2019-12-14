import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

class Cart extends Component {
  state = {};

  render() {
    return (
      <View style={{ height: 400, backgroundColor: 'red' }}>
        <TouchableOpacity
          style={{ height: 400, backgroundColor: 'red' }}
          onPress={() => this.props.navigation.navigate('Main')}
        >
          <Text>Ir para a página inicial</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Cart;
