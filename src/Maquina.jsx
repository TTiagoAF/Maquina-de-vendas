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
  const [total, setTotal] = useState(parseFloat(10.00)); // Valor total do moedeiro
  const [stock, setStock] = useState({
    HotWheel: JSON.parse(localStorage.getItem('HotWheels')).quantidade,
    Peluche: JSON.parse(localStorage.getItem('Peluches')).quantidade,
    Puzzles: JSON.parse(localStorage.getItem('Puzzle')).quantidade,
    Pião: JSON.parse(localStorage.getItem('Piões')).quantidade,
    Legos: JSON.parse(localStorage.getItem('Lego')).quantidade,
    Comboios: JSON.parse(localStorage.getItem('Comboio')).quantidade,
    Nenucos: JSON.parse(localStorage.getItem('Nenuco')).quantidade,
    Nerfs: JSON.parse(localStorage.getItem('Nerf')).quantidade,
    Barbies: JSON.parse(localStorage.getItem('Barbie')).quantidade,
    Cubos: JSON.parse(localStorage.getItem('Cubo')).quantidade,
    Berlinde: JSON.parse(localStorage.getItem('Berlindes')).quantidade,
    Pop: JSON.parse(localStorage.getItem('Pops')).quantidade,
  });
  const [selecionar, setSelecionar] = useState(""); // produto selecionado
  const [dinheiro, setDinheiro] = useState(JSON.parse(localStorage.getItem('dinheiro')));
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
  const teste = moment().format('MMM');
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
    HotWheel: JSON.parse(localStorage.getItem('HotWheels')).preco,
    Peluche: JSON.parse(localStorage.getItem('Peluches')).preco,
    Puzzles: JSON.parse(localStorage.getItem('Puzzle')).preco,
    Pião: JSON.parse(localStorage.getItem('Piões')).preco,
    Legos: JSON.parse(localStorage.getItem('Lego')).preco,
    Comboios: JSON.parse(localStorage.getItem('Comboio')).preco,
    Nenucos: JSON.parse(localStorage.getItem('Nenuco')).preco,
    Nerfs: JSON.parse(localStorage.getItem('Nerf')).preco,
    Barbies: JSON.parse(localStorage.getItem('Barbie')).preco,
    Cubos: JSON.parse(localStorage.getItem('Cubo')).preco,
    Berlinde: JSON.parse(localStorage.getItem('Berlindes')).preco,
    Pop: JSON.parse(localStorage.getItem('Pops')).preco,
  };
  const [qtd, setQtd] = useState({
    HotWheel: JSON.parse(localStorage.getItem("HotWheel")),
    Peluche: JSON.parse(localStorage.getItem("Peluche")),
    Puzzles: JSON.parse(localStorage.getItem("Puzzles")),
    Pião: JSON.parse(localStorage.getItem("Pião")),
    Legos: JSON.parse(localStorage.getItem("Legos")),
    Comboios: JSON.parse(localStorage.getItem("Comboios")),
    Nenucos: JSON.parse(localStorage.getItem("Nenucos")),
    Nerfs: JSON.parse(localStorage.getItem("Nerfs")),
    Barbies: JSON.parse(localStorage.getItem("Barbies")),
    Cubos: JSON.parse(localStorage.getItem("Cubos")),
    Berlinde: JSON.parse(localStorage.getItem("Berlinde")),
    Pop: JSON.parse(localStorage.getItem("Pop")),
  });
  const [vendas, setVendas] = useState({
    HotWheel: JSON.parse(localStorage.getItem("HotWheel" + teste)),
    Peluche: JSON.parse(localStorage.getItem("Peluche" + teste)),
    Puzzles: JSON.parse(localStorage.getItem("Puzzles" + teste)),
    Pião: JSON.parse(localStorage.getItem("Pião" + teste)),
    Legos: JSON.parse(localStorage.getItem("Legos" + teste)),
    Comboios: JSON.parse(localStorage.getItem("Comboios" + teste)),
    Nenucos: JSON.parse(localStorage.getItem("Nenucos" + teste)),
    Nerfs: JSON.parse(localStorage.getItem("Nerfs" + teste)),
    Barbies: JSON.parse(localStorage.getItem("Barbies" + teste)),
    Cubos: JSON.parse(localStorage.getItem("Cubos" + teste)),
    Berlinde: JSON.parse(localStorage.getItem("Berlinde" + teste)),
    Pop: JSON.parse(localStorage.getItem("Pop" + teste)),
  });
  
  
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
      setDinheiro((dinheiro) => dinheiro + parseFloat(preco));
      setTotal((moedasInseridas) =>  moedasInseridas + parseFloat(preco));
      setStock((prevStock) => ({
        ...prevStock,
        [selecionar]: prevStock[selecionar] - 1,
        
      }));
      setQtd((prevQtd) => ({
        ...prevQtd,
        [selecionar]: prevQtd[selecionar] + 1,
        
      }));
      setComprar(false);
      setVendas((prevVendas) => ({
        ...prevVendas,
        [selecionar]: prevVendas[selecionar] + 1,
        
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
    localStorage.setItem("dinheiro", JSON.stringify(dinheiro));
    localStorage.setItem([selecionar], JSON.stringify(qtd[selecionar]));
    localStorage.setItem([selecionar] + teste, JSON.stringify(vendas[selecionar]));
    setSelecionar("");
    Brinquedos.tipo = [selecionar], Brinquedos.data = data, Brinquedos.troco = [inserido-precoprodutos[selecionar]], Brinquedos.gasto = precoprodutos[selecionar];
    localStorage.setItem(data, JSON.stringify(Brinquedos));
  };
  return (
    <div>
      
      <h1>Vending Machine</h1>
      <p className="total">Valor total no moedeiro: {total !== null || total !== undefined ? parseFloat(total).toFixed(2) : 0}€</p>
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
      {stock.HotWheel > 0 && escolher === true &&(
        <Produto nome="HotWheel" preco={precoprodutos.HotWheel} estoque={stock.HotWheel} onSelecionar={() => handleselecaoproduto("HotWheel")}/>
      )}
        {stock.Peluche > 0 && escolher === true &&(
        <Produto nome="Peluche" preco={precoprodutos.Peluche} estoque={stock.Peluche} onSelecionar={() => handleselecaoproduto("Peluche")}/>
      )}
       {stock.Puzzles > 0 && escolher === true &&(
        <Produto nome="Puzzles" preco={precoprodutos.Puzzles} estoque={stock.Puzzles} onSelecionar={() => handleselecaoproduto("Puzzles")}/>
      )}
      {stock.Pião > 0 && escolher === true &&(
        <Produto nome="Pião" preco={precoprodutos.Pião} estoque={stock.Pião} onSelecionar={() => handleselecaoproduto("Pião")}/>
      )}
      {stock.Legos > 0 && escolher === true &&(
        <Produto nome="Legos" preco={precoprodutos.Legos} estoque={stock.Legos} onSelecionar={() => handleselecaoproduto("Legos")}/>
      )}
      {stock.Comboios > 0 && escolher === true &&(
        <Produto nome="Comboios" preco={precoprodutos.Comboios} estoque={stock.Comboios} onSelecionar={() => handleselecaoproduto("Comboios")}/>
      )}
      {stock.Nenucos > 0 && escolher === true &&(
        <Produto nome="Nenucos" preco={precoprodutos.Nenucos} estoque={stock.Nenucos} onSelecionar={() => handleselecaoproduto("Nenucos")}/>
      )}
      {stock.Nerfs > 0 && escolher === true &&(
        <Produto nome="Nerfs" preco={precoprodutos.Nerfs} estoque={stock.Nerfs} onSelecionar={() => handleselecaoproduto("Nerfs")}/>
      )}
      {stock.Barbies > 0 && escolher === true &&(
        <Produto nome="Barbies" preco={precoprodutos.Barbies} estoque={stock.Barbies} onSelecionar={() => handleselecaoproduto("Barbies")}/>
      )}
      {stock.Cubos > 0 && escolher === true &&(
        <Produto nome="Cubos" preco={precoprodutos.Cubos} estoque={stock.Cubos} onSelecionar={() => handleselecaoproduto("Cubos")}/>
      )}
      {stock.Berlinde > 0 && escolher === true &&(
        <Produto nome="Berlinde" preco={precoprodutos.Berlinde} estoque={stock.Berlinde} onSelecionar={() => handleselecaoproduto("Berlinde")}/>
      )}
      {stock.Pop > 0 && escolher === true &&(
        <Produto nome="Pop" preco={precoprodutos.Pop} estoque={stock.Pop} onSelecionar={() => handleselecaoproduto("Pop")}/>
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