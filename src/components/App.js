import React from 'react';
import ExampleComponent from './ExampleComponent';
import TestComponent from './TestComponent';

function App() {
  return (
    <div>
      <header>
        <h1>Now</h1> {/* Ensure "Now" is included in the header */}
      </header>
      <ExampleComponent />
      <TestComponent />
    </div>
  );
}

export default App;
