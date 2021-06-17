import React from 'react';

import { Container, Primary, Secondary, Third, Title } from './styles';

const TestScreen: React.FC = () => {
  return (
    <Container>
      <Primary>
        <Title>Primaria</Title>
      </Primary>
      <Secondary>
        <Title>Secundaria</Title>
      </Secondary>
      <Third>
        <Title>Background</Title>
      </Third>
    </Container>
  );
};

export default TestScreen;
