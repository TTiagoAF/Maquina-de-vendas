import { Link } from "react-router-dom";
import Escolher from './Escolher';
import './Config.css';
import Tabela from "./Tabela";

const Config = () => {
  const namesProdutos = [
    "HotWheels",
    "Peluches",
    "Puzzle",
    "Piões",
    "Lego",
    "Comboio",
    "Nenuco",
    "Nerf",
    "Barbie",
    "Cubo",
    "Berlindes",
    "Pops",
  ];

  const handleConfirm = (name, preco, quantidade) => {
    const precoquantidade = {
        preco,
        quantidade
      };
      localStorage.setItem(name, JSON.stringify(precoquantidade));
  };

  return (
    <div>
      <h1>Configurar stocks e preços</h1>
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
        <Tabela/>
      </ul>
    </div>
  );
};

export default Config;