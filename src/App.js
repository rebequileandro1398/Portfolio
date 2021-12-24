import React from 'react';
import { ParticlesComponent } from './components/Particles/Particles';
import { Route } from 'react-router-dom';
import { Landing } from './components/Landing/Landing';
import { Home } from './components/Home/Home';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <ParticlesComponent/>
      <Route
        exact path='/'
        component={Landing}
      />
      
      <Route
        exact path='/home'
        component={Home}
      />
    </div>
  );
}

export default App;
