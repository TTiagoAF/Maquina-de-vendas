import React, { useState, useEffect } from "react";
import moment from 'moment';
import "./Maquina.css";
import Produto from "./Produto";
import Modal from "./Modal";
import ErrorBoundary from "./ErrorBoundary"
import { Link } from "react-router-dom";


// Página principal
const VendingMachine = () => {
  // Mostra o modal 1 que está a mostrar todas as ações feitas no site
  const [showModal, setShowModal] = useState(false);
  // Mostra o modal 2 que mostra o preço e o stock de cada brinquedo
  const [showModal2, setShowModal2] = useState(false);
  // Mostrar o total feito no momento que está a ser usado
  const [total, setTotal] = useState(parseFloat(10.00));
  // Guarda o brinquedo escolhido para compra
  const [selecionar, setSelecionar] = useState("");
  // Guarda o total de faturação da loja e vai buscar essa informação á localstorage
  const [dinheiro, setDinheiro] = useState(JSON.parse(localStorage.getItem('dinheiro')));
  // Guarda o dinheiro que foi inserido
  const [inserido, setInserido] = useState(0);
  // Faz que quando se compra um produto mostra a recolha de troco
  const [troco, setTroco] = useState(false);
  // Faz que quando o cliente queira escolher um produto ele clica no botão escolher produto aparece os produtos disponiveis
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
  const data = moment().format('MMMM Do YYYY, h:mm:ss a');
  let datas = "";

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
  //Guardar o URL da Api
  const apiUrl = 'https://localhost:7117';
  //Guardar o preço de todos os produtos
  const [precoprodutos, setPrecoProduto] = useState({});
  //Guardar o stock de todos os produtos
  const [stock, setStock] = useState({});
  //Guardar as vendas totais de todos os produtos
  const [vendastotais, setVendastotais] = useState({});
  //Guardar o nome do brinquedo de todos os produtos
  const [produtos, setProdutos] = useState({});
  //Guardar a Api inteira
  const [api, setApi] = useState([]);
  const [apivendas, setApivendas] = useState([]);

useEffect(() => {
  const fetchBrinquedos = async () => {
    try {
      //Guarda o URL do controller de brinquedos
      const response = await fetch(`${apiUrl}/api/TodosBrinquedos/ListaDeBrinquedos`);
      //Vais buscar e guardar os dados da Api
      const iu = await response.json();
      //Guarda dentro do estado api os dados da api
      setApi(iu);
      //Guarda o URL do controller de vendas
      const responses = await fetch(`${apiUrl}/api/TodasVendas/ListaDeVendas`);
      //Vais buscar e guardar os dados da Api
      const ius = await responses.json();
      //Guarda dentro do estado api os dados da api
      setApivendas(ius);

      if (iu) {
        console.log('Entrou no if');
        // Mapear os objetos de brinquedo e atualizar os estados precoprodutos, stock, vendas totais e nome do brinquedo
        const precos = Object.values(iu).map(brinquedo => brinquedo.preco);
        setPrecoProduto(precos);

        const totais = Object.values(iu).map(brinquedo => brinquedo.vendastotais);
        setVendastotais(totais);

        const quantidades = Object.values(iu).map(brinquedo => brinquedo.quantidade);
        setStock(quantidades);

        const produto = Object.values(iu).map(brinquedo => brinquedo.brinquedo);
        setProdutos(produto);
      } else {
        console.log('Não entrou no if');
      }
    } catch (error) {
      console.error('Erro ao obter os brinquedos da API:', error);
    }
  };
  //Chamar a const fetchbrinquedos
  fetchBrinquedos();
}, []);
// Guarda o produto selecionado
const handleselecaoproduto = async (produto) => {
  setSelecionar(produto);
  setConcluido(false);
};
// Verifica se a compra já foi feita, retira stock e aumenta as vendas
const handleCompras = async () => {
  const preco = precoprodutos[selecionar];
  const falta = inserido - preco;

  if (falta >= 0) {
    setConcluido(true);
    setTroco(true);
    setDinheiro((dinheiro) => dinheiro + parseFloat(preco));
    setTotal((moedasInseridas) => moedasInseridas + parseFloat(preco));
    setComprar(false);
    const novaQuantidade = stock[selecionar] - 1;
    const novaVendasTotais = vendastotais[selecionar] + 1;
    setStock(prevStock => ({ ...prevStock, [selecionar]: novaQuantidade }));
    setVendastotais(prevtotais => ({ ...prevtotais, [selecionar]: novaVendasTotais }));
    try {
      const response = await fetch(`${apiUrl}/api/TodosBrinquedos/AtualizarQuantidadeEVendas/${api[selecionar].id}`, {
        method: 'POST'
      });
      if (response.ok) {
        console.log('Quantidade e vendas totais atualizadas');
      } else {
        console.error('Erro ao atualizar a quantidade e vendas totais do brinquedo');
      }
    } catch (erro) {
      console.error('Erro ao realizar a solicitação:', erro);
    }
  } else if (falta < 0) {
    alert('Insira mais dinheiro');
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
  //Manda para a Api a nova venda feita
  const adicionarVenda = async (novavenda) => {
    try {
      const response = await fetch(`${apiUrl}/api/TodasVendas/AddVendas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novavenda)
      });
  
      if (response.ok) {
        console.log('Nova venda adicionada na API');
      } else {
        console.error('Erro ao adicionar nova venda na API');
      }
    } catch (erro) {
      console.error('Erro ao adicionar nova venda na API:', erro);
    }
  };
  // Manda tudo para a localstorage e é aqui que se recebe o troco
  const handleTroco = async () => {
    datas = data;
    setTroco(false);
    setEscolher(false);
    setComprar(false);
    setInserido(0);
    localStorage.setItem("dinheiro", JSON.stringify(dinheiro));
    setSelecionar("");
    const novavenda = {
      Id_venda: 1,
      Data: datas,
      Id_produto: api[selecionar].id,
      Quantidade_Vendida: 1,
      Preco: precoprodutos[selecionar],
      Troco: inserido - precoprodutos[selecionar]
    };
    await adicionarVenda([novavenda]);
    setApivendas([...apivendas, novavenda]);
  };
  return (
    <div>
      <h1 className="titulo">Vending Machine</h1>
      <p className="total">Valor total no moedeiro: {total !== null || total !== undefined ? parseFloat(total).toFixed(2) : 0}€</p>
      <button className="modal-button" onClick={() => setShowModal(true)}>Ver lista de compras</button>
      {showModal ? (
        <Modal>
          <div>
            <h1>Esta é a lista de compras:</h1>
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
              {produtos[chave]} - {precoprodutos[chave]}€ - {stock[chave]} Quantidades restantes
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
              nome={produtos[chave]}
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