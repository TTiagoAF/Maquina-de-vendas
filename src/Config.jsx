import { Link } from "react-router-dom";
import Escolher from './Escolher';
import './Config.css';
import Tabela from "./Tabela";
import { useState } from "react";
import ChartExample from "./Teste";

const Config = () => {
  const [products, setProducts] = useState([]);
  const [dinheiro] = useState(JSON.parse(localStorage.getItem('dinheiro')));

  const handleConfirm = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
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
