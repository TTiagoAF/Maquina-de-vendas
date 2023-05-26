//Faz a configuração da view de cada produto
function Produto({ nome, preco, estoque, onSelecionar }) {
  return (
    <div className={`produtos-box ${nome}`}>
      <h2 className="produtos-nome">{nome}</h2>
      <p className="produtos-preco">{preco}€</p>
      <p className="produtos-estoque">{estoque} unidades restantes</p>
      <button className="produtos-buttonss" onClick={onSelecionar}>
        Selecionar
      </button>
    </div>
  );
}

export default Produto;