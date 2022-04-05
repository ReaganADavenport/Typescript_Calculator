import React from 'react';
import './App.css';
import styled from 'styled-components';

import Calculator from './components/Calculator';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <Calculator></Calculator>
      </Container>
      
    </div>
  );
}

export default App;
