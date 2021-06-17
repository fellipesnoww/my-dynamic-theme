import React from 'react';

import { Container, Button, TextButton } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Button>
        <TextButton>Botao 1</TextButton>
      </Button>
      <Button>
        <TextButton>Botao 2</TextButton>
      </Button>
      <Button>
        <TextButton>Botao 3</TextButton>
      </Button>
    </Container>
  );
};

export default Dashboard;
