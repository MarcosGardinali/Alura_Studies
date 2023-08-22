import React from 'react';
import styles from './App.module.css'
import Formulario from './Componentes/Formulario';
import Lista from './Componentes/Lista';

function App() {
  return (
    <div className={styles.pagina}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
