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

  // Guarda a quantidade de vendas de vendas totais
  const [, setQtd] = useState({
    0: JSON.parse(localStorage.getItem("0")),
    1: JSON.parse(localStorage.getItem("1")),
    2: JSON.parse(localStorage.getItem("2")),
    3: JSON.parse(localStorage.getItem("3")),
    4: JSON.parse(localStorage.getItem("4")),
    5: JSON.parse(localStorage.getItem("5")),
    6: JSON.parse(localStorage.getItem("6")),
    7: JSON.parse(localStorage.getItem("7")),
    8: JSON.parse(localStorage.getItem("8")),
    9: JSON.parse(localStorage.getItem("9")),
    10: JSON.parse(localStorage.getItem("10")),
    11: JSON.parse(localStorage.getItem("11")),
  });
  // Guarda a quantidade de vendas com o valor atual
  const [, setQtdatual] = useState({
    0: JSON.parse(localStorage.getItem("02")),
    1: JSON.parse(localStorage.getItem("12")),
    2: JSON.parse(localStorage.getItem("22")),
    3: JSON.parse(localStorage.getItem("32")),
    4: JSON.parse(localStorage.getItem("42")),
    5: JSON.parse(localStorage.getItem("52")),
    6: JSON.parse(localStorage.getItem("62")),
    7: JSON.parse(localStorage.getItem("72")),
    8: JSON.parse(localStorage.getItem("82")),
    9: JSON.parse(localStorage.getItem("92")),
    10: JSON.parse(localStorage.getItem("102")),
    11: JSON.parse(localStorage.getItem("112")),
  });
  // Guarda o stock de cada produto
  

  // Guarda as quantidades de vendas de cada mês
  const [vendas, setVendas] = useState({
    0: JSON.parse(localStorage.getItem("0" + teste)),
    1: JSON.parse(localStorage.getItem("1" + teste)),
    2: JSON.parse(localStorage.getItem("2" + teste)),
    3: JSON.parse(localStorage.getItem("3" + teste)),
    4: JSON.parse(localStorage.getItem("4" + teste)),
    5: JSON.parse(localStorage.getItem("5" + teste)),
    6: JSON.parse(localStorage.getItem("6" + teste)),
    7: JSON.parse(localStorage.getItem("7" + teste)),
    8: JSON.parse(localStorage.getItem("8" + teste)),
    9: JSON.parse(localStorage.getItem("9" + teste)),
    10: JSON.parse(localStorage.getItem("10" + teste)),
    11: JSON.parse(localStorage.getItem("11" + teste)),
  });
  let Brinquedoss = {};
  for (let key in localStorage) {
    if (key.startsWith('Brinquedoss')) {
      Brinquedoss = {...Brinquedoss, ...JSON.parse(localStorage.getItem(key))}
    }
  }
  const apiUrl = 'https://localhost:7117';
  const [precoprodutos, setPrecoProduto] = useState({});
  const [stock, setStock] = useState({});
  const [produto, setProduto] = useState({});

useEffect(() => {
  const fetchBrinquedos = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/TodosBrinquedos/ListaDeBrinquedos`);
      const iu = await response.json();

      if (iu) {
        console.log('Entrou no if');
        // Mapear os objetos de brinquedo e atualizar os estados precoprodutos e stock
        const precos = iu.map(brinquedo => brinquedo.preco);
        setPrecoProduto(precos);

        const quantidades = Object.values(iu).map(brinquedo => brinquedo.quantidade);
        setStock(quantidades);

        const produto = Object.values(iu).map(brinquedo => brinquedo.brinquedo);
        setProduto(produto);
      } else {
        console.log('Não entrou no if');
      }

    } catch (error) {
      console.error('Erro ao obter os brinquedos da API:', error);
    }
  };

  fetchBrinquedos();
}, []);
  
const atualizarQuantidade = async (brinquedoId, novaQuantidade) => {
  try {
    const response = await fetch(`${apiUrl}/api/TodosBrinquedos/AddOrUpdateBrinquedo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ quantidade: novaQuantidade })
    });

    if (response.ok) {
      console.log(`Quantidade atualizada para o brinquedo ${brinquedoId}`);
    } else {
      console.error(`Erro ao atualizar a quantidade do brinquedo ${brinquedoId}`);
    }
  } catch (error) {
    console.error(`Erro ao atualizar a quantidade do brinquedo ${brinquedoId}:`, error);
  }
};

// Guarda o produto selecionado
const handleselecaoproduto = (produto) => {
  setSelecionar(produto);
  setConcluido(false);

  const novaQuantidade = stock[produto] - 1;
  if (novaQuantidade >= 0) {
    atualizarQuantidade(produto, novaQuantidade);
    setStock(prevStock => ({ ...prevStock, [produto]: novaQuantidade }));
  }
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
    localStorage.setItem([selecionar] + teste, JSON.stringify(vendas[selecionar]));
    setSelecionar("");
    Brinquedoss.tipo = [selecionar], Brinquedoss.data = data, Brinquedoss.troco = [inserido-precoprodutos[selecionar]], Brinquedoss.gasto = precoprodutos[selecionar];
    localStorage.setItem(data, JSON.stringify(Brinquedoss));
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
    
    {Object.keys(precoprodutos).length > 0 && showModal2 ? (
      <Modal>
        <div>
          <h1>Produtos disponíveis:</h1>
        {Object.keys(precoprodutos).map((chave, index) => (
          <p key={index}>
            {produto[chave]} - {precoprodutos[chave]}€ - {stock[chave]} Quantidades restantes
          </p>
        ))}
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
      {Object.keys(stock).map((chave, index) => (
        stock[chave] > 0 && escolher === true && (
          <Produto
          key={index}
          nome={produto[chave]}
          preco={precoprodutos[chave]}
          estoque={stock[chave]}
          onSelecionar={() => handleselecaoproduto(chave)}
          />
        )
      ))}
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