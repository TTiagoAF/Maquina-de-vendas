import { Link } from "react-router-dom";
import Escolher from './Escolher';
import './Config.css';
import Tabela from "./Tabela";
import { useState } from "react";
import ChartExample from "./Teste";

const Config = () => {
  const namesProdutos = [
    "HotWheel",
    "Peluche",
    "Puzzles",
    "Pião",
    "Legos",
    "Comboios",
    "Nenucos",
    "Nerfs",
    "Barbies",
    "Cubos",
    "Berlinde",
    "Pop",
  ];
  const [dinheiro, ] = useState(JSON.parse(localStorage.getItem('dinheiro')));
  const handleConfirm = (name, preco, quantidade) => {
    const precoquantidade = {
        preco,
        quantidade
      };
      localStorage.setItem(name + 1, JSON.stringify(precoquantidade));
  };
  return (
    <div>
      <h1>Configurar stocks e preços</h1>
      <p className="dinheiro">Montante conseguido: {dinheiro !== null || dinheiro !== undefined ? parseFloat(dinheiro).toFixed(2) : localStorage.setItem("dinheiro", JSON.stringify(0))}€</p>
      <Link to={`/`} className="config">
        <button className="produtos-button">Inicio</button>
      </Link>
      <ul className="produtos-config">
        {namesProdutos.map((name) => (
          <Escolher
            name={name}
            key={name}
            onConfirm={handleConfirm}
          />
        ))}
        <br />
        <Tabela/>
        <br />
        <br />
        <ChartExample/>
      </ul>
    </div>
  );
};

export default Config;