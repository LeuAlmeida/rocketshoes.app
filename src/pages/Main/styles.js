import styled from 'styled-components';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
  min-height: 100%;
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  max-width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const CartButton = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const CartIcon = styled.View`
  padding: 12px;
  background: ${darken(0.03, colors.primary)};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const CartIconCount = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const CartText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
