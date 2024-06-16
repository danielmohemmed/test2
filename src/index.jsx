import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const MainComponent = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

ReactDOM.render(<MainComponent />, document.getElementById('root'));
