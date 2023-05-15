import React, { useState, useEffect } from "react";
import moment from 'moment';
import "./Maquina.css";
import Produto from "./Produto";
import Modal from "./Modal";
import ErrorBoundary from "./ErrorBoundary"
import { Link } from "react-router-dom";

const VendingMachine = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
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
  const [escolher, setEscolher] = useState(false);
  const [comprar, setComprar] = useState(false);
  const [checkdez, setCheckdez] = useState(false);
  const [checkvinte, setCheckvinte] = useState(false);
  const [checkcinquenta, setCheckcinquenta] = useState(false);
  const [checkum, setCheckum] = useState(false);
  const [checkdois, setCheckdois] = useState(false);
  const [, setConcluido] = useState(false); 
  const data = moment().format('Do, h:mm:ss a');
  const [moedasinseridas, setMoedasInseridas] = useState(0);
  let keys = [];
  let values = [];
  for (let i = 0; i < localStorage.length; i++){
  keys.push(localStorage.key(i));
}

  for (let i = 0; i < keys.length; i++){
  let key = keys[i];
  let value = localStorage.getItem(key);
  values.push(value);
}

  const precoprodutos = {
    HotWheels: 1.00,
    Peluche: 1.20,
    Puzzle: 2.60,
    Piões: 0.70,
    Lego: 5.30,
    Comboio: 2.00,
    Nenuco: 1.00,
    Nerf: 10.20,
    Barbie: 1.90,
    Cubo: 1.30,
    Berlindes: 0.50,
    Pops: 15.00,
  };
  let Brinquedos = {};
  for (let key in localStorage) {
    if (key.startsWith('Brinquedos')) {
      Brinquedos = {...Brinquedos, ...JSON.parse(localStorage.getItem(key))}
    }
  }

  useEffect(() => {
    console.log("Oi", localStorage)
  },[])

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
    setMoedasInseridas((moedasinseridas) => moedasinseridas + 1)
  };

  const handleinsersaomoedas20 = () => {
    setInserido((moedasInseridas) => moedasInseridas + 0.2);
    setMoedasInseridas((moedasinseridas) => moedasinseridas + 1)
  };

  const handleinsersaomoedas50 = () => {
    setInserido((moedasInseridas) => moedasInseridas + 0.5);
    setMoedasInseridas((moedasinseridas) => moedasinseridas + 1)
  };

  const handleinsersaomoedas1 = () => {
    setInserido((moedasInseridas) => moedasInseridas + 1);
    setMoedasInseridas((moedasinseridas) => moedasinseridas + 1)
  };

  const handleinsersaomoedas2 = () => {
    setInserido((moedasInseridas) => moedasInseridas + 2);
    setMoedasInseridas((moedasinseridas) => moedasinseridas + 1);
  };

  const handleCancelar = () => {
    setInserido(0);
    setEscolher(false);
    setComprar(false);
  };

  const handleEscolher = () => {
    setEscolher(true);
    setComprar(true);
  };

  const handleCompras = () => {
    const preco = precoprodutos[selecionar];
    const falta = inserido - preco;
     if(falta >= 0) {
      setConcluido(true);
      setTroco(true);
      setMoedasInseridas((moedasinseridas) => moedasinseridas + 1)
      setMoedas((moedas) => moedas + moedasinseridas);
      setMoedasInseridas(0);
      setTotal((moedasInseridas) => moedasInseridas + preco);
      setStock((prevStock) => ({
        ...prevStock,
        [selecionar]: prevStock[selecionar] - 1,
      }));
    }
    else if (falta < 0) {
      alert("Insira mais dinheiro");
    }
  };

  const handleTroco = () => {
    setTroco(false);
    setEscolher(false);
    setComprar(false);
    setInserido(0);
    setSelecionar("");
    Brinquedos.tipo = [selecionar], Brinquedos.data = data, Brinquedos.troco = [inserido-precoprodutos[selecionar]], Brinquedos.gasto = precoprodutos[selecionar];
    localStorage.setItem(data, JSON.stringify(Brinquedos));
  };

  return (
    <div>
      <h1>Vending Machine</h1>
      <p className="total">Valor total no moedeiro: {total.toFixed(2)}€</p>
      <p className="quantidade">Moedas existentes no moedeiro: {moedas}</p>
                  <button className="modal-button" onClick={() => setShowModal(true)}>Ver lista de compras</button>
                    {
                        showModal ?
                        (
                            <Modal>
                                <div>
                                    <h1>Olá esta é a lista de compras: <br></br> {values}</h1>
                                        <div>
                                            <button onClick={() => setShowModal(false)}>OK</button>
                                    </div>
                                </div>
                            </Modal>
                        ) : null
                    }
                    <button className="modal-buttons" onClick={() => setShowModal2(true)}>Produtos disponiveis</button>
                    {
                        showModal2 ?
                        (
                            <Modal>
                                <div>
                                    <h1>Produtos disponiveis: <br></br> HotWheels - 1.00€ <br></br> Peluche - 1.2€ <br></br> Puzzle - 2.6€ <br></br> Piões - 0.7€ <br></br> Lego - 5.3€ <br></br> Comboio - 2€ <br></br> Nenuco - 1€ <br></br> Nerf - 10.2€ <br></br> Barbie - 1.9€ <br></br> Cubo - 1.3€ <br></br> Berlindes - 0.5€ <br></br> Pops - 15€</h1>
                                        <div>
                                            <button onClick={() => setShowModal2(false)}>OK</button>
                                    </div>
                                </div>
                            </Modal>
                        ) : null
                    }
      <div className="checks">
      <input onChange={handlecheck10} type="checkbox" />0.10€
      <input onChange={handlecheck20} type="checkbox" />0.20€
      <input onChange={handlecheck50} type="checkbox" />0.50€
      <input onChange={handlecheck1} type="checkbox" />1€
      <input onChange={handlecheck2} type="checkbox" />2€
      </div>
      <h2>Produtos disponíveis:</h2>
      <ul className="produtos-form">
      {stock.HotWheels > 0 && escolher === true &&(
        <Produto
          nome="HotWheels"
          preco={precoprodutos.HotWheels}
          estoque={stock.HotWheels}
          onSelecionar={() => handleselecaoproduto("HotWheels")}
        />
      )}
        {stock.Peluche > 0 && escolher === true &&(
        <Produto
          nome="Peluche"
          preco={precoprodutos.Peluche}
          estoque={stock.Peluche}
          onSelecionar={() => handleselecaoproduto("Peluche")}
        />
      )}
       {stock.Puzzle > 0 && escolher === true &&(
        <Produto
          nome="Puzzle"
          preco={precoprodutos.Puzzle}
          estoque={stock.Puzzle}
          onSelecionar={() => handleselecaoproduto("Puzzle")}
        />
      )}
      {stock.Piões > 0 && escolher === true &&(
        <Produto
          nome="Piões"
          preco={precoprodutos.Piões}
          estoque={stock.Piões}
          onSelecionar={() => handleselecaoproduto("Piões")}
        />
      )}
      {stock.Lego > 0 && escolher === true &&(
        <Produto
          nome="Lego"
          preco={precoprodutos.Lego}
          estoque={stock.Lego}
          onSelecionar={() => handleselecaoproduto("Lego")}
        />
      )}
      {stock.Comboio > 0 && escolher === true &&(
        <Produto
          nome="Comboio"
          preco={precoprodutos.Comboio}
          estoque={stock.Comboio}
          onSelecionar={() => handleselecaoproduto("Comboio")}
        />
      )}
      {stock.Nenuco > 0 && escolher === true &&(
        <Produto
          nome="Nenuco"
          preco={precoprodutos.Nenuco}
          estoque={stock.Nenuco}
          onSelecionar={() => handleselecaoproduto("Nenuco")}
        />
      )}
      {stock.Nerf > 0 && escolher === true &&(
        <Produto
          nome="Nerf"
          preco={precoprodutos.Nerf}
          estoque={stock.Nerf}
          onSelecionar={() => handleselecaoproduto("Nerf")}
        />
      )}
      {stock.Barbie > 0 && escolher === true &&(
        <Produto
          nome="Barbie"
          preco={precoprodutos.Barbie}
          estoque={stock.Barbie}
          onSelecionar={() => handleselecaoproduto("Barbie")}
        />
      )}
      {stock.Cubo > 0 && escolher === true &&(
        <Produto
          nome="Cubo"
          preco={precoprodutos.Cubo}
          estoque={stock.Cubo}
          onSelecionar={() => handleselecaoproduto("Cubo")}
        />
      )}
      {stock.Berlindes > 0 && escolher === true &&(
        <Produto
          nome="Berlindes"
          preco={precoprodutos.Berlindes}
          estoque={stock.Berlindes}
          onSelecionar={() => handleselecaoproduto("Berlindes")}
        />
      )}
      {stock.Pops > 0 && escolher === true &&(
        <Produto
          nome="Pops"
          preco={precoprodutos.Pops}
          estoque={stock.Pops}
          onSelecionar={() => handleselecaoproduto("Pops")}
        />
      )}
      </ul>
        <div className="pagar-produtos">
          <p>Preço: {precoprodutos[selecionar]}€</p>
          <p>Dinheiro inserido: {inserido.toFixed(2)}€</p>
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
              {comprar ===true &&
                <button className="produtos-button" onClick={handleCompras}>Comprar</button>
              }
          <button className="produtos-button" onClick={handleEscolher}>Escolher Produtos</button>
          <button className="produtos-button" onClick={handleCancelar}>Cancelar</button>
          <Link to={`/config/`} className="config">
            <button className="produtos-button" >Configurar</button>  
                </Link>
        </div>
      
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
function DetailsErrorBoundary(props) {
  return(
      <ErrorBoundary>
          <VendingMachine {...props}/>
      </ErrorBoundary>
  )
}

export default DetailsErrorBoundary;