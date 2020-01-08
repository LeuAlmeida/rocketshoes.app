import React from 'react';
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

import colors from '../../styles/colors';

function Cart({
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
          <Product>
            <ProductInfo>
              <ProductImage
                source={{
                  uri:
                    'https://static.netshoes.com.br/produtos/tenis-vr-sneaker-meia-leve/06/E74-0492-006/E74-0492-006_detalhe2.jpg',
                }}
              />
            </ProductInfo>
            <ProductControls>
              <ProductControlButton onPress={() => {}}>
                <Icon
                  name="remove-circle-outline"
                  size={20}
                  color={colors.primary}
                />
              </ProductControlButton>
              <ProductAmount value={String(2)} />
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

export default Cart;
