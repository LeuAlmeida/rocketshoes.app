import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Scrollable,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  EmptyContainer,
  EmptyCart,
  EmptyText,
} from './styles';

import { formatPrice } from '../../util/format';
import colors from '../../styles/colors';

function Cart({ cart, removeFromCart, updateAmountRequest, total }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  if (cart.length === 0) {
    return (
      <Container>
        <EmptyContainer>
          <EmptyCart />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Scrollable>
          <Products>
            <FlatList
              data={cart}
              keyExtractor={product => String(product.id)}
              renderItem={({ item }) => (
                <Product>
                  <ProductInfo>
                    <ProductImage
                      source={{
                        uri: item.image,
                      }}
                    />
                    <ProductDetails>
                      <ProductTitle>{item.title}</ProductTitle>
                      <ProductPrice>{formatPrice(item.price)}</ProductPrice>
                    </ProductDetails>
                    <ProductDelete onPress={() => removeFromCart(item.id)}>
                      <Icon
                        name="delete-forever"
                        size={24}
                        color={colors.primary}
                      />
                    </ProductDelete>
                  </ProductInfo>
                  <ProductControls>
                    <ProductControlButton onPress={() => decrement(item)}>
                      <Icon
                        name="remove-circle-outline"
                        size={20}
                        color={colors.primary}
                      />
                    </ProductControlButton>
                    <ProductAmount value={String(item.amount)} />
                    <ProductControlButton onPress={() => increment(item)}>
                      <Icon
                        name="add-circle-outline"
                        size={20}
                        color={colors.primary}
                      />
                    </ProductControlButton>
                    <ProductSubtotal>{item.subtotal}</ProductSubtotal>
                  </ProductControls>
                </Product>
              )}
            />
          </Products>
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalAmount>{total}</TotalAmount>
            <Order>
              <OrderText>FINALIZAR PEDIDO</OrderText>
            </Order>
          </TotalContainer>
        </Scrollable>
      </Container>
    </>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
