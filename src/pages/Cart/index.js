import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
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
  EmptyText,
} from './style';

import { formatPrice } from '../../util/format';
import colors from '../../styles/colors';

function Cart({
  cart,
  navigation,
  products,
  total,
  removeFromCart,
  updateAmountRequest,
}) {
  return (
    <>
      <Container>
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
                  <ProductDelete onPress={() => {}}>
                    <Icon
                      name="delete-forever"
                      size={24}
                      color={colors.primary}
                    />
                  </ProductDelete>
                </ProductInfo>
                <ProductControls>
                  <ProductControlButton onPress={() => {}}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color={colors.primary}
                    />
                  </ProductControlButton>
                  <ProductAmount value={String(item.amount)} />
                  <ProductControlButton onPress={() => {}}>
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color={colors.primary}
                    />
                  </ProductControlButton>
                  <ProductSubtotal>R$ 200</ProductSubtotal>
                </ProductControls>
              </Product>
            )}
          />
        </Products>
        <TotalContainer>
          <TotalText>TOTAL</TotalText>
          <TotalAmount>R$ 200</TotalAmount>
          <Order>
            <OrderText>FINALIZAR PEDIDO</OrderText>
          </Order>
        </TotalContainer>
      </Container>
    </>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
