import React, { useState } from "react";
import moment from 'moment';
import "./Maquina.css";
import Produto from "./Produto";

const VendingMachine = () => {
  const [total, setTotal] = useState(10); // Valor total do moedeiro
  const [stock, setStock] = useState({
    HotWheels: 20,
    Peluche: 5,
    Puzzle: 10,
    Piões: 7,
    Lego: 2,
    Comboio: 1,
    Nenuco: 13,
    Nerf: 4,
    Barbie: 16,
    Cubo: 10,
    Berlindes: 18,
    Pops: 9,
  }); // número de latas para vender
  const [selecionar, setSelecionar] = useState(""); // produto selecionado
  const [inserido, setInserido] = useState(0); // dinheiro introduzido
  const [troco, setTroco] = useState(false); // mostra o troco
  const [moedas, setMoedas] = useState(50);
  const [checkdez, setCheckdez] = useState(false);
  const [checkvinte, setCheckvinte] = useState(false);
  const [checkcinquenta, setCheckcinquenta] = useState(false);
  const [checkum, setCheckum] = useState(false);
  const [checkdois, setCheckdois] = useState(false);
  const [concluido, setConcluido] = useState(false); 
  const data = moment().format('Do, h:mm:ss a');;

  const precoprodutos = {
    HotWheels: 1,
    Peluche: 1.2,
    Puzzle: 2.6,
    Piões: 0.7,
    Lego: 5.3,
    Comboio: 2,
    Nenuco: 1,
    Nerf: 10.2,
    Barbie: 1.9,
    Cubo: 1.3,
    Berlindes: 0.5,
    Pops: 15,
  };
  let Brinquedos = {};
  for (let key in localStorage) {
    if (key.startsWith('Brinquedos')) {
      Brinquedos = {...Brinquedos, ...JSON.parse(localStorage.getItem(key))}
    }
  }

  const handleselecaoproduto = (produto) => {
    setSelecionar(produto);
    setConcluido(false);
  };

  const handlecheck10 = () => {
    if(checkdez === false) {
      setCheckdez(true);
    } else {
      setCheckdez(false);
    }
  };
  const handlecheck20 = () => {
    if(checkvinte === false) {
      setCheckvinte(true);
    } else {
      setCheckvinte(false);
    }
  };
  const handlecheck50 = () => {
    if(checkcinquenta === false) {
      setCheckcinquenta(true);
    } else {
      setCheckcinquenta(false);
    }
  };
  const handlecheck1 = () => {
    if(checkum === false) {
      setCheckum(true);
    } else {
      setCheckum(false);
    }
  };
  const handlecheck2 = () => {
    if(checkdois === false) {
      setCheckdois(true);
    } else {
      setCheckdois(false);
    }
  };

  const handleinsersaomoedas10 = () => {
    setInserido((moedasInseridas) => moedasInseridas + 0.1);
    setMoedas((moedas) => moedas + 1);
    const preco = precoprodutos[selecionar];
    const falta = inserido - preco;
     if(falta >= 0) {
      setConcluido(true);
      setTroco(true);
      setTotal((moedasInseridas) => moedasInseridas + preco);
      setStock((prevStock) => ({
        ...prevStock,
        [selecionar]: prevStock[selecionar] - 1,
      }));
    }
  };

  const handleinsersaomoedas20 = () => {
    setInserido((moedasInseridas) => moedasInseridas + 0.2);
    setMoedas((moedas) => moedas + 1);
    const preco = precoprodutos[selecionar];
    const falta = inserido - preco;
     if(falta >= 0) {
      setConcluido(true);
      setTroco(true);
      setTotal((moedasInseridas) => moedasInseridas + preco);
      setStock((prevStock) => ({
        ...prevStock,
        [selecionar]: prevStock[selecionar] - 1,
      }));
    }
  };

  const handleinsersaomoedas50 = () => {
    setInserido((moedasInseridas) => moedasInseridas + 0.5);
    setMoedas((moedas) => moedas + 1);
    const preco = precoprodutos[selecionar];
    const falta = inserido - preco;
     if(falta >= 0) {
      setConcluido(true);
      setTroco(true);
      setTotal((moedasInseridas) => moedasInseridas + preco);
      setStock((prevStock) => ({
        ...prevStock,
        [selecionar]: prevStock[selecionar] - 1,
      }));
    }
  };

  const handleinsersaomoedas1 = () => {
    setInserido((moedasInseridas) => moedasInseridas + 1);
    setMoedas((moedas) => moedas + 1);
    const preco = precoprodutos[selecionar];
    const falta = inserido - preco;
     if(falta >= 0) {
      setConcluido(true);
      setTroco(true);
      setTotal((moedasInseridas) => moedasInseridas + preco);
      setStock((prevStock) => ({
        ...prevStock,
        [selecionar]: prevStock[selecionar] - 1,
      }));
    }
  };

  const handleinsersaomoedas2 = () => {
    setInserido((moedasInseridas) => moedasInseridas + 2);
    setMoedas((moedas) => moedas + 1);
    const preco = precoprodutos[selecionar];
    const falta = inserido - preco;
     if(falta >= 0) {
      setConcluido(true);
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
    Brinquedos.tipo = [selecionar], Brinquedos.data = data, Brinquedos.troco = [inserido-precoprodutos[selecionar]], Brinquedos.gasto = precoprodutos[selecionar];
    localStorage.setItem(data, JSON.stringify(Brinquedos));
    if(inserido > precoprodutos[selecionar]) {
      setMoedas((moedas) => moedas - 1);
    }
  };

  return (
    <div>
      <h1>Vending Machine</h1>
      <p className="total">Valor total no moedeiro: {total}€</p>
      <p className="quantidade">Moedas existentes no moedeiro: {moedas}</p>
      <div className="checks">
      <input onChange={handlecheck10} type="checkbox" />0.10€
      <input onChange={handlecheck20} type="checkbox" />0.20€
      <input onChange={handlecheck50} type="checkbox" />0.50€
      <input onChange={handlecheck1} type="checkbox" />1€
      <input onChange={handlecheck2} type="checkbox" />2€
      </div>
      <h2>Produtos disponíveis:</h2>
      <ul className="produtos-form">
      {stock.HotWheels > 0 && (
        <Produto
          nome="HotWheels"
          preco={precoprodutos.HotWheels}
          estoque={stock.HotWheels}
          onSelecionar={() => handleselecaoproduto("HotWheels")}
        />
      )}
        {stock.Peluche > 0 && (
        <Produto
          nome="Peluche"
          preco={precoprodutos.Peluche}
          estoque={stock.Peluche}
          onSelecionar={() => handleselecaoproduto("Peluche")}
        />
      )}
       {stock.Puzzle > 0 && (
        <Produto
          nome="Puzzle"
          preco={precoprodutos.Puzzle}
          estoque={stock.Puzzle}
          onSelecionar={() => handleselecaoproduto("Puzzle")}
        />
      )}
      {stock.Piões > 0 && (
        <Produto
          nome="Piões"
          preco={precoprodutos.Piões}
          estoque={stock.Piões}
          onSelecionar={() => handleselecaoproduto("Piões")}
        />
      )}
      {stock.Lego > 0 && (
        <Produto
          nome="Lego"
          preco={precoprodutos.Lego}
          estoque={stock.Lego}
          onSelecionar={() => handleselecaoproduto("Lego")}
        />
      )}
      {stock.Comboio > 0 && (
        <Produto
          nome="Comboio"
          preco={precoprodutos.Comboio}
          estoque={stock.Comboio}
          onSelecionar={() => handleselecaoproduto("Comboio")}
        />
      )}
      {stock.Nenuco > 0 && (
        <Produto
          nome="Nenuco"
          preco={precoprodutos.Nenuco}
          estoque={stock.Nenuco}
          onSelecionar={() => handleselecaoproduto("Nenuco")}
        />
      )}
      {stock.Nerf > 0 && (
        <Produto
          nome="Nerf"
          preco={precoprodutos.Nerf}
          estoque={stock.Nerf}
          onSelecionar={() => handleselecaoproduto("Nerf")}
        />
      )}
      {stock.Barbie > 0 && (
        <Produto
          nome="Barbie"
          preco={precoprodutos.Barbie}
          estoque={stock.Barbie}
          onSelecionar={() => handleselecaoproduto("Barbie")}
        />
      )}
      {stock.Cubo > 0 && (
        <Produto
          nome="Cubo"
          preco={precoprodutos.Cubo}
          estoque={stock.Cubo}
          onSelecionar={() => handleselecaoproduto("Cubo")}
        />
      )}
      {stock.Berlindes > 0 && (
        <Produto
          nome="Berlindes"
          preco={precoprodutos.Berlindes}
          estoque={stock.Berlindes}
          onSelecionar={() => handleselecaoproduto("Berlindes")}
        />
      )}
      {stock.Pops > 0 && (
        <Produto
          nome="Pops"
          preco={precoprodutos.Pops}
          estoque={stock.Pops}
          onSelecionar={() => handleselecaoproduto("Pops")}
        />
      )}
      </ul>
      {selecionar && concluido === false && (
        <div className="pagar-produtos">
          <p>Preço: {precoprodutos[selecionar]}€</p>
          <p>Dinheiro inserido: {inserido}€</p>
          {checkdez === true && (
              <button className="produtos-button" onClick={handleinsersaomoedas10}>Inserir 10 cêntimos</button>
              )}
          {checkvinte === true &&(
              <button className="produtos-button" onClick={handleinsersaomoedas20}>Inserir 20 cêntimos</button>
              )}
          {checkcinquenta === true &&(
              <button className="produtos-button" onClick={handleinsersaomoedas50}>Inserir 50 cêntimos</button>
              )}
          {checkum === true &&(
              <button className="produtos-button" onClick={handleinsersaomoedas1}>Inserir 1 Euro</button>
              )}
              {checkdois === true &&(
              <button className="produtos-button" onClick={handleinsersaomoedas2}>Inserir 2 Euro</button>
              )}
          <button className="produtos-button" onClick={handleCompras}>Comprar</button>
        </div>
      )}
      {troco && (
        <div className="troco-produtos">
          <p>Por favor recolha o seu brinquedo</p>
          <p>Troco: {(inserido - precoprodutos[selecionar]).toFixed(2)}€</p>
          <button className="produtos-button" onClick={handleTroco}>Recolher troco</button>
        </div>
      )}
    </div>
  );
};


export default VendingMachine;
