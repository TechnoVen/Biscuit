import React from 'react';
import { Link, hashHistory } from 'react-router';
import NavigationBar from './NavigationBar';
import IndexContent from './IndexContent';

const App = ({navbar, content}) => {
  return (
    <main className="wrapper">
      {navbar || <NavigationBar />}
      {content || <IndexContent />}
    </main>
  );
};

export default App;
