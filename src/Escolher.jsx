import React, { useState, useEffect } from 'react';

function Escolher(props) {
  const [id, setId] = useState('');
  const [brinquedo, setBrinquedo] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [api, setApi] = useState([]);

  const handleId = (event) => {
    setId(event.target.value);
  };

  const handleBrinquedo = (event) => {
    setBrinquedo(event.target.value);
  };

  const handlePrecoChange = (event) => {
    setPreco(event.target.value);
  };

  const handleQuantidadeChange = (event) => {
    setQuantidade(event.target.value);
  };

  useEffect(() => {
    const fetchBrinquedos = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/TodosBrinquedos/ListaDeBrinquedos`);
        const data = await response.json();
        setApi(data);
      } catch (error) {
        console.error('Erro ao obter os brinquedos da API:', error);
      }
    };
  
    fetchBrinquedos();
  }, []);

  const handleConfirm = async () => {
    if (preco === '' || quantidade === '' || preco <= -1 || quantidade <= -1) {
      alert('Falta inserir o preço ou a quantidade');
    } else {
      const existingProduct = api.find((product) => product.id === id);
  
      if (existingProduct) {
        const updatedProducts = api.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              preco: parseFloat(preco).toFixed(2),
              quantidade: quantidade,
              brinquedo: brinquedo
            };
          }
          return product;
        });
  
        await atualizarProdutos(updatedProducts);
      } else {
        const newProduct = {
          id: id,
          brinquedo: brinquedo,
          preco: parseFloat(preco).toFixed(2),
          quantidade: quantidade
        };
  
        await adicionarProduto([...api, newProduct]);
        setApi([...api, newProduct]); // Adiciona o novo produto ao array "api"
      }
  
      setId('');
      setBrinquedo('');
      setPreco('');
      setQuantidade('');
      localStorage.setItem(props.name + '2', JSON.stringify(0));
    }
  };

  const apiUrl = 'https://localhost:7117';

  const atualizarProdutos = async (updatedProducts) => {
    try {
      const response = await fetch(`${apiUrl}/api/TodosBrinquedos/AddOrUpdateBrinquedo`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedProducts)
      });
  
      if (response.ok) {
        console.log('Produtos atualizados na API');
        setApi(updatedProducts); // Atualiza o array "api" com os produtos atualizados
      } else {
        console.error('Erro ao atualizar os produtos na API');
      }
    } catch (error) {
      console.error('Erro ao atualizar os produtos na API:', error);
    }
  };
  
  const adicionarProduto = async (newProduct) => {
    try {
      const response = await fetch(`${apiUrl}/api/TodosBrinquedos/AddOrUpdateBrinquedo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      });
  
      if (response.ok) {
        console.log('Novo produto adicionado na API');
      } else {
        console.error('Erro ao adicionar novo produto na API');
      }
    } catch (error) {
      console.error('Erro ao adicionar novo produto na API:', error);
    }
  };

  return (
    <div className={`produtos-boxx`}>
      <h1>Brinquedo</h1>
      <p className='produtos-preco'>Id:</p>
      <input id='pre' type="number" value={id} max={99} onChange={handleId} />
      <p className="produtos-estoque">Brinquedo:</p>
      <input id='quant' type="text" value={brinquedo} max={99} onChange={handleBrinquedo} />
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