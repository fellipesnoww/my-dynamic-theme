import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0px 30px;
  background-color: ${({ theme }) => theme.background};
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.secondary};
`;
