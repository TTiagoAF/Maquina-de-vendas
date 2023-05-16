import { Link } from "react-router-dom";
import Escolher from './Escolher';
import './Config.css'

const Config = () => {

    const nomesProdutos = [
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
        
      const handleConfirm = (nome) => {
        console.log(nome);
      };
    return (
        <div>
            <h1>Configurar stocks e preços</h1>
            <Link to={`/`} className="config">
            <button className="produtos-button" >Inicio</button>
                </Link>
                <ul className="produtos-config">
                    {nomesProdutos.map((nome) => (
                    <Escolher nome={nome} key={nome} onConfirm={() => handleConfirm(nome)}/>
                ))}
            </ul>
        </div>
    );
};

export default Config;