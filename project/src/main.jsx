import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure Tailwind is working
import App from './App'; // Update this if your main component file is different

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
