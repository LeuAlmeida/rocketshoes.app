import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

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

export default function Main() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    getProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProduct({ item }) {
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
        <CartButton onPress={() => handleAddProduct(item.id)}>
          <CartIcon>
            <Icon name="add-shopping-cart" size={20} color="#FFF" />
            <CartIconCount>{amount[item.id] || 0}</CartIconCount>
          </CartIcon>
          <CartText>Adicionar</CartText>
        </CartButton>
      </Product>
    );
  }

  return (
    <Container>
      <FlatList
        horizontal
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
      />
    </Container>
  );
}
