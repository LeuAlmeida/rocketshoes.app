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
  height: 300px;
  margin: 0px 10px;
  border-radius: 5px;
  padding: 15px;
`;

export const Product = styled.Image`
  max-width: 200px;
  height: 200px;
`;
