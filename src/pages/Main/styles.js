import styled from 'styled-components';

export const Container = styled.View`
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #16151b;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-top: 15px;
  padding: 15px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Card = styled.View`
  width: 200px;
  background: #fff;
  height: 350px;
  margin: 0px 10px;
  border-radius: 5px;
  padding: 15px;
`;

export const Product = styled.Image`
  max-width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  color: #000;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const CartButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  flex-direction: row;
  background-color: #6355b5;
  align-items: center;
  padding-right: 15px;
  justify-content: space-between;
  border-radius: 5px;
  margin-top: auto;
`;

export const CartIcon = styled.View`
  background-color: red;
  width: 30px;
  height: 40px;
`;

export const CartText = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
`;
