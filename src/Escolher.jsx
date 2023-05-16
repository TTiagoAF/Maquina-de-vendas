import React from 'react';

function Escolher(props) {
  return (
    <li>
      <h1>{props.nome}</h1>
      <p>Preço:</p>
      <input type="number" max={99} />
      <p>Quantidade:</p>
      <input type="number" max={99} />
      <button className="produtos_button" onClick={() => props.onConfirm(props.nome)}>
        Confirm
      </button>
    </li>
  );
}

export default Escolher;