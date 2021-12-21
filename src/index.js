import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ImportedComponent from './ImportedComponent';
import ReactComponentInsideWebComponent from './ReactComponentInsideWebComponent';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

ImportedComponent();
ReactComponentInsideWebComponent();