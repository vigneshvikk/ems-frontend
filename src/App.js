
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Home';
import Add from './Components/Add';
import Edit from './Components/Edit';
import View from './Components/View';

function App() {
  return (
    <div className="App">

<Header/>

<Routes>
  <Route path='' element={<Home/>}/>
  <Route path='add' element={<Add/>}/>
  <Route path='edit/:id' element={<Edit/>}/>
  <Route path='view/:id' element={<View/>}/>

</Routes>
<Footer></Footer>

    </div>
  );
}

export default App;
