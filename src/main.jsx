import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Find the container element in the DOM
const container = document.getElementById('react-widget-root');

if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error('React widget container not found. Please add a div with id="react-widget-root" to your page.');
}
