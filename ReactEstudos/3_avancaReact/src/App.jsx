import './App.css'

import City from './assets/city.jpeg';
import Img2 from './assets/img2.jpeg';
import Logo from './assets/logo.png';
import HookUseState from './components/HookUseState';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';


function App() {


  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <img src="/img1.jpeg" alt="Paisagem" />

      <div>
        <img src={City} alt="Paisagem" />
        <img src={Img2} alt="Cidade"/>

      </div>
      <ManageData />
      <HookUseState />
      <ListRender />
    </div>
  )
}

export default App
