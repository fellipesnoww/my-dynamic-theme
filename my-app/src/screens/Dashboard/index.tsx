import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Container, Button, TextButton } from './styles';
import { theme } from '../../styled';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('TestScreen');
  }
  return (
    <Container>
      <Button onPress={handleNavigate}>
        <TextButton>Botao 1</TextButton>
      </Button>
      <Button onPress={handleNavigate}>
        <TextButton>Botao 2</TextButton>
      </Button>
      <Button onPress={handleNavigate}>
        <TextButton>Botao 3</TextButton>
      </Button>
    </Container>
  );
};

export default Dashboard;
