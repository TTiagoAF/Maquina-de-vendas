import { Link } from "react-router-dom";
import Escolher from './Escolher';
import './Config.css';
import Tabela from "./Tabela";
import { useState, useEffect } from "react";
import ChartExample from "./Teste";

const Config = () => {
  const [products, setProducts] = useState([]);
  const [dinheiro] = useState(JSON.parse(localStorage.getItem('dinheiro')));
  const apiUrl = 'https://localhost:7117';
  //Guardar a Api inteira
  const [api, setApi] = useState([]);

  useEffect(() => {
    const fetchBrinquedos = async () => {
      try {
        //Guarda o URL inteiro da Api
        const response = await fetch(`${apiUrl}/api/TodosBrinquedos/ListaDeBrinquedos`);
        //Vais buscar e guardar os dados da Api
        const iu = await response.json();
        //Guarda dentro do estado api os dados da api
        setApi(iu);
      } catch (error) {
        console.error('Erro ao obter os brinquedos da API:', error);
      }
    };
  
    //Chamar a const fetchbrinquedos
    fetchBrinquedos();
  }, []);
  
  const handleConfirm = (newProduct) => {
    setProducts([...api,newProduct]);
  };

  return (
    <div>
      <h1 className="titulo">Configurar stocks e preços</h1>
      <p className="dinheiro">Montante conseguido: {dinheiro !== null || dinheiro !== undefined ? parseFloat(dinheiro).toFixed(2) : localStorage.setItem("dinheiro", JSON.stringify(0))}€</p>
      <Link to={`/`} className="config">
        <button className="produtos-button">Inicio</button>
      </Link>
      <ul className="produtos-config">
        <Escolher onConfirm={handleConfirm} />
        <br/>
        <Tabela products={products} />
        <br />
        <br />
        <ChartExample />
      </ul>
    </div>
  );
};

export default Config;