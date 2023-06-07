import React, { useState } from 'react';

function Escolher(props) {
  //Guarda o preço e quantidade de cada brinquedo
  const [id, setId] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const handleId = (event) => {
    setId(event.target.value);
  };

  const handlePrecoChange = (event) => {
    setPreco(event.target.value);
  };

  const handleQuantidadeChange = (event) => {
    setQuantidade(event.target.value);
  };
  //Verifica se ele inseriu alguma coisa no input do preço e da quantidade se ele tiver inseido ele guarda nas variáveis a quantidade e preço
  const handleConfirm = () => {
    if(preco === "" || quantidade === "" || preco <= -1 || quantidade <= -1 )
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
      <div className={`produtos-boxx`}>
      <h1>Brinquedo</h1>
      <p className='produtos-preco'>Id:</p>
      <input id='pre' type="number" value={id} max={99} onChange={handleId} />
      <p className='produtos-preco'>Preço:</p>
      <input id='pre' type="number" value={preco} max={99} onChange={handlePrecoChange} />
      <p className="produtos-estoque">Quantidade:</p>
      <input id='quant' type="number" value={quantidade} max={99} onChange={handleQuantidadeChange} />
      <button className="produtos_button" onClick={handleConfirm}>
        Confirmar
      </button>
      </div>
  );
}
export default Escolher;