import React from 'react';

// will need to add Route and Switch to the next line
import { BrowserRouter as Router } from 'react-router-dom';

// bootstrap styling
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div>

        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
