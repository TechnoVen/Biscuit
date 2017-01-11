import React from 'react';

const App = ({children}) => (
  <div>
    <Header />
    { children }
  </div>
);

export default App;

const Header = () => (
  <header>
    <h1>Kibble With Strangers</h1>
  </header>
);
