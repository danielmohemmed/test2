import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const MainComponent = () => {
  return (
    <React.StrictMode>
     <Router basename="/test2">
 
     </Router>
    </React.StrictMode>
     <App />
  );
};

ReactDOM.render(<MainComponent />, document.getElementById('root'));
