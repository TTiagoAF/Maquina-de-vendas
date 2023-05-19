import React, { useState } from 'react';

function Escolher(props) {
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const handlePrecoChange = (event) => {
    setPreco(event.target.value);
  };
  const handleQuantidadeChange = (event) => {
    setQuantidade(event.target.value);
  };
  const handleConfirm = () => {
    if(preco === "" || quantidade === "")
    {
      alert("Falta inserir o preço ou a quantidade");
    } else {
      props.onConfirm(props.name, preco, quantidade);
      setPreco('');
      setQuantidade('');
      localStorage.setItem(props.name + "2", JSON.stringify(0));
    }
    
  };
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