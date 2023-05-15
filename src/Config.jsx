import { Link } from "react-router-dom";

const Config = () => {
    return (
        <div>
            <h1>Configurar stocks e preços</h1>
            <Link to={`/`} className="config">
            <button className="produtos-button" >Inicio</button>
                </Link>
            <ul className="produtos-form">
                <h1>HotWheels</h1>
                <p>Preço:</p>
                <input type="number" />
                <p>Quantidade:</p>
                <input type="number" />
                <h1>Peluches</h1>
                <p>Preço:</p>
                <input type="number" />
                <p>Quantidade:</p>
                <input type="number" />
                <h1>Puzzle</h1>
                <p>Preço:</p>
                <input type="number" />
                <p>Quantidade:</p>
                <input type="number" />
                
            </ul>
        </div>
    );
};

export default Config;