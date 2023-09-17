import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import HeroLoop from '../HeroLoop/HeroLoop'

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

// Mantine
import { Container, Center, Card, Text, Title, Button, SimpleGrid } from '@mantine/core'

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

 

  return (
    <Container className="container">
      <HeroLoop />
      <SimpleGrid>
        <Card>
          <RegisterForm />
            <Text>Already a Member?</Text>
            <Button size="sm"  onClick={onLogin}>
              Login
            </Button>
        </Card>
      </SimpleGrid>
    </Container>
  );
}

export default LandingPage;
