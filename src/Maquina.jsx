import React, { useState, useEffect } from "react";
import moment from 'moment';
import "./Maquina.css";
import Produto from "./Produto";
import Modal from "./Modal";
import ErrorBoundary from "./ErrorBoundary"
import { Link } from "react-router-dom";

// Página principal
const VendingMachine = () => {
  // Mostrar o modal 1 que mostra todas as ações feitas no site
  const [showModal, setShowModal] = useState(false);
  // Mostrar o modal 2 que mostra o preço e o stock de cada produto
  const [showModal2, setShowModal2] = useState(false);
  // Mostrar o total feito no momento que está a ser usado
  const [total, setTotal] = useState(parseFloat(10.00));
  // Guarda o produto escolhido
  const [selecionar, setSelecionar] = useState("");
  // Guarda o total de faturação da loja
  const [dinheiro, setDinheiro] = useState(JSON.parse(localStorage.getItem('dinheiro')));
  // Guarda o dinheiro inserido
  const [inserido, setInserido] = useState(0);
  // Faz que quando se compra um produto mostra a recolha de troco
  const [troco, setTroco] = useState(false);
  // Faz que quando o cliente queira esscolher um produto ele clica no botão escolher produto aparece os produtos disponiveis
  const [escolher, setEscolher] = useState(false);
  const [comprar, setComprar] = useState(false);
  // As cinco variáveis abaixo é para escolher que moedas se podem inserir
  const [checkdez, setCheckdez] = useState(false);
  const [checkvinte, setCheckvinte] = useState(false);
  const [checkcinquenta, setCheckcinquenta] = useState(false);
  const [checkum, setCheckum] = useState(false);
  const [checkdois, setCheckdois] = useState(false);
  const [, setConcluido] = useState(false);
  // Guarda a data para guardar as compras feitas na localstorage
  const data = moment().format('Do, h:mm:ss a');
  // Guarda o mês para conseguir guardar as vendas de cada mês
  const teste = moment().format('MMM');
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
// Guarda os preços dos produtos
  const precoprodutos = {
    HotWheel: JSON.parse(localStorage.getItem('HotWheel1')).preco,
    Peluche: JSON.parse(localStorage.getItem('Peluche1')).preco,
    Puzzles: JSON.parse(localStorage.getItem('Puzzles1')).preco,
    Pião: JSON.parse(localStorage.getItem('Pião1')).preco,
    Legos: JSON.parse(localStorage.getItem('Legos1')).preco,
    Comboios: JSON.parse(localStorage.getItem('Comboios1')).preco,
    Nenucos: JSON.parse(localStorage.getItem('Nenucos1')).preco,
    Nerfs: JSON.parse(localStorage.getItem('Nerfs1')).preco,
    Barbies: JSON.parse(localStorage.getItem('Barbies1')).preco,
    Cubos: JSON.parse(localStorage.getItem('Cubos1')).preco,
    Berlinde: JSON.parse(localStorage.getItem('Berlinde1')).preco,
    Pop: JSON.parse(localStorage.getItem('Pop1')).preco,
  };
  // Guarda a quantidade de vendas de vendas totais
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
  // Guarda a quantidade de vendas com o valor atual
  const [qtdatual, setQtdatual] = useState({
    HotWheel: JSON.parse(localStorage.getItem("HotWheel2")),
    Peluche: JSON.parse(localStorage.getItem("Peluche2")),
    Puzzles: JSON.parse(localStorage.getItem("Puzzles2")),
    Pião: JSON.parse(localStorage.getItem("Pião2")),
    Legos: JSON.parse(localStorage.getItem("Legos2")),
    Comboios: JSON.parse(localStorage.getItem("Comboios2")),
    Nenucos: JSON.parse(localStorage.getItem("Nenucos2")),
    Nerfs: JSON.parse(localStorage.getItem("Nerfs2")),
    Barbies: JSON.parse(localStorage.getItem("Barbies2")),
    Cubos: JSON.parse(localStorage.getItem("Cubos2")),
    Berlinde: JSON.parse(localStorage.getItem("Berlinde2")),
    Pop: JSON.parse(localStorage.getItem("Pop2")),
  });
  // Guarda o stock de cada produto
  const [stock, setStock] = useState({
    HotWheel: JSON.parse(localStorage.getItem('HotWheel1')).quantidade - qtdatual.HotWheel,
    Peluche: JSON.parse(localStorage.getItem('Peluche1')).quantidade - qtdatual.Peluche,
    Puzzles: JSON.parse(localStorage.getItem('Puzzles1')).quantidade - qtdatual.Puzzles,
    Pião: JSON.parse(localStorage.getItem('Pião1')).quantidade - qtdatual.Pião,
    Legos: JSON.parse(localStorage.getItem('Legos1')).quantidade - qtdatual.Legos,
    Comboios: JSON.parse(localStorage.getItem('Comboios1')).quantidade - qtdatual.Comboios,
    Nenucos: JSON.parse(localStorage.getItem('Nenucos1')).quantidade - qtdatual.Nenucos,
    Nerfs: JSON.parse(localStorage.getItem('Nerfs1')).quantidade - qtdatual.Nerfs,
    Barbies: JSON.parse(localStorage.getItem('Barbies1')).quantidade - qtdatual.Barbies,
    Cubos: JSON.parse(localStorage.getItem('Cubos1')).quantidade - qtdatual.Cubos,
    Berlinde: JSON.parse(localStorage.getItem('Berlinde1')).quantidade - qtdatual.Berlinde,
    Pop: JSON.parse(localStorage.getItem('Pop1')).quantidade - qtdatual.Pop,
  });
  // Guarda as quantidades de vendas de cada mês
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
  // Guarda o produto selecionado
  const handleselecaoproduto = (produto) => {
    setSelecionar(produto);
    setConcluido(false);
  };
  // Os cinco Handles abaixo é para escolher que moedas se podem inserir
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
  // Os cinco handles é para guardar a inserção de cada moeda
  const handleinsersaomoedas10 = () => {
    setInserido((moedasInseridas) => moedasInseridas + 0.1);
  };
  const handleinsersaomoedas20 = () => {
    setInserido((moedasInseridas) => moedasInseridas + 0.2);
  };
  const handleinsersaomoedas50 = () => {
    setInserido((moedasInseridas) => moedasInseridas + 0.5);
  };
  const handleinsersaomoedas1 = () => {
    setInserido((moedasInseridas) => moedasInseridas + 1);
  };
  const handleinsersaomoedas2 = () => {
    setInserido((moedasInseridas) => moedasInseridas + 2);
  };
  // Botão para cancelar compras
  const handleCancelar = () => {
    setInserido(0);
    setEscolher(false);
    setComprar(false);
  };
  // Botão para escolher os produtos
  const handleEscolher = () => {
    setEscolher(true);
    setComprar(true);
  };
  // Verifica se a compra já foi feita, retira stock e aumenta as vendas
  const handleCompras = () => {
    const preco = precoprodutos[selecionar];
    const falta = inserido - preco;
     if(falta >= 0) {
      setConcluido(true);
      setTroco(true);
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
      setQtdatual((prevQtdatual) => ({
        ...prevQtdatual,
        [selecionar]: prevQtdatual[selecionar] + 1,
        
      }));
    }
    else if (falta < 0) {
      alert("Insira mais dinheiro");
    }
  };
  // Manda tudo para a localstorage e é aqui que se recebe o troco
  const handleTroco = () => {
    setTroco(false);
    setEscolher(false);
    setComprar(false);
    setInserido(0);
    localStorage.setItem("dinheiro", JSON.stringify(dinheiro));
    localStorage.setItem([selecionar], JSON.stringify(qtd[selecionar]));
    localStorage.setItem([selecionar] + teste, JSON.stringify(vendas[selecionar]));
    localStorage.setItem([selecionar] + "2", JSON.stringify(qtdatual[selecionar]));
    setSelecionar("");
    Brinquedos.tipo = [selecionar], Brinquedos.data = data, Brinquedos.troco = [inserido-precoprodutos[selecionar]], Brinquedos.gasto = precoprodutos[selecionar];
    localStorage.setItem(data, JSON.stringify(Brinquedos));
  };
  return (
    <div>
      <h1 className="titulo">Vending Machine</h1>
      <p className="total">Valor total no moedeiro: {total !== null || total !== undefined ? parseFloat(total).toFixed(2) : 0}€</p>
      <button className="modal-button" onClick={() => setShowModal(true)}>Ver lista de compras</button>
    
      {showModal ? (
        <Modal>
          <div>
            <h1>Olá, esta é a lista de compras:</h1>
            <ul>
              {values.map((value, index) => (
            <li key={index}>{value}</li>
            ))}
            </ul>
            <div>
              <button onClick={() => setShowModal(false)}>OK</button>
            </div>
          </div>
        </Modal>
        ) : null}
    
      <button className="modal-buttons" onClick={() => setShowModal2(true)}>Produtos disponíveis</button>
    
      {showModal2 ? (
        <Modal>
          <div>
            <h1>Produtos disponíveis:</h1>
            <p>HotWheels - {precoprodutos.HotWheel}€ - {stock.HotWheel} Quantidades restantes</p>
            <p>Peluches - {precoprodutos.Peluche}€ - {stock.Peluche} Quantidades restantes</p>
            <p>Puzzle - {precoprodutos.Puzzles}€ - {stock.Puzzles} Quantidades restantes</p>
            <p>Piões - {precoprodutos.Pião}€ - {stock.Pião} Quantidades restantes</p>
            <p>Lego - {precoprodutos.Legos}€ - {stock.Legos} Quantidades restantes</p>
            <p>Comboio - {precoprodutos.Comboios}€ - {stock.Comboios} Quantidades restantes</p>
            <p>Nenuco - {precoprodutos.Nenucos}€ - {stock.Nenucos} Quantidades restantes</p>
            <p>Nerf - {precoprodutos.Nerfs}€ - {stock.Nerfs} Quantidades restantes</p>
            <p>Barbie - {precoprodutos.Barbies}€ - {stock.Barbies} Quantidades restantes</p>
            <p>Cubo - {precoprodutos.Cubos}€ - {stock.Cubos} Quantidades restantes</p>
            <p>Berlindes - {precoprodutos.Berlinde}€ - {stock.Berlinde} Quantidades restantes</p>
            <p>Pops - {precoprodutos.Pop}€ - {stock.Pop} Quantidades restantes</p>
            <div>
              <button onClick={() => setShowModal2(false)}>OK</button>
            </div>
          </div>
        </Modal>
      ) : null}
    
      <div className="checks">
        <input onChange={handlecheck10} type="checkbox" />0.10€
        <input onChange={handlecheck20} type="checkbox" />0.20€
        <input onChange={handlecheck50} type="checkbox" />0.50€
        <input onChange={handlecheck1} type="checkbox" />1€
        <input onChange={handlecheck2} type="checkbox" />2€
      </div>
    
      <h2>Produtos disponíveis:</h2>
      <ul className="produtos-form">
        {stock.HotWheel > 0 && escolher === true && (
          <Produto nome="HotWheel" preco={precoprodutos.HotWheel} estoque={stock.HotWheel} onSelecionar={() => handleselecaoproduto("HotWheel")}/>
        )}
        {stock.Peluche > 0 && escolher === true && (
          <Produto nome="Peluche" preco={precoprodutos.Peluche} estoque={stock.Peluche} onSelecionar={() => handleselecaoproduto("Peluche")}/>
        )}
        {stock.Puzzles > 0 && escolher === true && (
          <Produto nome="Puzzles" preco={precoprodutos.Puzzles} estoque={stock.Puzzles} onSelecionar={() => handleselecaoproduto("Puzzles")}/>
        )}
        {stock.Pião > 0 && escolher === true && (
          <Produto nome="Pião" preco={precoprodutos.Pião} estoque={stock.Pião} onSelecionar={() => handleselecaoproduto("Pião")}/>
        )}
        {stock.Legos > 0 && escolher === true && (
          <Produto nome="Legos" preco={precoprodutos.Legos} estoque={stock.Legos} onSelecionar={() => handleselecaoproduto("Legos")}/>
        )}
        {stock.Comboios > 0 && escolher === true && (
          <Produto nome="Comboios" preco={precoprodutos.Comboios} estoque={stock.Comboios} onSelecionar={() => handleselecaoproduto("Comboios")}/>
        )}
        {stock.Nenucos > 0 && escolher === true && (
          <Produto nome="Nenucos" preco={precoprodutos.Nenucos} estoque={stock.Nenucos} onSelecionar={() => handleselecaoproduto("Nenucos")}/>
        )}
        {stock.Nerfs > 0 && escolher === true && (
          <Produto nome="Nerfs" preco={precoprodutos.Nerfs} estoque={stock.Nerfs} onSelecionar={() => handleselecaoproduto("Nerfs")}/>
        )}
        {stock.Barbies > 0 && escolher === true && (
          <Produto nome="Barbies" preco={precoprodutos.Barbies} estoque={stock.Barbies} onSelecionar={() => handleselecaoproduto("Barbies")}/>
        )}
        {stock.Cubos > 0 && escolher === true && (
          <Produto nome="Cubos" preco={precoprodutos.Cubos} estoque={stock.Cubos} onSelecionar={() => handleselecaoproduto("Cubos")}/>
        )}
        {stock.Berlinde > 0 && escolher === true && (
          <Produto nome="Berlinde" preco={precoprodutos.Berlinde} estoque={stock.Berlinde} onSelecionar={() => handleselecaoproduto("Berlinde")}/>
        )}
        {stock.Pop > 0 && escolher === true && (
          <Produto nome="Pop" preco={precoprodutos.Pop} estoque={stock.Pop} onSelecionar={() => handleselecaoproduto("Pop")}/>
        )}
      </ul>
    
      <div className="pagar-produtos">
        <p>Preço: {precoprodutos[selecionar]}€</p>
        <p>Dinheiro inserido: {inserido.toFixed(2)}€</p>
        {checkdez === true && (
          <button className="produtos-button" onClick={handleinsersaomoedas10}>Inserir 10 cêntimos</button>
        )}
        {checkvinte === true && (
          <button className="produtos-button" onClick={handleinsersaomoedas20}>Inserir 20 cêntimos</button>
        )}
        {checkcinquenta === true && (
          <button className="produtos-button" onClick={handleinsersaomoedas50}>Inserir 50 cêntimos</button>
        )}
        {checkum === true && (
          <button className="produtos-button" onClick={handleinsersaomoedas1}>Inserir 1 Euro</button>
        )}
        {checkdois === true && (
          <button className="produtos-button" onClick={handleinsersaomoedas2}>Inserir 2 Euro</button>
        )}
        {comprar === true &&
          <button className="produtos-button" onClick={handleCompras}>Comprar</button>
        }
        <button className="produtos-button" onClick={handleEscolher}>Escolher Produtos</button>
        <button className="produtos-button" onClick={handleCancelar}>Cancelar</button>
        <Link to="/config/" class="config">
          <button className="produtos-button">Configurar</button>
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