import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const MainComponent = () => {
  return (
    <React.StrictMode>
     <Router basename="/test2">
  <App />
     </Router>
    </React.StrictMode>
  );
};

ReactDOM.render(<MainComponent />, document.getElementById('root'));
