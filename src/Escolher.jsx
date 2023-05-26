import React, { useState } from 'react';

function Escolher(props) {
  //Guarda o preço e quantidade de cada brinquedo
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const handlePrecoChange = (event) => {
    setPreco(event.target.value);
  };
  const handleQuantidadeChange = (event) => {
    setQuantidade(event.target.value);
  };
  //Verifica se ele inseriu alguma coisa no input do preço e da quantidade se ele tiver inseido ele guarda nas variáveis a quantidade e preço
  const handleConfirm = () => {
    if(preco === "" || quantidade === "")
    {
      alert("Falta inserir o preço ou a quantidade");
    } else {
      props.onConfirm(props.name, parseFloat(preco).toFixed(2), quantidade);
      setPreco('');
      setQuantidade('');
      localStorage.setItem(props.name + "2", JSON.stringify(0));
    }
    
  };
  // input do preço e da quantidade e botão para confirmar a inserção
  return (
    <li>
      <h1>{props.name}</h1>
      <p>Preço:</p>
      <input id='pre' type="number" value={preco} max={99} onChange={handlePrecoChange} />
      <p>Quantidade:</p>
      <input id='quant' type="number" value={quantidade} max={99} onChange={handleQuantidadeChange} />
      <button className="produtos_button" onClick={handleConfirm}>
        Confirmar
      </button>
    </li>
  );
}
export default Escolher;