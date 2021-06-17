import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0px 30px;
`;

export const Primary = styled.View`
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary};
`;

export const Secondary = styled.View`
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondary};
`;

export const Third = styled.View`
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
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

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #000;
`;
