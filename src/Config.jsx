import { Link } from "react-router-dom";
import Escolher from './Escolher';
import './Config.css';
import Tabela from "./Tabela";
import { useState } from "react";
import ChartExample from "./Teste";

const Config = () => {
  // Guarda o nome de cada Brinquedo
  // Guarda o valor total de faturação
  const [products,] = useState([]);
  const [dinheiro, ] = useState(JSON.parse(localStorage.getItem('dinheiro')));
  //Manda para a localstorage o preço e quantidade de cada brinquedo sendo o nome do brinquedo a chave
  const handleConfirm = ( preco, quantidade) => {
    const precoquantidade = {
        preco,
        quantidade
      };
      localStorage.setItem(1, JSON.stringify(precoquantidade));
  };
  // Mostra o Escolher, a tabela e o gráfico
  return (
    <div>
      <h1 className="titulo">Configurar stocks e preços</h1>
      <p className="dinheiro">Montante conseguido: {dinheiro !== null || dinheiro !== undefined ? parseFloat(dinheiro).toFixed(2) : localStorage.setItem("dinheiro", JSON.stringify(0))}€</p>
      <Link to={`/`} className="config">
        <button className="produtos-button">Inicio</button>
      </Link>
      <ul className="produtos-config">
      <Escolher products={products} onConfirm={handleConfirm} />
        <br/>
        <Tabela/>
        <br />
        <br />
        <ChartExample/>
      </ul>
    </div>
  );
};

export default Config;