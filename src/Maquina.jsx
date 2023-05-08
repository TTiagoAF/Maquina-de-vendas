import React, { useState } from "react";
import "./Maquina.css"

const VendingMachine = () => {
  const [total, setTotal] = useState(10); // Valor total do moedeiro
  const [stock, setStock] = useState({
    HotWheels: 20,
    Peluche: 5,
    Puzzle: 10,
  }); // número de latas para vender
  const [selecionar, setSelecionar] = useState(""); // produto selecionado
  const [inserido, setInserido] = useState(0); // dinheiro introduzido
  const [troco, setTroco] = useState(false); // mostra o troco
  const [moedas, setMoedas] = useState(50);

  const precoprodutos = {
    HotWheels: 1,
    Peluche: 1.2,
    Puzzle: 2.6,
  };

  const handleselecaoproduto = (produto) => {
    setSelecionar(produto);
  };

  const handleinsersaomoedas = () => {
    setInserido((moedasInseridas) => moedasInseridas + 0.2);
    setMoedas((moedas) => moedas + 1);
    const preco = precoprodutos[selecionar];
    const falta = inserido - preco;
     if(falta >= 0) {
      setTroco(true);
      setTotal((moedasInseridas) => moedasInseridas + preco);
      setStock((prevStock) => ({
        ...prevStock,
        [selecionar]: prevStock[selecionar] - 1,
      }));
    }
  };

  const handleCompras = () => {
    const preco = precoprodutos[selecionar];
    const falta = inserido - preco;
    if (falta < 0) {
      alert("Insira mais dinheiro");
    }
  };

  const handleTroco = () => {
    setTroco(false);
    setInserido(0);
    if(inserido > precoprodutos[selecionar]) {
      setMoedas((moedas) => moedas - 1);
    }
  };

  return (
    <div>
      <h1>Vending Machine</h1>
      <p className="total">Valor total no moedeiro: {total}€</p>
      <p className="quantidade">Moedas existentes no moedeiro: {moedas}</p>
      <h2>Produtos disponíveis:</h2>
      <ul className="produtos-form">
        {stock.HotWheels > 0 && (
          <li className="HotWheels">
            HotWheels - {precoprodutos.HotWheels}€ <br /> {stock.HotWheels} unidades restantes{" "}
            <button className="produtos-button" onClick={() => handleselecaoproduto("HotWheels")}>
              Selecionar
            </button>
          </li>
        )}
        {stock.Peluche > 0 && (
          <li className="Peluche">
            Peluche - {precoprodutos.Peluche}€ <br /> {stock.Peluche} unidades restantes{" "}
            <button className="produtos-button" onClick={() => handleselecaoproduto("Peluche")}>
              Selecionar
            </button>
          </li>
        )}
        {stock.Puzzle > 0 && (
          <li className="puzzle">
            Puzzle - {precoprodutos.Puzzle}€ <br /> {stock.Puzzle} unidades restantes{" "}
            <button className="produtos-button" onClick={() => handleselecaoproduto("Puzzle")}>
              Selecionar
            </button>
          </li>
        )}
      </ul>
      {selecionar && (
        <div className="pagar-produtos">
          <p>Preço: {precoprodutos[selecionar]}€</p>
          <p>Dinheiro inserido: {inserido}€</p>
          <button className="produtos-button" onClick={handleinsersaomoedas}>Inserir 20 cêntimos</button>
          <button className="produtos-button" onClick={handleCompras}>Comprar</button>
        </div>
      )}
      {troco && (
        <div className="troco-produtos">
          <p>Por favor recolha a sua bebida</p>
          <p>Troco: {(inserido - precoprodutos[selecionar]).toFixed(2)}€</p>
          <button className="produtos-button" onClick={handleTroco}>Recolher troco</button>
        </div>
      )}
    </div>
  );
};

export default VendingMachine;
