import { useState} from 'react'

import './App.css';
import { Header1 } from './Header1';
import { Header3 } from './Header3';
// import { Header } from './Header';

function App() {

  return (
    <>
  <Header1 name="neetu" last="pal"/>
  {/* <Header/> */}
  <Header3/>
    </>
  );
  
}

export default App
