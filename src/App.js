import s from './App.css';
import Header from './Header';
import Content from './Content';
import { pizza } from './pizza';
import { useState } from 'react';

function App() {
  const [data, useData] = useState(pizza)
  const [cart, setCart] = useState([])


  return (
    <>
      <Header cart={cart} />

      <div className={s.container}>

        <Content
          data={data}
          cart={cart}
          setCart={setCart} />

      </div>
    </>
  );
}

export default App;
