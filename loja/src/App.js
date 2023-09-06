import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';

function App() {
  const [card, setCard] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((resposta) => {
        setCard(resposta.data);
      });
  }, []);



  return (
  
      <div className="App">
        <div className="p-3 mb-2 bg-success text-white">Fake Store</div>
        <div className="container">
        <div className='row row-cols-4'>
          {card.map((card) => (
          <Card
              image={card.image}
              title={card.title}
              price={card.price}
              />              
          ))}
              
        </div>
        </div>
      </div>
  );
}

export default App;
