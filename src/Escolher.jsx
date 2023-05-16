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
    props.onConfirm(props.name, preco, quantidade);
  };

  return (
    <li>
      <h1>{props.name}</h1>
      <p>Preço:</p>
      <input type="number" value={preco} max={99} onChange={handlePrecoChange} />
      <p>Quantidade:</p>
      <input type="number" value={quantidade} max={99} onChange={handleQuantidadeChange} />
      <button className="produtos_button" onClick={handleConfirm}>
        Confirm
      </button>
    </li>
  );
}

export default Escolher;