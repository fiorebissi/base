import React from 'react';
import { Router } from '@reach/router';
import Home from '../pages/Home';
import Layout from '../components/Layout/Layout';

const App = () => {
  return (
    <Layout>
      <Router>
         <Home path='/' />
      </Router>
      
    </Layout>
    
    )

}

export default App;
