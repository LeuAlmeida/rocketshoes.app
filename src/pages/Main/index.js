import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

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
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  };

  renderProduct = ({ item }) => {
    return (
      <Product key={item.id}>
        <ProductImage
          source={{
            uri: item.image,
          }}
          resizeMode="contain"
        />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{formatPrice(item.price)}</ProductPrice>
        <CartButton onPress={() => {}}>
          <CartIcon>
            <Icon name="add-shopping-cart" size={20} color="#FFF" />
            <CartIconCount>2</CartIconCount>
          </CartIcon>
          <CartText>Adicionar</CartText>
        </CartButton>
      </Product>
    );
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          extraData={this.props}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}

export default connect()(Main);
