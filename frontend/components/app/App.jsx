import React from 'react';
import { Link, hashHistory } from 'react-router';
import NavigationBar from './NavigationBar';
import IndexContent from './IndexContent';

const App = ({navbar, content}) => {
  return (
    <section className="wrapper">
      <article>
        {navbar || <NavigationBar />}
      </article>
      <article className="content-container">
        {content || <IndexContent />}
      </article>
    </section>
  );
};

export default App;
